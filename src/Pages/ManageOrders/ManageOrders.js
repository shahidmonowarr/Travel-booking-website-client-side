import React, { useEffect, useState } from 'react';
import './ManageOrders.css'

const ManageOrders = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch('https://whispering-mountain-08935.herokuapp.com/orders')
            .then(res => res.json())
            .then(data => console.log(data));
    }, []);

    const handleDelete = id => {
        const url = `https://whispering-mountain-08935.herokuapp.com/orders/${id}`;
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount) {
                    alert('Package deleted')
                    const remaining = orders.filter(singlePackage => singlePackage._id !== id);
                    setOrders(remaining);
                }

            })
    }

    return (
        <div className="manage-orders">
            <h2 className="text-success fw-bold pt-5 pb-3 fs-1">Remove package If Needed</h2>
            <br />
            {
                orders.map(order => <div key={order._id}>
                    <div className="order-div my-2 container">
                        <h3 className="fw-bold fs-4 text-white"><i class="fas fa-hand-holding-heart"></i> {order.title}</h3>
                        <button className="bg-warning mx-3" onClick={() => handleDelete(order._id)}> Remove <i class="fas fa-angle-double-right"></i></button>
                    </div>
                </div>)
            }
        </div>
    );
};

export default ManageOrders;