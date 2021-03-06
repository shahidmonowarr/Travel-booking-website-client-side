import React from 'react';
import { Link } from 'react-router-dom';
import './SinglePackage.css';

const SinglePackage = ({ singlePackage }) => {
    const { _id, title, price, description, location, img } = singlePackage;
    return (
        <div className="col-md-4 col-sm-12">
            <div className="p-2 m-2 service">
                <div>
                    <img className="w-100 p-2 rounded-3" src={img} alt="" />
                </div>
                <div>
                    <h2>{title}</h2>
                    <h4><i class="fas fa-map-marker-alt"></i> {location}</h4>
                    <p className="p-2">{description}</p>
                    <h4>Price: {price}<i class="fas fa-dollar-sign"></i></h4>
                    <Link to={`/booking/${_id}`}>
                        <button className="btn btn-warning">Book Now <i class="fas fa-angle-double-right"></i></button>
                    </Link>
                </div>
            </div>
        </div>

    );
};

export default SinglePackage;