import React, { Component } from "react";
import { Link } from "react-router-dom";
import TrainSearch from "./train-search";
import Spot from "./spot";

export default class Main extends Component {
  render() {
    return (
        <main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-md-4">
        <div>&nbsp;</div>
        <TrainSearch />
      </main>
    );
  }
}



