import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Navbar from "./components/navbar/navbar";
import Main from "./components/main/main";


function App() {
  return (
    <Router>
       <Navbar />
       <div className="container-fluid">
          <div className="row">
            <Main />
          </div>
        </div>
    </Router>
  );
}

export default App;

// <Route path="/" exact component={StationsList} />
