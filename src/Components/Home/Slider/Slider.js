import React, { useEffect } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import slider2 from '../../../images/slider/pirates.jpg';
import Aos from 'aos';
import 'aos/dist/aos.css';
import StarRatings from './StarRatings';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlayCircle } from '@fortawesome/free-regular-svg-icons';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import './Slider.css';

const Slider = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);

    return (
        <div className="">
            <Carousel controls={false} indicators interval={4500} pause={false}>
                <Carousel.Item>
                    <div className="header-area container">
                        <img src={slider2} alt="" className="d-block w-100 slider-img slider-area" />
                        <div className=" col-12 col-lg-7 col-md-12 content p-0">
                            <h1 className="font-weight-bolder text-uppercase mb-4 header-title pt-md-5">
                                Pirates of sea
                            </h1>
                            <div className="d-flex flex-wrap align-items-center mb-3">
                                <StarRatings></StarRatings>
                                <span className="text-white ml-2">4.8(Imdb)</span>
                                <div className="d-flex flex-wrap align-items-center">
                                    <span className="badge badge-secondary p-2 ml-2">GP</span>
                                    <span className="ml-3" style={{color: '#d8d6d6'}}>1hr : 56mins</span>
                                </div>
                            </div>
                            <p data-aos="fade-left mb-3" style={{color: '#d8d6d6'}}>
                                Piracy is an act of robbery or criminal violence by ship or boat-borne attackers upon another ship or a coastal area, typically with the goal of stealing cargo and other valuable items or properties.                                         
                            </p>
                            <h6 className="font-weight-bold" data-aos="zoom-up">
                                <span style={{color: '#e50914'}}>Starring:</span>
                                <span className="ml-2 text-white">James Chinlund, James Earl Jones </span>
                            </h6>
                            <h6 className="font-weight-bold" data-aos="zoom-out">
                                <span style={{color: '#e50914'}}>Genres:</span>
                                <span className="ml-2 text-white">Action, Adventure</span>
                            </h6>
                            <h6 className="font-weight-bold pb-2" data-aos="zoom-in">
                                <span style={{color: '#e50914'}}>Tag:</span>
                                <span className="ml-2 text-white">Action, Adventure </span>
                            </h6>
                            <div className="card-btn mt-4">
                                <a href="/" className="btn btn-style px-4 ">
                                    <FontAwesomeIcon icon={faPlay} />
                                    <span className="ml-2 text-uppercase">Play Now</span>
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-5 col-md-12 content header-watch d-md-flex justify-content-center">
                            <div className="svg">
                                <a className="button" target="_blank" href="/">
                                    <svg>
                                        <rect height="40" width="140" fill="transparent" />
                                    </svg>
                                    <span> 
                                        <FontAwesomeIcon icon={faPlayCircle}className="text-white" />
                                        <strong className="ml-1">Watch Trailer</strong>
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Slider;