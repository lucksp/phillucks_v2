import React, { Component } from "react";
import { NavHashLink as NavLink } from "react-router-hash-link";
import smoothscroll from "smoothscroll-polyfill";

class Navbar extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
    this.scroll = this.scroll.bind(this);

    this.state = {
      active: 0, // default to home
      navlist: ["about", "projects", "contact"]
    };
  }

  componentWillMount() {
    this.handleClick();
    smoothscroll.polyfill();
    window.addEventListener("scroll", this.scroll);
  }

  handleClick(e) {
    let hash = e
      ? e.target.hash.replace("#", "")
      : window.location.hash.replace("#", "");
    let indexOfHash = this.state.navlist.indexOf(hash);
    if (indexOfHash === -1) {
      this.setState({ active: 0 });
    } else {
      this.setState({ active: indexOfHash + 1 });
    }
  }

  scroll(e) {
    let intro = document.querySelector("#index").getBoundingClientRect();
    if (intro.bottom - this.nav.clientHeight <= 0) {
      this.nav.style.top = 0;
      this.nav.style.bottom = "";
      return false;
    } else {
      this.nav.style.top = "";
      let y = e.target.scrollingElement.scrollTop;
      this.nav.style.bottom = y + "px";
    }
  }

  render() {
    const navs = this.state.navlist.map((nav, i) => {
      return (
        <div className="nav-menu-item" key={i}>
          <NavLink
            scroll={el =>
              window.scrollBy({
                top: el.offsetTop - window.scrollY - this.nav.clientHeight,
                left: 0,
                behavior: "smooth"
              })
            }
            to={"/#" + nav}
            className={
              "link-name" + (this.state.active === i + 1 ? " active " : "")
            }
            onClick={this.handleClick}
          >
            {nav}
          </NavLink>
        </div>
      );
    });

    return (
      <nav ref={node => (this.nav = node)} className="navbar navbar-default">
        <div className="container-fluid flex">
          <div className="navbar-header">
            <NavLink
              smooth
              to="/#index"
              className={this.state.active === 0 ? " active " : ""}
              onClick={this.handleClick}
            >
              Home
            </NavLink>
          </div>
          <div className="nav navbar-nav">{navs}</div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
