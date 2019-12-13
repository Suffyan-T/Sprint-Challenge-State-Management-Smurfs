import React, { Component } from "react";
import "./App.css";
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducer';
import SmurfList from './SmurfList';
import NewSmurf from './NewSmurf';



export const store = createStore(rootReducer, applyMiddleware(thunk))


 export function App() {
  return (
    <div className="App">
      <h1 className ='title'>Welcome to the world of Smurfs</h1>
      <SmurfList />
      <NewSmurf/>
    </div>
  );
}


