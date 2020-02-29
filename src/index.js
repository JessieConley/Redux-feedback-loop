import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import logger from "redux-logger";


const feedback = (state = [], action) => {
  // TODO - set feedback with data from server
if(action.type === 'ANSWER'){
    return [...state,action.payload]
}
return state
}

 
const reduxStore = createStore(
  combineReducers({
    feedback
  }),
  applyMiddleware(logger)
);

ReactDOM.render(<Provider store={reduxStore}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
