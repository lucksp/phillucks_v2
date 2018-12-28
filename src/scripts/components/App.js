import React, { Component } from "react";
import Navibar from "./Navbar/Navibar";
import Jumbo from "./Jumbotron/Jumbo";
import About from "./About/About";
import Projects from "./Projects/Projects";
import Contact from "./Contact/Contact";

import { Provider } from "redux-zero/react";
import store from "../redux-zero/store";

class App extends Component {
  state = {
    navRefs: {}
  };
  aboutRef = React.createRef();
  projectsRef = React.createRef();
  contactRef = React.createRef();

  handleRefs = (el, name) => {
    let newRef = {};
    switch (name) {
      case "about":
        this.aboutRef = el;
        newRef = { aboutRef: this.aboutRef };
        break;
      case "projects":
        this.projectsRef = el;
        newRef = { projectsRef: this.projectsRef };
        break;
      case "contact":
        this.contactRef = el;
        newRef = { contactRef: this.contactRef };
        break;
    }
    this.setState(prevState => ({
      navRefs: { ...prevState.navRefs, ...newRef }
    }));
  };

  render() {
    return (
      <Provider store={store}>
        <div className="app">
          <Navibar refs={this.state.navRefs} />
          <Jumbo />
          <main>
            <About name="about" setRef={this.handleRefs} />
            <Projects name="projects" setRef={this.handleRefs} />
            <Contact name="contact" setRef={this.handleRefs} />
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
