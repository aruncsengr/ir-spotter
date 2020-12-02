import React, { Component } from "react";
import { Link } from 'react-router-dom';
import axios from 'axios';

// Functional React component (lacks state and lifecycle)
const Train = props => (
  <tr>  
    <td key={props.train._id}>
      {props.train.label}
    </td>
    <td>
      <Link to={"/spot"} className="badge badge-info">
        spot
      </Link>
    </td>
  </tr>
);

const TrainList = props => (
  <div className="table-responsive">
    <table className="table table-light table-hover table-striped table-sm">
      <thead className="thead-light">
          <tr>
            <th>Available</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          { props.trains.map(function(train){ return <Train train={train}/> }) }
        </tbody>
      </table>
    </div>
  );

export default TrainList;

