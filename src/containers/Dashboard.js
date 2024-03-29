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

            <div className="stats-container">
                <button className="primary-button"><div class="d-inline-flex p-2 bd-highlight">Completed Orders {requestCount.completedCount}</div></button>

                <button className="primary-button">
                    <div class="d-inline-flex p-2 bd-highlight">Pendings Orders {requestCount.pendingCount}</div>
                </button>

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
                                <td>{new Date(request.prepared_time).toString().substring(0,25)}</td>
                                <td>{new Date(request.expiry_time).toString().substring(0,25)}</td>
                                <td>{request.number_of_meals}</td>
                                <td style={{ color: request.status === 'Pending' ? 'red' : 'green' }}>{request.status}</td>

                            </tr>)
                        })
                    }
                </tbody>
            </table>


        </div>
    );
}

export default Dashboard;