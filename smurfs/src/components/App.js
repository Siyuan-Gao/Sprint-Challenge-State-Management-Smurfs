import React from "react";
import './App.css'
import {createStore, applyMiddleware} from 'redux';
import {rootReducer as reducer} from '../reducers/reducer'
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
import SmurfList from './SmurfList';
import SmurfForm from './SmurfForm';
import "bootstrap/dist/css/bootstrap.min.css";



const store = createStore(reducer, applyMiddleware(thunk));

function App(){

  
    return (
      <Provider store={store}>
        <div className="App">
            <h1>SMURFS! 2.0 W/ Redux</h1>
            <div>Welcome to your state management version of Smurfs!</div>
            <div>Have fun!</div>
          
          <SmurfForm/>
          <SmurfList/>
        </div>

      </Provider>
    );
   
}

export default App;