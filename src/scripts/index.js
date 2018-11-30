import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/style.scss";

const render = () => ReactDOM.render(<App />, document.getElementById("root"));

render(App);
// Webpack Hot Module Replacement API
if (module.hot) {
  module.hot.accept();
  const NextApp = require("./components/App").default;
  render(NextApp);
}
