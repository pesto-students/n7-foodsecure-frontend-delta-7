import React from 'react';

import { BrowserRouter, Route, Switch, Redirect, useRouteMatch } from 'react-router-dom';
import Dashboard from './Dashboard';

import Login from './Login';
import Signup from './Signup';

function LandingPage(props) {
    return (
        <div>
            <Switch>
                <Route exact path="/login">
                    <Login></Login>
                </Route>

                <Route exact path="/register">
                    <Signup></Signup>
                </Route>

                <Route exact path="/dashboard">
                    <Dashboard></Dashboard>
                </Route>
            </Switch>
        </div>
    );
}

export default LandingPage;