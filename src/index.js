import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {urls} from "./utils/urlUtils";
import Room from './components/Room/Room';

ReactDOM.render(
    <Router>
        <Switch>
            <Route path={urls.room.path} component={Room}/>
            <Route path={urls.home.path} component={App}/>
        </Switch>
    </Router>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
