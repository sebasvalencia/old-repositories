import React from "react";

class Dashboard extends React.Component {
  state = {
    repos: {}
  };

  getUSerRepos(githubUser) {
    fetch(`https://api.github.com/users/${githubUser}/repos`)
      .then(response => response.json())
      .then(repo =>
        this.setState({
          repos: repo
        })
      )
      .catch(error => console.error("Error:", error));
  }

  componentDidMount() {
    console.log("MOUNTED!");

    const { params } = this.props.match;
    this.getUSerRepos(params.githubUser);
    console.log(this.state.repos);
  }

  render() {
    return (
      <div>
        <p>Dashboard</p>

        <table>
          <thead>
            <tr>
              <th>NAME</th>
              <th>LANGUAGE</th>
              <th>GIT URL</th>
              <th>DESCRIPTION</th>
            </tr>
          </thead>
          <tbody>
            {Object.keys(this.state.repos).map(r => (
              //console.log(r)
              <tr key={r}>
                <td>{this.state.repos[r].id}</td>
                <td>{this.state.repos[r].language}</td>
                <td>{this.state.repos[r].html_url}</td>
                <td>{this.state.repos[r].description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Dashboard;
