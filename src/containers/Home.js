import React from 'react';

import '../assets/styles/Home.css';
import AppsIcon from '@material-ui/icons/Apps';

import { Link, Switch, Route } from 'react-router-dom';
import PickUpRequest from './PickUpRequest';
import Dashboard from './Dashboard';
import AutoAwesomeMosaicIcon from '@material-ui/icons/Autorenew';

function Home(props) {
    return (
        <div className="wrapper">
            <nav id="sidebar">
                <div className="sidebar-header">
                    {/* <h3>Food Secure</h3> */}
                    <Link to="/">
                        <AppsIcon style={{ fontSize: 30 }} className="svg_icons"></AppsIcon>
                    </Link>
                </div>

                <ul className="list-unstyled components">

                    <li>
                        <Link to="/pickup">
                            <AutoAwesomeMosaicIcon style={{ fontSize: 30 }} className="svg_icons"></AutoAwesomeMosaicIcon>
                        </Link>

                    </li>

                    <li>
                        <Link to="/dashboard">
                            <AppsIcon style={{ fontSize: 30 }} className="svg_icons"></AppsIcon>
                        </Link>
                    </li>

                    <li>
                        <Link to="/another">
                            <AppsIcon style={{ fontSize: 30 }} className="svg_icons"></AppsIcon>
                        </Link>
                    </li>
                </ul>
            </nav>



            <div className="shadow full-width p-3 m-3 bg-light rounded">

                <Switch>




                    <Route exact path="/pickup">
                        <PickUpRequest></PickUpRequest>
                    </Route>

                    <Route exact path="/dashboard">
                        <Dashboard></Dashboard>
                    </Route>

                    <Route path="/">
                        <PickUpRequest></PickUpRequest>
                    </Route>

                </Switch>
            </div>

        </div>
    );
}

export default Home;