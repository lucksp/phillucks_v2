const actions = store => ({
  fetchProjects: state => {
    return fetch("https://api.github.com/users/lucksp/repos", {
      method: "GET",
      headers: {
        Accept: "application/vnd.github.mercy-preview+json"
      }
    })
      .then(response => response.json())
      .then(response => {
        // only return the repos with specific tags
        const filteredResponses = response
          .filter(item => {
            return (
              item.topics.length &&
              item.topics.find(topic => topic.toLowerCase() !== "donottrack")
            );
          })
          .slice(0, 9);
        store.setState({
          loading: false,
          data: filteredResponses
        });
      })
      .catch(error => ({ error, loading: false }));
  }
});

export default actions;
