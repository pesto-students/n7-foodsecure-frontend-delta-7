import React from 'react';

import { Route, Switch, Redirect } from 'react-router-dom';


import Login from './Login';
import Signup from './Signup';
import Home from './Home';
import WelcomePage from './WelcomePage';

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
                    <Home></Home>
                </Route>

                <Route exact path="/">
                    <WelcomePage></WelcomePage>
                </Route>

                <Route path="*">
                    <Home></Home>
                </Route>

            </Switch>
        </div>
    );
}

export default LandingPage;