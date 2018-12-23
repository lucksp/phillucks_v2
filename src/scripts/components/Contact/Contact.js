import React from "react";
import { Container, Row } from "reactstrap";

const Contact = props => {
  return (
    <section className="contact-info row" ref={props.setRef}>
      <Container>
        <div className="projects-header">
          <h2>Projects</h2>
        </div>
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
};

export default Contact;
