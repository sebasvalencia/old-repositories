import React from "react";

class Card extends React.Component {
  render() {
    const profile = this.props;
    //this -> refer to an instance each time is created a new react component keep in memory
    return (
      <div className="github-profile">
        <img src={profile.avatar_url} alt={profile.avatar_url} />
        <div className="info">
          <div className="name">{profile.name}</div>
          <div className="company">{profile.company}</div>
        </div>
      </div>
    );
  }
}

export default Card;
