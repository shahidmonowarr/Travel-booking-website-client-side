import React, { useEffect, useState } from 'react';
import useAuth from '../../context/useAuth';
import './MyOrder.css';

const MyOrder = () => {
    const { user } = useAuth();

    const [orders, setOrders] = useState([]);
    useEffect(() => {
        fetch('https://travel-mate-server.onrender.com/orders')
            .then(res => res.json())
            .then(data => {
                const myOrders = data.filter(singleData => singleData.email == user.email);
                setOrders(myOrders);
            });
    }, [orders])
    return (
        <div className="my-order-page">
            <h2 className="text-success fw-bold pt-5 pb-3 fs-1">My Order</h2>
            {
                orders.map(order => <div className=" my-order m-5 p-3 border-2 rounded-3 bg-success" key={order._id}>
                    <h1>Title: {order.title}</h1>
                    <h4>price: {order.price}</h4>
                    <h6>Order Status: {order.orderStatus}</h6>
                </div>)
            }

        </div>
    );
};

export default MyOrder; <h2>My Order</h2>