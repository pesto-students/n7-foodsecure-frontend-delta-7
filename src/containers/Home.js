import React from 'react';

import '../assets/styles/Home.css';
import AppsIcon from '@material-ui/icons/Apps';

import { Link, Switch, Route } from 'react-router-dom';
import PickUpRequest from './PickUpRequest';
import Dashboard from './Dashboard';
import NGODashboard from './NGODashboard';
import PendingOrders from './PendingOrders';
import AutoAwesomeMosaicIcon from '@material-ui/icons/Autorenew';

import ProtectedRoute from '../components/ProtectedRoute';

function Home(props) {

    const role = localStorage.getItem('role');

    return (
        <div className="wrapper">
            <nav id="sidebar">
                <div className="sidebar-header">
                    {/* <Link to="/">

                        <span class="material-icons-outlined">
                            menu
                        </span>


                    </Link> */}
                </div>

                <ul className="list-unstyled components">

                    {
                        role === 'ngo' && (<>

                            <li>
                                <Link to="/leads">
                                    <span class="material-icons-outlined" title="Pending Orders">
                                        pending_actions
                                    </span>
                                </Link>
                            </li>   


                            <li>
                                <Link to="/ngo-dashboard">
                                    <span class="material-icons-outlined" title="Overview">
                                        dashboard
                                    </span>
                                </Link>
                            </li>




                            <li>
                                <Link to="/logout" onClick={() => {
                                    localStorage.removeItem('token');
                                    localStorage.removeItem('role');

                                    window.location.pathname = "/login";
                                }}>
                                    <span class="material-icons-outlined" title="Logout">
                                        logout
                                    </span>
                                </Link>
                            </li>


                        </>)



                    }

                    {
                        role === 'restaurant' && (<>

                            <li>
                                <Link to="/pickup">
                                    <span class="material-icons-outlined" title="Raise pickup request">
                                        restaurant
                                    </span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/dashboard">
                                    <span class="material-icons-outlined" title="Overview">
                                        dashboard
                                    </span>
                                </Link>
                            </li>


                            <li>
                                <Link to="/logout" onClick={() => {
                                    localStorage.removeItem('token');
                                    localStorage.removeItem('role');

                                    window.location.pathname = "/login";
                                }}>
                                    <span class="material-icons-outlined" title="Logout">
                                        logout
                                    </span>
                                </Link>
                            </li>


                        </>)
                    }




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
                    <ProtectedRoute exact path="/ngo-dashboard">
                        <NGODashboard></NGODashboard>
                    </ProtectedRoute>
                    <ProtectedRoute exact path="/leads">
                        <PendingOrders></PendingOrders>
                    </ProtectedRoute>
                    <ProtectedRoute path="/">
                        {
                            role === 'ngo' ?
                                <NGODashboard></NGODashboard>
                                : <PickUpRequest></PickUpRequest>
                        }
                    </ProtectedRoute>
                </Switch>
            </div>

        </div>
    );
}

export default Home;