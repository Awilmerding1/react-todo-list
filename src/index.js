import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter as Router} from 'react-router-dom'
// import {createBrowserHistory} from 'history'
import {createStore, combineReducers} from 'redux'
import listsReducer from './reducers/listsReducer'
import {composeWithDevTools} from 'redux-devtools-extension'
import {Provider} from 'react-redux'

// function usersReducer(state = {}, action) {
//   return state
// }

const initialState = {lists: [{id: 1, name: "Errands"}, {id: 2, name: "Health"}, {id: 3, name: "Work"}]}

// const combinedReducer = combineReducers({lists: listsReducer, users: usersReducer})


const store = createStore(listsReducer, initialState, composeWithDevTools())

console.log(store)
ReactDOM.render(
  <Router >
    <Provider store={store}>
        <App/>
    </Provider>
  </Router>
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
