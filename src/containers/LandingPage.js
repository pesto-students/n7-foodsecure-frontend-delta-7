import React from 'react';

import { BrowserRouter, Route, Switch, Redirect, useRouteMatch } from 'react-router-dom';


import Login from './Login';
import Signup from './Signup';
import Home from './Home';

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

                <Route path="/">
                    <Home></Home>
                </Route>

                <Route path="*">
                    <Redirect to="/home"></Redirect>
                </Route>

            </Switch>
        </div>
    );
}

export default LandingPage;