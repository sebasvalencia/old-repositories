/* eslint-disable quotes */
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as actionCreators from "../actions/actionCreators";
import Main from "./Main";

function mapStateToProps(state) {
  return {
    posts: state.posts, //this.props.posts
    comments: state.comments //this.props.comments
  };
}

function mapDispachToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

// mapStateToProps -> func
// mapDispachToProps -> func serve
const App = connect(
  mapStateToProps,
  mapDispachToProps
)(Main);//Call component inmidiatly , take the component add all the state and add to props

export default App;
