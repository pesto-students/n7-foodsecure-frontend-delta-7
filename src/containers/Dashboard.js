import React, { useEffect, useState } from 'react';
import { ROUTES } from '../config';
import { getData } from '../services/service-call';

function Dashboard(props) {


    const [requestCount, setRequestCount] = useState({});
    const [pickupRequest, setPickupRequest] = useState([]);


    useEffect(() => {
        getOrdersCount();
        getOrdersData();
    }, []);

    const getOrdersCount = async () => {
        const result = await getData({
            url: ROUTES.restaurantStats
        });

        setRequestCount(result);
    }

    const getOrdersData = async () => {
        const result = await getData({
            url: ROUTES.restaurantOrders
        });

        setPickupRequest(result);
    }

    return (
        <div>

            <div className="heading">
                Overview
            </div>

            <div className="d-flex justify-content-center align-items-center">
                <div class="d-inline-flex p-2 bd-highlight">Completed Orders {requestCount.completedCount}</div>

                <div class="d-inline-flex p-2 bd-highlight">Pendings Orders {requestCount.pendingCount}</div>

            </div>

            <table className="table">
                <thead>
                    <tr>
                        <th>NGO Name</th>
                        <th>Price</th>
                        <th>Prepared Time</th>
                        <th>Expiry Time</th>
                        <th>Number of Meals</th>
                        <th>Status</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        pickupRequest.map((request, index) => {
                            return (<tr>
                                <td>{request.name ?? "-"}</td>
                                <td>{request.price}</td>
                                <td>{request.prepared_time}</td>
                                <td>{request.expiry_time}</td>
                                <td>{request.number_of_meals}</td>
                                <td>{request.status}</td>

                            </tr>)
                        })
                    }
                </tbody>
            </table>


        </div>
    );
}

export default Dashboard;