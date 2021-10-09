import React from 'react';

import '../assets/styles/Home.css';
import AppsIcon from '@material-ui/icons/Apps';

import { Link, Switch, Route } from 'react-router-dom';
import PickUpRequest from './PickUpRequest';
import Dashboard from './Dashboard';
import PendingOrders from './PendingOrders';
import AutoAwesomeMosaicIcon from '@material-ui/icons/Autorenew';

import ProtectedRoute from '../components/ProtectedRoute';

function Home(props) {
    return (
        <div className="wrapper">
            <nav id="sidebar">
                <div className="sidebar-header">
                    <Link to="/">
                        <AppsIcon className="svg_icons nav-icon"></AppsIcon>
                    </Link>
                </div>

                <ul className="list-unstyled components">

                    <li>
                        <Link to="/pickup">
                            <AutoAwesomeMosaicIcon  className="svg_icons nav-icon"></AutoAwesomeMosaicIcon>
                        </Link>
                    </li>
                    <li>
                        <Link to="/dashboard">
                            <AppsIcon className="svg_icons nav-icon"></AppsIcon>
                        </Link>
                    </li>

                    <li>
                        <Link to="/leads">
                            <AppsIcon className="svg_icons nav-icon"></AppsIcon>
                        </Link>
                    </li>

                    <li>
                        <Link to="/another">
                            <AppsIcon className="svg_icons nav-icon"></AppsIcon>
                        </Link>
                    </li>
                </ul>
            </nav>



            <div className="shadow full-width p-3 m-3 bg-light rounded">

                <Switch>
                    <ProtectedRoute exact path="/pickup">
                        <PickUpRequest></PickUpRequest>
                    </ProtectedRoute>
                    <ProtectedRoute exact path="/dashboard">
                        <Dashboard></Dashboard>
                    </ProtectedRoute>
                    <ProtectedRoute exact path="/leads">
                        <PendingOrders></PendingOrders>
                    </ProtectedRoute>
                    <ProtectedRoute path="/">
                        <PickUpRequest></PickUpRequest>
                    </ProtectedRoute>
                </Switch>
            </div>

        </div>
    );
}

export default Home;