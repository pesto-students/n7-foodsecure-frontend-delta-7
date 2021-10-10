import React, { useEffect, useState } from 'react';

import { ROUTES } from '../config';
import { getData, postData } from '../services/service-call';
import { alertService } from '../_services';

function NGODashboard(props) {


    const [pickupStats, setPickupStats] = useState({});
    const [completedOrders, setCompletedOrders] = useState([]);


    useEffect(() => {
        getCompletedOrders();
        getPickupStats();
    }, []);

    const getCompletedOrders = async () => {
        const result = await getData({
            url: ROUTES.completedOrders
        });

        setCompletedOrders(result);
    }

    const getPickupStats = async () => {
        const result = await getData({
            url: ROUTES.ngoStats
        });

        setPickupStats(result);
    }

    return (
        <div>

            <div className="heading">
                Overview
            </div>

            <div className="d-flex justify-content-center align-items-center">
                <div class="d-inline-flex p-2 bd-highlight">Completed Orders {pickupStats.completed}</div>

                <div class="d-inline-flex p-2 bd-highlight">Pendings Orders {pickupStats.pending}</div>

            </div>


            <div className="heading">
                Completed Orders
            </div>

            <table className="table">
                <thead>
                    <tr>
                        <th>Restaurant Name</th>
                        <th>Price</th>
                        <th>Prepared Time</th>
                        <th>Expiry Time</th>
                        <th>Number of Meals</th>
                        
                    </tr>
                </thead>

                <tbody>
                    {
                        completedOrders.map((request, index) => {
                            return (<tr>
                                <td>{request.name}</td>
                                <td>{request.price}</td>
                                <td>{request.prepared_time}</td>
                                <td>{request.expiry_time}</td>
                                <td>{request.number_of_meals}</td>

                               
                            </tr>)
                        })
                    }
                </tbody>
            </table>


        </div>
    );
}

export default NGODashboard;