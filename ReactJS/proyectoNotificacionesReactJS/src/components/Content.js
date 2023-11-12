import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import ActivityItem from './ActivityItem';

class Content extends Component{

  constructor(props){
    super(props);
    this.state = {
      activities: []
    }
  }

  componentWillMount() {
    this.setState({activities: this.props});
  }

  render(){

    const {activities} = this.props;

    return(
      <div className="content">
        <div className="line"></div>

        {activities.map((activity) =>{
          return(
            <ActivityItem
              activity={activity}
            />
          );
        })}

      </div>
    );
  }
}

export default Content;
