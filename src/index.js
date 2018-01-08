import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Homepage from './Homepage/homepage.js';
import NavBar from './NavBar/navbar.js';
import NotFoundPage from './NotFound/notFound.js';
import TeamPage from './TeamPage/teamPage.js';
import PlayersPage from './PlayersPage/playersPage.js';
import GamePage from './GamePage/gamepage.js';
import PitchPage from './PitchPage/pitchPage';

const routes = (
    <BrowserRouter>
        <div>
            <NavBar />
            <Switch>
                <Route exact path='/' component={Homepage} />
                <Route exact path='/testpage' component={App} />
                <Route path='/team' component={TeamPage} />
                <Route path='/players' component={PlayersPage} />
                <Route path='/games' component={GamePage} />
                <Route path='/game/:id' component={PitchPage} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById('root'));
registerServiceWorker();
