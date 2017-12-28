import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Homepage from './Homepage/homepage.js';
import NotFoundPage from './NotFound/notFound.js';

const routes = (
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={Homepage} />
            <Route exact path='/testpage' component={App} />
            <Route component={NotFoundPage} />
        </Switch>
    </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById('root'));
registerServiceWorker();
