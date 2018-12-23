import React from "react";
import { Jumbotron, Container } from "reactstrap";

const Jumbo = () => {
  return (
    <Jumbotron>
      <Container className="jumbo-content">
        <h1>Front-End Software Developer</h1>
        <p className="lead">
          Living at the intersection of UX, Business, and Technology.
        </p>
      </Container>
    </Jumbotron>
  );
};

export default Jumbo;
