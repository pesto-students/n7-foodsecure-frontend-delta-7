import React from 'react';

function Dashboard(props) {


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


    return (
        <div>

            <div className="heading">
                Overview
            </div>

        <table className="table">
            <thead>
                <tr>
                    <th>NGO Name</th>
                    <th>Price</th>
                    <th>Estimated Pickup Time</th>
                    <th>Expiry</th>
                    <th>Meals</th>
                    <th>Status</th>
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