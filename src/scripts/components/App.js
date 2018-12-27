import React, { Component } from "react";
import Navibar from "./Navbar/Navibar";
import Jumbo from "./Jumbotron/Jumbo";
import About from "./About/About";
import Projects from "./Projects/Projects";
import Contact from "./Contact/Contact";

import { Provider } from "redux-zero/react";
import store from "../redux-zero/store";

class App extends Component {
  aboutRef = React.createRef();
  projectsRef = React.createRef();
  contactRef = React.createRef();

  render() {
    let refs = {
      aboutRef: this.aboutRef,
      projectsRef: this.projectsRef,
      contactRef: this.contactRef
    };

    return (
      <Provider store={store}>
        <div className="app">
          <Navibar refs={refs} />
          <Jumbo />
          <main>
            <About setRef={el => (this.aboutRef = el)} />
            <Projects setRef={el => (this.projectsRef = el)} />
            <Contact setRef={el => (this.contactRef = el)} />
          </main>
          <footer
            className="small center"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            ©Phil Lucks 2019
          </footer>
        </div>
      </Provider>
    );
  }
}

export default App;
