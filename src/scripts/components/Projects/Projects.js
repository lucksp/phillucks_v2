import React, { Component } from "react";

import { connect } from "redux-zero/react";
import actions from "../../redux-zero/actions";

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

  render() {
    if (this.state.loading) {
      return <div>Loading...</div>;
    }

    return <div>Loaded</div>;
  }
}

export default connect(
  mapToProps,
  actions
)(Projects);
