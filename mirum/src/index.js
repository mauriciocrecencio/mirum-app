import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import ParticlesBackground from './components/ParticlesBackground/ParticlesBackground'
import { Provider } from "react-redux";
import { Store } from "./store";

ReactDOM.render(
  <Provider store={Store}>
    <Router>
    <ParticlesBackground />

      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);
