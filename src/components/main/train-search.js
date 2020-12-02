import React, { Component } from "react";
import axios from "axios";
import TrainList from './trains-list';


export default class TrainSearch extends Component {
  constructor(props) {
    super(props);

    this.onChangeLabel = this.onChangeLabel.bind(this);
    this.onClick = this.onClick.bind(this);

    this.state = {
      label: null,
      loader: false,
      trains: []
    };
    this.initState = { ...this.state };
  }

  onChangeLabel(e) {
    this.setState({
      label: e.target.value
    });
    this.fire(e);
  }

  resetState(e) {
    this.setState(this.initState);
  }

  onClick(e) {
    this.fire(e);
  }

  fire(e) {
    e.preventDefault();
    if(this.state.label === null) then this.resetState() else null;
    
    this.setState({loader: true})

    const params = {
      searchTerm: this.state.label
    };

    axios.get("http://localhost:8080/trains/search", {params: params})
    .then((response) => {
      this.setState({
        trains: response.data,
        loader: false
      })
    });
  }

  render() {
    return (
      <div>
        <div class="input-group mb-3">
          <input 
              required 
              autoFocus
              className="form-control" 
              type="search" 
              minLength="2" 
              placeholder="Search with train number or name..." 
              aria-label="Search" 
              aria-describedby="button-addon"
              onChange={this.onChangeLabel}
              value={this.state.label}
            />
          <div class="input-group-append">
            <button className="btn btn-outline-secondary text-success" onClick={this.onClick} type="Search" id="button-addon">
              Search
            </button>
          </div>
        </div>
        <TrainList trains={this.state.trains} />
      </div>
    );
  }
}
