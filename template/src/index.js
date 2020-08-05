import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import * as OfflinePluginRuntime from "offline-plugin/runtime";
OfflinePluginRuntime.install();

import App from "./App";
import "./index.css";

render(
  <Router>
    <Route component={App} />
  </Router>,
  document.getElementById("root")
);
