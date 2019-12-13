import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import {App , store} from "./components/App";
import { Provider } from 'react-redux';


const rootElement = document.getElementById('root');
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
