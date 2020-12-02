import React, { Component } from "react";
import axios from "axios";

export default class Spot extends Component {
  constructor(props) {
    super(props);

    this.onClickLabel = this.onClickLabel.bind(this);

    this.state = {
      label: "",
      stations: []
    };
  }

  componentDidMount() {
    const params = {label: this.state.label}
    axios
      .get("http://localhost:8080/trains/spot", {params: params})
      .then(response => {
        this.setState({ stations: response.data });
      })
      .catch(error => {
        console.log(error);
      });
  }

  onClickLabel(e) {
    this.setState({
      label: e.target.value
    });
  }

  render() {
    return(<h1>hello</h1>);
  }
};

