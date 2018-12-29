import React, { Component } from "react";
import { Container, Row } from "reactstrap";

class Contact extends Component {
  navRef = React.createRef();

  componentDidMount() {
    this.props.setRef(this.navRef, this.props.name);
  }

  render() {
    return (
      <section className="contact-info row" ref={this.navRef}>
        <Container>
          <h2 className="righteous header vertical">Contact</h2>
          <Row>
            <div className="contacts">
              <a href="https://github.com/lucksp" target="_blank">
                <div className="contact" id="github" />
              </a>
              <a href="mailto:lucksp@gmail.com" target="_blank">
                <div className="contact" id="email" />
              </a>
              <a href="https://www.linkedin.com/in/lucksp" target="_blank">
                <div className="contact" id="linkedin" />
              </a>
            </div>
          </Row>
        </Container>
      </section>
    );
  }
}

export default Contact;
