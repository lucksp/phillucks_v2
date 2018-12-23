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
  toggle = e => {
    e.preventDefault();
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  handleClick = (e, scrollTo) => {
    if (!e) return false;
    e.preventDefault();

    scrollTo.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });

    this.setState({ active: e.target.name });
  };

  render() {
    const { aboutRef, projectsRef, contactRef } = { ...this.props.refs };

    return (
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">phlucks</NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="ml-auto" navbar>
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
