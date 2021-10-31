import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Banner from '../Banner/Banner';
import Packages from '../Packages/Packages';
import './Home.css'

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Packages></Packages>
            <section className="container">
                <h6 className="text-danger fw-bold fs-5 mt-5 "><i class="fas fa-long-arrow-alt-right"></i>TRAVEL BY ACTIVITY</h6>
                <h2 className="title">ADVENTURE & ACTIVITY</h2>
                <p>We are offering some special Adventure Choices, a symbol of support for strong effort in implementing the cleanliness, health, safety, and environment protocols across the tourism industry as mandatory precautions. All to assure travelers that InDOnesia CARE for your safety, health, hygiene and comfort.</p>
                <div className="activity-section text-primary my-5">
                    <div>
                        <h2><i class="fas fa-mountain"></i></h2>
                        <h2>Adventure</h2>
                        <p>15 destination</p>
                    </div>
                    <div>
                        <h2><i class="fas fa-suitcase-rolling"></i></h2>
                        <h2>Trekking</h2>
                        <p>10 destination</p>
                    </div>
                    <div>
                        <h2><i class="fab fa-free-code-camp"></i></h2>
                        <h2>Camp Fire</h2>
                        <p>7 destination</p>
                    </div>
                    <div>
                        <h2><i class="fas fa-road"></i></h2>
                        <h2>Off Road</h2>
                        <p>8 destination</p>
                    </div>
                    <div>
                        <h2><i class="fas fa-home"></i></h2>
                        <h2>Camping</h2>
                        <p>13 destination</p>
                    </div>
                    <div>
                        <h2><i class="fas fa-map-marked-alt"></i></h2>
                        <h2>Exploring</h2>
                        <p>25 destination</p>
                    </div>
                </div>
            </section>
            <section className="container offer-section">
                <h6 className="text-danger fw-bold fs-5 pt-5 "><i class="fas fa-long-arrow-alt-right"></i>HOLIDAY PACKAGE OFFER</h6>
                <h2 className="offer-title">HOLIDAY SPECIAL 25% OFF !</h2>
                <input className="input-field" type="email" name="" placeholder="Your Email" id="" />
                <Link to="/login">
                    <Button className="input-button">SignUp Now</Button>
                </Link>
            </section>
        </div>
    );
};

export default Home;