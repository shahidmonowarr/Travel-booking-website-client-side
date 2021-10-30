import React, { useEffect, useState } from 'react';
import SinglePackage from '../SinglePackage/SinglePackage';
import Package from '../SinglePackage/SinglePackage';
import './Packages.css'

const Packages = () => {
    const [packages, setPackages] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/packages')
            .then(res => res.json())
            .then(data => setPackages(data));
    }, [])
    return (
        <div className="container" id="services">
            <h2 className="text-primary mt-5 mb-3 fs-1"> Our Packages</h2>
            <div className="service-container">
                {
                    packages.map(singlePackage => <SinglePackage key={singlePackage._id} singlePackage={singlePackage}></SinglePackage>)
                }
            </div>
        </div>
    );
};

export default Packages;