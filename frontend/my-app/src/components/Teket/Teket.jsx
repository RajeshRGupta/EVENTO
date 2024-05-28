import React, { useEffect, useRef, useState } from 'react';
import * as htmlToImage from 'html-to-image';
import './teket.css'
import image from '../midia/EventsImg/img1.jpg'
import QRGenerator from '../QRGenerator/QRGenerator'
import { useParams } from 'react-router-dom';
import Teketsget from '../../axios/tekets/Teketsget';

const Teket = () => {
    const [holes, setholes] = useState(true)
    const [teket, setTeket] = useState([])


    const { tkt } = useParams()


    useEffect(() => {
        const GetTekets = (value) => {
            setTeket(value.filter((data) => (data.order_id === tkt)))
        }
        Teketsget({ GetTekets })
    }, [])

    console.log(teket)

    const domEl = useRef(null);

    const downloadImage = async () => {

        setholes((prev) => !prev)

        const dataUrl = await htmlToImage.toPng(domEl.current);

        // download image
        const link = document.createElement('a');
        link.download = 'html-to-img.png';
        link.href = dataUrl;
        link.click(setholes((prev) => !prev));
    };


    return (

        <div className="container d-flex justify-content-center position-relative mb-5" >

            <div className="go-back"></div>

            <div className="mainDashTktCon"  >


                {
                    teket &&
                    teket.map((data, inx) => (
                        <div class="ticket" ref={domEl}>
                            <div class="holes-top" style={{ display: holes ? "block" : "none" }}></div>
                            <div class="title">
                                <p class="movie-title">{data.events.title}</p>
                            </div>
                            <div class="poster">
                                <img src={data.events.image} alt="Movie: Only God Forgives" />
                            </div>
                            <div class="info px-4 pt-4">
                                <div className="row g-0">
                                    <div className="col-4">
                                        <h5 className='m-0 fw-bold text-start'>TEKETS</h5>
                                        <p className='m-0 text-center me-5'>2</p>
                                    </div>
                                    <div className="col-4">
                                        <h5 className='m-0 fw-bold text-center'>DATE</h5>
                                        <p className='m-0 text-center'>{data.events.startDate}</p>
                                    </div>
                                    <div className="col-4">
                                        <h5 className='m-0 fw-bold text-center'>TIME</h5>
                                        <p className='m-0 text-center'>{data.events.startTime}</p>
                                    </div>
                                    <div className="col my-4">
                                        <h5 className='m-0  fw-bold'>LOCATION</h5>
                                        <p className='m-0 '>{((data.events.adderss.Location[0].toUpperCase())+(data.events.adderss.Location.slice(1)))}</p>
                                    </div>
                                </div>

                            </div>
                            <div class="holes-lower" style={{ display: holes ? "block" : "none" }}></div>
                            <div class="serial">

                                <div className="row">
                                    <div className="col-8 p-0 d-flex justify-content-center flex-column ">


                                        <div className="row g-0">
                                            <div className="col-4">
                                                <h6 className='m-0 fw-bold '>DATE </h6>

                                            </div>
                                            <div className="col-8">
                                                <p className='m-0 '>{data.events.startDate}</p>

                                            </div>
                                        </div>

                                        <div className="row g-0">
                                            <div className="col-4">
                                                <h6 className='m-0 fw-bold '>TIME </h6>
                                            </div>
                                            <div className="col-8">
                                                <p className='m-0 '>{data.events.startTime}</p>
                                            </div>
                                        </div>

                                        <div className="row g-0">
                                            <div className="col-4">
                                                <h6 className='m-0 fw-bold '>LOCATIN </h6>
                                            </div>
                                            <div className="col-8">
                                                <p className='m-0 '>{((data.events.adderss.Location[0].toUpperCase())+(data.events.adderss.Location.slice(1)))}</p>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="col-4 p-0 ">
                                        <QRGenerator message={data.order_id}/>
                                    </div>
                                </div>
                            </div>


                            <div className="d-flex justify-content-center pb-4">

                                <button type="button" className="btn btn-secondary" style={{ display: holes ? "block" : "none", color: "#fff" }} onClick={downloadImage}>Download TEKET</button>
                            </div>


                        </div>
                    ))
                }


                {/* <div class="ticket" ref={domEl}>
                    <div class="holes-top" style={{ display: holes ? "block" : "none" }}></div>
                    <div class="title">
                        <p class="movie-title">ONLY GOD FORGIVES</p>
                    </div>
                    <div class="poster">
                        <img src={image} alt="Movie: Only God Forgives" />
                    </div>
                    <div class="info px-4 pt-4">
                        <div className="row g-0">
                            <div className="col-4">
                                <h5 className='m-0 fw-bold text-start'>TEKETS</h5>
                                <p className='m-0 text-center me-5'>2</p>
                            </div>
                            <div className="col-4">
                                <h5 className='m-0 fw-bold text-center'>DATE</h5>
                                <p className='m-0 text-center'>1/13/17</p>
                            </div>
                            <div className="col-4">
                                <h5 className='m-0 fw-bold text-center'>TIME</h5>
                                <p className='m-0 text-center'>19:30</p>
                            </div>
                            <div className="col my-4">
                                <h5 className='m-0  fw-bold'>LOCATION</h5>
                                <p className='m-0 '>2</p>
                            </div>
                        </div>

                    </div>
                    <div class="holes-lower" style={{ display: holes ? "block" : "none" }}></div>
                    <div class="serial">

                        <div className="row">
                            <div className="col-8 p-0 d-flex justify-content-center flex-column ">


                                <div className="row g-0">
                                    <div className="col-4">
                                        <h6 className='m-0 fw-bold '>DATE </h6>

                                    </div>
                                    <div className="col-8">
                                        <p className='m-0 '>1/13/17</p>

                                    </div>
                                </div>

                                <div className="row g-0">
                                    <div className="col-4">
                                        <h6 className='m-0 fw-bold '>TIME </h6>
                                    </div>
                                    <div className="col-8">
                                        <p className='m-0 '>19:30</p>
                                    </div>
                                </div>

                                <div className="row g-0">
                                    <div className="col-4">
                                        <h6 className='m-0 fw-bold '>LOCATIN </h6>
                                    </div>
                                    <div className="col-8">
                                        <p className='m-0 '>esgawrhsa agrvbaws grsv</p>
                                    </div>
                                </div>

                            </div>
                            <div className="col-4 p-0 ">
                                <QRGenerator />

                            </div>
                        </div>
                    </div>


                    <div className="d-flex justify-content-center pb-4">

                        <button type="button" className="btn btn-secondary" style={{ display: holes ? "block" : "none", color: "#fff" }} onClick={downloadImage}>Download TEKET</button>
                    </div>


                </div> */}

            </div>
        </div>
    )
}

export default Teket