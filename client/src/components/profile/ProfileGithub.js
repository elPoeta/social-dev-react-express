import React, { Component } from 'react'
import { Link } from 'react-router-dom';
class ProfileGithub extends Component {
    state = {
        clientId: '7f872dd832545a190c6f',
        clientSecret: '7d00ad27f8a89457e7c80ca2d56f8285cb254002',
        limit: 5,
        sort: 'created: asc',
        repos: []
    }
    componentDidMount() {
        this.fetchRepos();
    }
    fetchRepos = async () => {
        console.log('fetch')
        try {
            const repoResponse = await fetch(`https://api.github.com/users/${this.props.githubuser}/repos?per_page=${this.state.limit}&sort=${this.state.sort}&${this.state.clientId}&client_secret=${this.state.clientSecret}`);
            const repos = await repoResponse.json();
            if (this.refs.myRef) {
                this.setState({ repos });
            }


        } catch (error) {
            console.log(error);
            this.setState({ repos: [] });
        }
    }
    render() {
        const { repos } = this.state;

        const repoItems = repos.length === 0 ? (<div>No repos for this profile</div>) :
            repos.map(repo => (
                <div key={repo.id} className="card card-body mb-2">
                    <div className="row">
                        <div className="col-md-6">
                            <h4>
                                <Link to={repo.html_url} className="text-info" target="_blank">
                                    {repo.name}
                                </Link>
                            </h4>
                            <p>{repo.description}</p>
                        </div>
                        <div className="col-md-6">
                            <span className="badge badge-info mr-1">
                                Stars: {repo.stargazers_count}
                            </span>
                            <span className="badge badge-secondary mr-1">
                                Watchers: {repo.watchers_count}
                            </span>
                            <span className="badge badge-success">
                                Forks: {repo.forks_count}
                            </span>
                        </div>
                    </div>
                </div>
            ));
        return (
            <div ref="myRef">
                <hr />
                <h3 className="">Latest Github Repos</h3>
                {repoItems}
            </div>
        )
    }
}

export default ProfileGithub; 