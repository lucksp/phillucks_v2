import React, { Component } from "react";

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";

class Navibar extends Component {
  state = {
    isOpen: false,
    active: null
  };

  navbarColorEl = React.createRef();

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = e => {
    e.preventDefault();
    //ToDo - add debounce
    this.checkForElementInView(e);
  };

  checkForElementInView = e => {
    let active;
    for (let ref in this.props.refs) {
      //FIXME - refs not appearing in production build
      if (!ref.current) return false;
      let { top, bottom } = this.props.refs[ref].getBoundingClientRect();
      if (top < window.innerHeight && bottom >= 0) {
        switch (ref) {
          case "aboutRef":
            active = "about";
            break;
          case "projectsRef":
            active = "projects";
            break;
          case "contactRef":
            active = "contact";
            break;
          default:
            break;
        }
      } else if (window.scrollY < 60) {
        active = null;
      }
    }
    this.setState({ active });
  };

  toggle = e => {
    e.preventDefault();
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  handleClick = (e, scrollTo) => {
    if (!e) return false;
    e.preventDefault();

    if (!scrollTo) {
      scrollTo = document.body;
    }

    scrollTo.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  };

  render() {
    const { aboutRef, projectsRef, contactRef } = { ...this.props.refs };

    return (
      <Navbar color="light" light expand="md">
        <span
          id="nav-color-bar"
          ref={this.navbarColorEl}
          style={{ width: `${this.state.offsetLeft}%` }}
        />
        <NavbarBrand
          onClick={e => {
            this.handleClick(e);
          }}
          className="z-50"
        >
          phlucks
        </NavbarBrand>
        <NavbarToggler onClick={this.toggle} className="z-50" />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="ml-auto z-50" navbar>
            <NavItem>
              <NavLink
                className={this.state.active === "about" ? "active" : ""}
                href="#about"
                name="about"
                onClick={e => {
                  this.handleClick(e, aboutRef);
                }}
              >
                About
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={this.state.active === "projects" ? "active" : ""}
                href="#projects"
                name="projects"
                data={projectsRef}
                onClick={e => {
                  this.handleClick(e, projectsRef);
                }}
              >
                Projects
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={this.state.active === "contact" ? "active" : ""}
                href="#contact"
                name="contact"
                data={contactRef}
                onClick={e => {
                  this.handleClick(e, contactRef);
                }}
              >
                Contact
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    );
  }
}

export default Navibar;
