import React, { useEffect, useState } from 'react';
import SinglePackage from '../SinglePackage/SinglePackage';
import './Packages.css';

const Packages = () => {
    const [packages, setPackages] = useState([]);
    useEffect(() => {
        fetch('https://travel-mate-server.onrender.com/packages')
            .then(res => res.json())
            .then(data => setPackages(data));
    }, [])
    return (
        <div className="container" id="packages-page">
            <h6 className="text-danger fw-bold fs-5 mt-5 "><i class="fas fa-long-arrow-alt-right"></i>EXPLORE GREAT PLACES</h6>
            <h2 className="title">POPULAR PACKAGES</h2>
            <div className="row">
                {
                    packages.map(singlePackage => <SinglePackage key={singlePackage._id} singlePackage={singlePackage}></SinglePackage>)
                }
            </div>
        </div>
    );
};

export default Packages;