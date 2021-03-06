import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";
import Button from "@material-ui/core/Button";

class Review extends Component {
//Axios post reducer data to database and advance to next page on button click
  postFeedback = () => {
    let feedbackToSend = {
      feeling:this.props.reduxState.feelingReducer,
      understanding: this.props.reduxState.understandingReducer,
      support:this.props.reduxState.supportedReducer,
      comments: this.props.reduxState.commentsReducer
    }
    axios({
      method: 'POST',
      url: '/feedback',
      data: feedbackToSend
    })
      .then(response => {
        console.log(response);
        this.props.dispatch({
          type: 'NEW_FEEDBACK',
        })
        this.props.history.push("/thank-you");
      
      })
      .catch(error => {
        console.log("error in POST", error);
        alert("error sending feedback data");
      });
  }
  
//Pass props to display scores and comments in review
  render() {
    return (
      <div className="Review">
        <h1>Review Your Feedback</h1>
        <p>Feelings: {this.props.reduxState.feelingReducer}</p>
        <p>Understanding: {this.props.reduxState.understandingReducer}</p>
        <p>Support: {this.props.reduxState.supportedReducer}</p>
        <p>Comments: {this.props.reduxState.commentsReducer}</p>
        <Button size="large" variant="contained" color="primary" onClick={this.postFeedback}>Submit</Button>
       
      </div>
    );
  }
}

//Read data from reducer
const putReduxStateOnProps = reduxState => ({
  reduxState
});

export default connect(putReduxStateOnProps)(Review);
