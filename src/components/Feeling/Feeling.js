import React, { Component } from "react";
// import { connect } from "react-redux";
// import { HashRouter as Router, Route, Link } from "react-router-dom";



class Feeling extends Component {

    buttonClick = () =>{
        this.props.history.push('/understanding')
    }

    render(){
        return (
        
            <div className="QuestionOne">
              <h1>How are you feeling today?</h1>
              <p>Feeling?</p>
              <select>
                <option>1 (really bad)</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5 (great)</option>
              </select>
              <button onClick={this.buttonClick}>Next</button>
            </div>
           
       
        )
    }
}

// const putReduxStateOnProps = (reduxState) => ({
//     reduxState
// })
export default Feeling;