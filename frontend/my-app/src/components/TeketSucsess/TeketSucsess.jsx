import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Teketsget from '../../axios/tekets/Teketsget'

const TeketSucsess = () => {

    const [teket, setTeket] = useState([])
    const { tktsuc } = useParams()

    useEffect(() => {
        const GetTekets = (value) => {
            setTeket(value.filter((data) => (data.order_id === tktsuc)))
        }
        Teketsget({ GetTekets })
    }, [])


    console.log('teket:---------------------------', teket)


    return (
        <div style={{ height: "90vh" }}>
            <div className="container h-100 w-100 d-flex justify-content-center align-items-center">


                {
                    teket &&
                    teket.map((data, inx) => (
                        <div className="card" style={{ width: "35rem", boxShadow: " 0px 1px 23px -3px rgba(0,0,0,0.75)" }}>
                            <div className="card-body">
                                <h2 className="card-title text-center mb-4">{data.events.title}</h2>
                                <div className="px-5 mb-4">
                                    <h6 className="card-subtitle mb-2 text-muted">Order ID : {data.order_id}</h6>
                                    <h6 className="card-subtitle mb-2 text-muted d-flex w-100 ">
                                        <div className="row w-100">
                                            <div className="col">
                                                Date : {data.events.startDate}
                                            </div>
                                            <div className="col">
                                                Time : {data.events.startTime}
                                            </div>
                                        </div>
                                    </h6>
                                    <h6 className="card-subtitle mb-2 text-muted">Name : {data.user.first_name} {data.user.last_name}</h6>
                                    <h6 className="card-subtitle mb-2 text-muted">Email : {data.user.email}</h6>
                                    <h6 className="card-subtitle mb-2 text-muted">Phone : {data.user.phone}</h6>
                                    <h6 className="card-subtitle mb-2 text-muted">
                                        <div className="row w-100">
                                            <div className="col">
                                                Quantity : {data.user.quantity}
                                            </div>
                                            <div className="col">
                                                Price : {data.amount}

                                            </div>
                                        </div>
                                    </h6>
                                    <h6 className="card-subtitle mb-2 text-muted">Event Mode : {data.events.eventMode}</h6>
                                    <h6 className="card-subtitle mb-2 text-muted">Language : {data.events.language}</h6>
                                </div>
                            </div>
                        </div>
                    ))
                }




            </div>
        </div>
    )
}

export default TeketSucsess