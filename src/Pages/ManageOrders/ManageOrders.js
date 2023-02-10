import React, { useEffect, useState } from 'react';
import './ManageOrders.css';

const ManageOrders = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch('https://travel-mate-server.onrender.com/orders')
            .then(res => res.json())
            .then(data => setOrders(data));
    }, []);

    const handleConfirm = id => {
        const matchedOrder = orders.filter(order => order._id == id);
        matchedOrder[0].orderStatus = 'Confirmed';

        fetch(`https://travel-mate-server.onrender.com/orders/${id}`, {
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(matchedOrder)
        })
            .then(res => res.json())
            .then(data => console.log(data))


        // fetch()
    }

    const handleDelete = id => {
        const proceed = window.confirm("Are You sure, You want to delete?");
        if (proceed) {
            const url = `https://travel-mate-server.onrender.com/orders/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount) {
                        alert('Order deleted Successfully')
                        const remaining = orders.filter(singlePackage => singlePackage._id !== id);
                        setOrders(remaining);
                    }
                })
        }

    }
    return (
        <div className="manage-orders">
            <h2 className="text-black fw-bold pt-2 pb-1 fs-1 mx-auto">Confirm OR Delete</h2>
            <br />
            {
                orders.map(order => <div className="orders-div" key={order._id}>
                    <div className="order-div py-3 my-2 container">
                        <h3 className="fw-bold fs-4 text-white"><i class="fas fa-hand-holding-heart"></i> {order.title} </h3>
                        <h6 className="text-white ps-2"> Order status: {order.orderStatus}</h6>
                        <div style={{display: "flex", margin: "auto", }}>
                            <button onClick={() => handleConfirm(order._id)} className="btn btn-success mx-auto">Confirm</button>
                            <button onClick={() => handleDelete(order._id)} className="btn btn-danger mx-auto">Delete</button>
                        </div>
                        
                    </div>
                </div>)
            }
        </div>
    );
};

export default ManageOrders;