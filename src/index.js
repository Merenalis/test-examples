import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import styled,{createGlobalStyle} from "styled-components";

const Global = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family:Consolas,serif;
  color:black;
} 
`
ReactDOM.render(
  <React.StrictMode>
      <Global/>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


