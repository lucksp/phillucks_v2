import React from "react";
import { Container, Row } from "reactstrap";

const Contact = () => {
  return (
    <section className="contact-info row">
      <Container>
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
