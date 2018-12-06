import React, { Component } from "react";

import { connect } from "redux-zero/react";
import actions from "../../redux-zero/actions";
import { ProjectCards } from "./ProjectCards";

import { Container, Row, CardDeck } from "reactstrap";

const mapToProps = ({ loading, data }) => ({ loading, data });

class Projects extends Component {
  state = { loading: this.props.loading };

  componentDidMount() {
    this.props.fetchProjects();
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.loading !== prevState.loading) {
      this.setState({ loading: this.props.loading });
    }
  }

  handleClick = (e, link) => {
    e.preventDefault();
    window.open(link, "_blank");
  };

  render() {
    let results = this.state.loading ? (
      <div>Loading...</div>
    ) : (
      this.props.data.map((item, index) => {
        return (
          <ProjectCards
            key={index}
            handleClick={this.handleClick}
            item={item}
          />
        );
      })
    );
    return (
      <section className="projects">
        <Container>
          <h2>Projects</h2>
          <CardDeck>{results}</CardDeck>
        </Container>
      </section>
    );
  }
}

export default connect(
  mapToProps,
  actions
)(Projects);
