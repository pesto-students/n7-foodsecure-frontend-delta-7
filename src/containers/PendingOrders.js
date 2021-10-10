import React, { useEffect, useState } from 'react';
import { ROUTES } from '../config';
import { getData, postData } from '../services/service-call';
import { alertService } from '../_services';

function PendingOrders(props) {

   
    const [pendingOrders, setPendingOrders] = useState([]);


    useEffect(() => {
        getPendingOrders();
    }, []);


    const getPendingOrders = async () => {
        const result = await getData({
            url : ROUTES.ngoPickup
        });

        setPendingOrders(result);
    }

    const handlePickup = async (index) => {
        let id = pendingOrders[index].pickupid;

        const result = await getData({
            url : `${ROUTES.pickUpConfirmation}${id}`
        });

        alertService.success('Confirmation Sent to Restaurant for Pickup', { autoClose: true, keepAfterRouteChange: true });


        getPendingOrders();


    }


    return (
        <div>

            <div className="heading">
                Pending Orders
            </div>

        <table className="table">
            <thead>
                <tr>
                    <th>Restaurant Name</th>
                    <th>Price</th>
                    <th>Prepared Time</th>
                    <th>Expiry Time</th>
                    <th>Number of Meals</th>
                    <th>Action</th>
                </tr>
            </thead>

            <tbody>
                {
                    pendingOrders.map((request, index) => {
                       return ( <tr>
                        <td>{request.name}</td>
                        <td>{request.price}</td>
                        <td>{request.prepared_time}</td>
                        <td>{request.expiry_time}</td>
                        <td>{request.number_of_meals}</td>
                        
                        <td>
                            <button className="primary-button" onClick={() => handlePickup(index)} >Pickup</button>
                        </td>
                    </tr>)
                    })
                }
            </tbody>
        </table>    

            
        </div>
    );
}

export default PendingOrders;