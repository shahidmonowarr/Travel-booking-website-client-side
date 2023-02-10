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
                    <h4 className='fw-bold'>{title}</h4>
                    <h6><i className="fas fa-map-marker-alt"></i> {location}</h6>
                    <p className="pt-2 px-2">{description.slice(0-100)}</p>
                    <h6 className='fw-bold'>Price: {price}<i className="fas fa-dollar-sign"></i></h6>
                    <Link to={`/booking/${_id}`}>
                        <button className="btn btn-warning mb-2">Book Now <i class="fas fa-angle-double-right"></i></button>
                    </Link>
                </div>
            </div>
        </div>

    );
};

export default SinglePackage;