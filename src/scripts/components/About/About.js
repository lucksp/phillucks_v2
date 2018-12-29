import React, { Component } from "react";
import { Container } from "reactstrap";

class About extends Component {
  navRef = React.createRef();

  componentDidMount() {
    this.props.setRef(this.navRef, this.props.name);
  }
  render() {
    return (
      <section className="about row" ref={this.navRef}>
        <Container>
          <h2 className="righteous header vertical">About</h2>
          <div>
            Building products with thoughtful User Experience at its core is my
            top priority. Seeing around corners, understanding the importance of
            a clean User Interface and working towards your business goals is
            how I help your product achieve success. I have experience in the
            core components of Javascript, HTML5, and CSS3 to build complete web
            based applications. By implemeting tools such as React, AngularJS,
            express.js, Node.js, and MongoDB, I am able to help develop rich
            applications. I spend my free time exploring Colorado's mountains on
            bike or on foot, travelling, listening to live music, photographing
            landscapes and urban environments, and sampling our state's fine
            selections of beer and whiskey options.
          </div>
        </Container>
      </section>
    );
  }
}

export default About;
