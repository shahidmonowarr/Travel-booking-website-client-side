import React, { useEffect, useState } from 'react';

const MyOrder = () => {
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        fetch('https://whispering-mountain-08935.herokuapp.com/orders')
            .then(res => res.json())
            .then(data => setOrders(data));
    }, [])
    return (
        <div>
            <h2>My Order</h2>
            {
                orders.map(order => <div className="m-5 p-3 border-2 rounded-3 bg-success" key={order._id}>
                    <h1>Title: {order.title}</h1>
                    <h4>price: {order.price}</h4>
                    <h6>Order Status: {order.orderStatus}</h6>
                </div>)
            }

        </div>
    );
};

export default MyOrder; <h2>My Order</h2>