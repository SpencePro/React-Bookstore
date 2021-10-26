import React from 'react'
import ReactDom from 'react-dom'
import App from './App';
import {AppProvider} from "./context"

// CSS
import './index.css'

// render component inside div in index.html
// what we are going to render + where we are going to render it
ReactDom.render(
    <React.StrictMode>
        <AppProvider>
            <App/>
        </AppProvider>
    </React.StrictMode>
    , document.getElementById("root")
);

