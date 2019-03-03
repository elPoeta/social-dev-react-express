import React, { Component } from "react";
class ProfileGithub extends Component {
  state = {
    clientId: "7f872dd832545a190c6f",
    clientSecret: "7d00ad27f8a89457e7c80ca2d56f8285cb254002",
    limit: 5,
    sort: "created: asc",
    repos: []
  };
  componentDidMount() {
    this.fetchRepos();
  }
  fetchRepos = async () => {
    try {
      const repoResponse = await fetch(
        `https://api.github.com/users/${this.props.githubuser}/repos?per_page=${
        this.state.limit
        }&sort=${this.state.sort}&${this.state.clientId}&client_secret=${
        this.state.clientSecret
        }`
      );
      const repos = await repoResponse.json();
      if (this.refs.myRef) {
        if (!repos.message) {
          this.setState({ repos });
        }
      }
    } catch (error) {
      console.log(error);
      this.setState({ repos: [] });
    }
  };
  render() {
    const { repos } = this.state;

    const repoItems =
      repos.length === 0 ? (
        <div>No repos for this profile</div>
      ) : (
          repos.map(repo => (
            <div key={repo.id} className="githubuser-items">
              <div className="git-desc">
                <h4>
                  <a
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {repo.name}
                  </a>
                </h4>
                <p>{repo.description}</p>
              </div>

              <div className="git-stars">
                <span className="badge badge-blue">
                  Stars: {repo.stargazers_count}
                </span>
                <span className="badge badge-gray">
                  Watchers: {repo.watchers_count}
                </span>
                <span className="badge badge-green">
                  Forks: {repo.forks_count}
                </span>
              </div>
            </div>
          ))
        );
    return (
      <div ref="myRef" className="githubuser-container">
        <hr className="divisor" />
        <h2>Latest Github Repos</h2>
        {repoItems}
      </div>
    );
  }
}

export default ProfileGithub;
