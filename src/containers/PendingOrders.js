import React from 'react';

function PendingOrders(props) {

    const data = [
        {
            restaurant_name : "Hiati Caterrers",
            price: 900,
            estimated_pickup_time: '4:00 PM',
            expiry: '7:00 PM',
            meals: 2,

        },
        {
            restaurant_name : "Hiati Caterrers",
            price: 900,
            estimated_pickup_time: '4:00 PM',
            expiry: '7:00 PM',
            meals: 2,
            
        },
        {
            restaurant_name : "Hiati Caterrers",
            price: 900,
            estimated_pickup_time: '4:00 PM',
            expiry: '7:00 PM',
            meals: 2,
            
        }
    ]

    const handlePickup = (index) => {
        alert(index);
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
                    <th>Estimated Pickup Time</th>
                    <th>Expiry</th>
                    <th>Meals</th>
                    <th>Action</th>
                </tr>
            </thead>

            <tbody>
                {
                    data.map((request, index) => {
                       return ( <tr>
                        <td>{request.restaurant_name}</td>
                        <td>{request.price}</td>
                        <td>{request.estimated_pickup_time}</td>
                        <td>{request.expiry}</td>
                        <td>{request.meals}</td>

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