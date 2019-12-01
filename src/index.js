import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import configureStore from "./store";
import { BrowserRouter as Router } from "react-router-dom";
import { Routes } from "./routes";

ReactDOM.render(
  <Provider store={configureStore()}>
    <Router>
      <Routes />
    </Router>
  </Provider>,
  document.getElementById("root")
);
