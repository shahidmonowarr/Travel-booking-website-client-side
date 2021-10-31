import React, { useEffect, useState } from 'react';
import './ManagePackages.css'

const ManagePackages = () => {
    const [packages, setPackages] = useState([]);

    useEffect(() => {
        fetch('https://whispering-mountain-08935.herokuapp.com/packages')
            .then(res => res.json())
            .then(data => setPackages(data));
    }, []);

    const handleDelete = id => {
        const url = `https://whispering-mountain-08935.herokuapp.com/packages/${id}`;
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
        <div className="manage-Packages ">
            <h2 className="text-success fw-bold pt-5 pb-3 fs-1">Remove package If Needed</h2>
            <br />
            {
                packages.map(singlePackage => <div key={singlePackage._id}>
                    <div className="package-div my-2 container">
                        <h3 className="fw-bold fs-4 text-white"><i class="fas fa-hand-holding-heart"></i> {singlePackage.title}</h3>
                        <button className="bg-warning mx-3" onClick={() => handleDelete(singlePackage._id)}> Remove <i class="fas fa-angle-double-right"></i></button>
                    </div>
                </div>)
            }
        </div>
    );
};

export default ManagePackages;