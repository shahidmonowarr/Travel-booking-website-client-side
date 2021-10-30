import React from 'react';
import { Link } from 'react-router-dom';

const SinglePackage = ({ singlePackage }) => {
    const { _id, title, price, description, img } = singlePackage;
    return (
        <div className="service pb-3 ">
            <img className="service-img" src={img} alt="" />
            <h2>{title}</h2>
            <p className="p-2">{description}</p>
            <h4>price: {price}</h4>
            <Link to={`/booking/${_id}`}>
                <button className="btn btn-warning">Book Now</button>
            </Link>

        </div>
    );
};

export default SinglePackage;