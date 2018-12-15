import React from "react";
import Navibar from "./Navbar/Navibar";
import Jumbo from "./Jumbotron/Jumbo";
import About from "./About/About";
import Projects from "./Projects/Projects";
import Contact from "./Contact/Contact";

import { Provider } from "redux-zero/react";
import store from "../redux-zero/store";

const App = () => {
  return (
    <Provider store={store}>
      <div className="app">
        <Navibar />
        <Jumbo />
        <About />
        <Projects />
        <Contact />
      </div>
    </Provider>
  );
};

export default App;
