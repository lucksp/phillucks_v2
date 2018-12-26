import React from "react";
import { Jumbotron, Container } from "reactstrap";

const Jumbo = () => {
  return (
    <Jumbotron>
      <Container className="jumbo-content">
        <h1 className="righteous">Front-End Software Developer</h1>
        <h2 className="lead">
          Living at the intersection of UX, Business, and Technology.
        </h2>
      </Container>
    </Jumbotron>
  );
};

export default Jumbo;
