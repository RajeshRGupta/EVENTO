import React, { useEffect, useState } from 'react';
import { Carousel, Col } from 'bootstrap';
import { Row } from 'react-bootstrap'
// import ExampleCarouselImage from 'components/ExampleCarouselImage';
import './slider.css'
import Slider from './Slider';
import axios from 'axios';


const OutSlider = () => {

    const [eventData,setEventData]=useState()

    useEffect(()=>{
        if (localStorage.getItem('access_token') === null) {
            window.location.href = '/login'
        }
        else {

            const authToken=`Bearer ${localStorage.getItem('access_token')}`
            console.log(authToken)
        };
    },[])



    return (
        <>
            <div className="container mt-4 out-slide">
                <div id="carouselExampleIndicators" className="carousel slide h-100" data-bs-ride="carousel">
                    <Row className='border border-1 h-100'>
                        <div className="col-9 slider-left">
                            <div className="carousel-inner h-100 rounded-3">
                                <div className="carousel-item bg-primary active h-100">
                                    {/* <img src="" className="d-block w-100 h-100" alt="..." /> */}
                                    <div className="w-100 h-100"></div>
                                </div>
                                <div className="carousel-item bg-success h-100">
                                    {/* <img src="" className="d-block w-100 h-100" alt="..." /> */}
                                    <div className="w-100 h-100"></div>
                                </div>
                                <div className="carousel-item bg-danger h-100">
                                    {/* <img src="" className="d-block w-100 h-100" alt="..." /> */}
                                    <div className="w-100 h-100"></div>
                                </div>
                                <div className="carousel-item bg-warning h-100">
                                    {/* <img src="" className="d-block w-100 h-100" alt="..." /> */}
                                    <div className="w-100 h-100"></div>
                                </div>
                                <div className="carousel-item bg-info h-100">
                                    {/* <img src="" className="d-block w-100 h-100" alt="..." /> */}
                                    <div className="w-100 h-100"></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-3 slider-right h-100">
                            <div className="carousel-indicators right-slide h-100">
                                <div className="right-slide-box  rounded-3 bg-primary">
                                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="h-100 w-100 bg-transparent active" aria-current="true" aria-label="Slide 1">
                                    <div className="row h-100 g-0">
                                        <div className="col-5 d-flex justify-content-center align-items-center ">
                                            <div className="eve-logo"></div>
                                        </div>
                                        <div className="col-7 d-flex justify-content-center align-items-center"></div>
                                    </div>
                                </button>
                                </div>
                                
                                <div className="right-slide-box rounded-3 bg-success">
                                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" className="h-100 w-100 bg-transparent" aria-label="Slide 2">
                                    <div className="row h-100 g-0">
                                        <div className="col-5 d-flex justify-content-center align-items-center ">
                                            <div className="eve-logo"></div>
                                        </div>
                                        <div className="col-7 d-flex justify-content-center align-items-center"></div>
                                    </div>
                                </button>
                                </div>
                                
                                <div className="right-slide-box rounded-3 bg-danger">
                                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" className="h-100 w-100 bg-transparent" aria-label="Slide 3">
                                    <div className="row h-100 g-0">
                                        <div className="col-5 d-flex justify-content-center align-items-center ">
                                            <div className="eve-logo"></div>
                                        </div>
                                        <div className="col-7 d-flex justify-content-center align-items-center"></div>
                                    </div>
                                </button>
                                </div>
                                
                                <div className="right-slide-box rounded-3 bg-warning">
                                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" className="h-100 w-100 bg-transparent" aria-label="Slide 4">
                                    <div className="row h-100 g-0">
                                        <div className="col-5 d-flex justify-content-center align-items-center ">
                                            <div className="eve-logo"></div>
                                        </div>
                                        <div className="col-7 d-flex justify-content-center align-items-center"></div>
                                    </div>
                                </button>
                                </div>
                                
                                <div className="right-slide-box rounded-3 bg-info">
                                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" className="h-100 w-100 bg-transparent" aria-label="Slide 5">
                                    <div className="row h-100 g-0">
                                        <div className="col-5 d-flex justify-content-center align-items-center ">
                                            <div className="eve-logo"></div>
                                        </div>
                                        <div className="col-7 d-flex justify-content-center align-items-center"></div>
                                    </div>
                                </button>
                                </div>
                                
                            </div>
                        </div>
                    </Row>
                </div>
            </div>

        </>
    )
}

export default OutSlider
