import React, { Component } from "react";
import { NavHashLink as NavLink } from "react-router-hash-link";

class Navbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      active: ""
    };
  }

  render() {
    const navlist = {
      home: "/",
      about: "/#about",
      projects: "/#projects"
    };

    const navs = Object.keys(navlist).map((nav, i) => {
      return (
        <li className="active" key={i}>
          <NavLink smooth to={"/#" + nav} activeClassName="selected">
            <span className="link-name">{nav}</span>
          </NavLink>
        </li>
      );
    });

    return (
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <NavLink smooth to="/" activeClassName="selected">
              Home
            </NavLink>
          </div>
          <ul className="nav navbar-nav">{navs}</ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
