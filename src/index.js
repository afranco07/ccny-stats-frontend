import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Route } from 'react-router-dom';
import Homepage from './Homepage/homepage.js';

const routes = (
    <BrowserRouter>
        <div>
            <Route exact path='/' component={Homepage} />
            <Route exact path='/testpage' component={App} />
        </div>
    </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById('root'));
registerServiceWorker();
