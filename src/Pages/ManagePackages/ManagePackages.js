import React, { useEffect, useState } from 'react';
import './ManagePackages.css';

const ManagePackages = () => {
    const [packages, setPackages] = useState([]);

    useEffect(() => {
        fetch('https://travel-mate-server.onrender.com/packages')
            .then(res => res.json())
            .then(data => setPackages(data));
    }, []);

    const handleDelete = id => {
        const url = `https://travel-mate-server.onrender.com/packages/${id}`;
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount) {
                    alert('Package deleted')
                    const remaining = packages.filter(singlePackage => singlePackage._id !== id);
                    setPackages(remaining);
                }

            })
    }

    return (
        <div className="manage-orders">
            <h2 className="text-black fw-bold pt-2 pb-1 fs-1 mx-auto">Delete package If Needed</h2>
            <br />
            {
                packages.map(singlePackage => <div className="orders-div" key={singlePackage._id}>
                    <div className="order-div py-3 my-2 container">
                        <h3 className="fw-bold fs-4 text-white"><i class="fas fa-hand-holding-heart"></i> {singlePackage.title}</h3>
                        <button className="btn btn-danger mx-auto" onClick={() => handleDelete(singlePackage._id)}> Remove <i class="fas fa-angle-double-right"></i></button>
                    </div>
                </div>)
            }
        </div>
    );
};

export default ManagePackages;