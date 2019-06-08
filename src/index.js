import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createGlobalStyle } from 'styled-components'
import background from "./assets/background.jpg";


const GlobalStyle = createGlobalStyle`
  body {
    background-image: url("${background}");
  }
`;

ReactDOM.render(<div>
    <React.Fragment>
        <GlobalStyle  />
    </React.Fragment>
    <App />
</div>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
