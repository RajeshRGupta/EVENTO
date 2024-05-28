import React, { useEffect, useState } from 'react'
import './usertekets.css'
import QRGenerator from '../QRGenerator/QRGenerator'
import { Link, useNavigate } from 'react-router-dom';
import Teketsget from '../../axios/tekets/Teketsget';
import NoData from '../pages/EventoPages/NoData';


const UserTekets = () => {

    const [tekets, setTekets] = useState([])

    const navigate = useNavigate(null)


    useEffect(() => {

        const GetTekets = (value) => {
            setTekets(value)
        }


        Teketsget({ GetTekets })

    }, [])



    const HeandelClick = () => {
        // navigate("/User-dashbord-al/Teket")
    }

    return (
        <div>
            <div className="container mainDashTktCon my-5 " >
                {
                    tekets.length > 0 ?
                        <div className="row g-3 mb-5">
                            {
                                tekets.length &&
                                tekets.map((data, inx) => (
                                    <div className="col-12 d-flex justify-content-center" onClick={HeandelClick}>
                                        <div class="card teketCard">
                                            <div class="card-header" style={{ backgroundColor: "white", borderBottomStyle: "dashed" }}>
                                                <h1>{data.events.title}</h1>
                                            </div>
                                            <div class="card-body">
                                                <div className="row h-100">
                                                    <div className="col-9">
                                                        <div className="row">
                                                            <div className="col-6">
                                                                <p class="card-text fw-bold m-0" style={{ color: " rgb(170, 170, 170)" }}>Date</p>
                                                                <p class="card-text fw-bold fs-5 m-0">{data.events.startDate}</p>
                                                            </div>
                                                            <div className="col-6">
                                                                <p class="card-text fw-bold m-0" style={{ color: " rgb(170, 170, 170)" }}>Time</p>
                                                                <p class="card-text fw-bold fs-5 m-0">{data.events.startTime} </p>
                                                            </div>

                                                        </div>
                                                        <div className="mt-3">
                                                            <p class="card-text fw-bold m-0" style={{ color: " rgb(170, 170, 170)" }}>Location</p>
                                                            <p class="card-text fw-bold fs-5 m-0">{((data.events.adderss.Location[0].toUpperCase()) + (data.events.adderss.Location.slice(1)))}</p>
                                                        </div>
                                                    </div>
                                                    <div className="col-3 d-flex justify-content-center align-items-center"><QRGenerator message={data.order_id} /></div>
                                                </div>
                                            </div>
                                            <Link to={"/User-dashbord-all/Teket/" + data.order_id} className='teket-link'></Link>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                        : <NoData />
                }
            </div>
        </div>
    )
}

export default UserTekets
