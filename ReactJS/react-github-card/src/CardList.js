import React from "react";
import Card from "./Card";

class CardList extends React.Component {
  render() {
      /* 
      [<Card />, <Card />, <Card />] 
      [React.createElement(),React.createElement(),React.createElement()]
    */
    return this.props.testData.map(profile => <Card key={profile.id} {...profile} />);
  }
}

export default CardList;
