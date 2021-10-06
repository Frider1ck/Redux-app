import React from 'react'
import  ReactDOM  from 'react-dom';
import {createStore} from "redux";
import reducer from "./reduser";
import App from './components/app';
import {Provider} from 'react-redux';


const store = createStore(reducer);

//const {inc, dec, rnd} = bindActionCreators(actions, dispatch);


  ReactDOM.render(
  <Provider store={store}>
      <App/>
  </Provider>
  , document.getElementById('root'));



