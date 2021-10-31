import React from 'react';

const About = () => {
    return (
        <div>
            <div>
                <h1 className="title">About Us</h1>
                <h6 className="text-danger fw-bold fs-5 mt-5 "><i class="fas fa-long-arrow-alt-right"></i>OUR TOUR GALLERY</h6>
                <h2 className="text-success fw-bold pt-5 pb-3 fs-1">HELLO. OUR AGENCY HAS BEEN PRESENT BEST IN THE MARKET</h2>
                <div className="about-gallery text-primary my-5">
                    <div>
                        <h2><i class="fas fa-hand-holding-usd"></i></h2>
                        <h2>AFFORDABLE PRICE</h2>
                        <p>We are offering best service which is value for money</p>
                    </div>
                    <div>
                        <h2><i class="fas fa-map"></i></h2>
                        <h2>BEST DESTINATION</h2>
                        <p>We have the best destination for the traveller</p>
                    </div>
                    <div>
                        <h2><i class="fas fa-taxi"></i></h2>
                        <h2>PERSONAL SERVICE</h2>
                        <p>We have our personal service center where customers can get best service</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;