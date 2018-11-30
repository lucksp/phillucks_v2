const actions = store => ({
  fetchProjects: state => {
    // debugger;
    // store.setState(
    //   ...state,
    //   ...state.projects,
    //   ...(state.projects.loading = true)
    // );

    return fetch("https://api.github.com/users/lucksp/repos")
      .then(response => response.json())
      .then(response => {
        store.setState({
          loading: false,
          data: response
        });
      })
      .catch(error => ({ error, loading: false }));
  }
});

export default actions;
