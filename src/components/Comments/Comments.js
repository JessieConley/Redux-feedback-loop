import React, { Component } from "react";
import { connect } from "react-redux";


class Comments extends Component {
  //Set initial state
  state = {
    comments: ""
  };

  //Update state to selected value
  handleChangeFor = event => {
    this.setState({
      comments: event.target.value
    });
  };

  //Set up buttonClick function to takes user to the next route they want to go using this.props.history
  buttonClick = () => {
    //Dispatch to reducer
    this.props.dispatch({
      type: "COMMENTS_ANSWER",
      payload: this.state.comments
    });
    // console.log("logging payload from COMMENTS_ANSWER", this.state);
    this.props.history.push("/review");
  };

  render() {
    return (
      <div className="commentsInput">
        <h1>Is there anything else you would like us to know?</h1>
        <textarea
          label="(Optional)"
          rows="10"
          cols="75"
          onChange={this.handleChangeFor}
        />
        <div>
          <button onClick={this.buttonClick}>Next</button>
        </div>
      </div>
    );
  }
}

//Read data from reducer
const putReduxStateOnProps = reduxState => ({
  reduxState
});
export default connect(putReduxStateOnProps)(Comments);