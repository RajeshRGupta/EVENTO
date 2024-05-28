import React, { useContext, useEffect, useState } from 'react'
import { Carousel, Col, Row, Container } from 'bootstrap';
import DateTime from '../midia/Icon/datetime.png'
import { date } from 'yup';
import { width } from '@mui/system';

import { format } from 'date-fns';


import './eventcard.css'
import { useNavigate } from 'react-router-dom';
import AddToCart from '../../axios/cart/AddToCart';
import CartGet from '../../axios/cart/CartGet';
import NoteContext from '../../context/NotContext';

const EveCard = (props) => {
    const [cartvalue, setCartvalue] = useState([])
    const data1 = props.massage
    // console.log(props.massage)
    const date1 = format(data1.startDate, 'dd MMMM yyyy')


    // console.log('all',data1)

    const navigate = useNavigate(null)
  const context = useContext(NoteContext)


    // console.log('///////////////////////////////////////////////////////',data1.startDate)


    useEffect(() => {
        const GetCartValues = (value) => setCartvalue(value)
        CartGet({ GetCartValues })
    }, [])

    const pageChange = () => {
        navigate('/event/'+data1.id)
    }

    const AddToCart1 = (id) => {
        console.log('evcard----', cartvalue)
        if(cartvalue.length>0){
            cartvalue.map((data) => {
                if (data.events.id !== id) {
                    context.onCartAdd(true)
                    context.onIdPass(id)
                    console.log('ddrama')
                } else {
                    console.log('jkhvsdkj')
                    // AddToCart(id)
                    navigate('/User-dashbord-all/cart')
                }

            })
        }else{
            console.log('mnbvcxz')
            AddToCart(id)
            navigate('/User-dashbord-all/cart')
        }

    }

    const parts = data1.startTime.split(':');
    const time1 = `${parts[0]}:${parts[1]}`;
    // console.log('/////////////',time1)

    return (
        <>
            <div class="card border border-0" style={{boxShadow: '2px 2px 14px -3px rgba(0,0,0,0.75)'}}>
                <img src={data1.image} class="card-img-top" onClick={pageChange} alt="..." />
                <div class="card-body" onClick={pageChange}>
                    <h5 class="card-title text-truncate">{data1.title}</h5>
                    {/* <p class="card-text">starting on{data1.startDate}</p> */}
                </div>
                <ul class="list-group list-group-flush g-0" onClick={pageChange}>
                    <li class="list-group-item d-flex py-0"><pre className='fs-7'><span className="datetime"><img src={DateTime} alt="" /></span>  </pre>{date1}<span className='mx-1 fw-bold'>|</span>{time1}</li>
                    <li class="list-group-item py-0 d-flex"><span className='fs-5 me-2'><ion-icon name="location-outline"></ion-icon></span> {((data1.adderss.Location[0].toUpperCase())+(data1.adderss.Location.slice(1)))}</li>
                </ul>
                <div class="card-body">

                    <div className="row buy-color py-2 mx-1">
                        <div className="col d-flex align-items-center fs-6 fw-bold ">
                        
                            ₹ {data1.price}
                        </div>
                        <div className="col d-flex justify-content-end me-1">
                            <button href="#" class="btn btn-danger position-relative " onClick={() => AddToCart1(data1.id)}>BUY NOW</button>
                        </div>
                    </div>


                    
                    {/* <button href="#" class="btn btn-primary ms-4 position-relative"><ion-icon name="heart-outline"></ion-icon> FAVORITE</button> */}
                </div>
            </div>
        </>
    )
}

export default EveCard
