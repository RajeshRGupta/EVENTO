import React, { useContext, useEffect, useState } from 'react'
import './Eventshow.css'
import { useNavigate, useParams } from 'react-router-dom'
import EventGet from '../../axios/EventGet'
import lang from '../midia/Icon/lang.webp'
import CartGet from '../../axios/cart/CartGet'
import NoteContext from '../../context/NotContext'
import AddToCart from '../../axios/cart/AddToCart'


const Eventshow = () => {
  const { eveid } = useParams()
  const [evesdata, setEvsData] = useState([])
  const [cartvalue, setCartvalue] = useState([])
  const context = useContext(NoteContext)
  const navigate = useNavigate(null)


  useEffect(() => {
    const GetEvent = (value) => setEvsData(value)
    const id = Number(eveid)
    EventGet({ GetEvent, id })

    const GetCartValues = (value) => setCartvalue(value)
        CartGet({ GetCartValues })

  }, [])

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

  console.log("data:------------------", evesdata)

  return (
    <div>
      {
        evesdata &&
        evesdata.map((data) => (
          <div className="container my-5">
            <div className="row">
              <div className="col-8">
                <div className="eve-image">
                  <img src={data.image} className='h-100 w-100' alt="" />
                </div>
                <div className="eve-deltels">
                  <div className="dele mx-5 my-4">
                    <h3>About</h3>
                    {data.details}

                  </div>
                </div>
              </div>
              <div className="col-4">
                <div class="card mt-4">
                  <div class="card-body">
                    <h4 class="card-title mb-3">{data.title}</h4>
                    <div className="row g-0 mb-2">
                      <div className="col-1"><i class="fa-regular fa-bookmark"></i></div>
                      <div className="col-10">{((data.genre.categry[0].toUpperCase()) + data.genre.categry.slice(1))}</div>
                    </div>
                    <div className="row g-0 mb-2">
                      <div className="col-1"><i class="fa-regular fa-calendar"></i></div>
                      <div className="col-10">{data.startDate} / {data.startTime}</div>
                    </div>
                    <div className="row g-0 mb-2">
                      <div className="col-1"><i class="fa-solid fa-location-dot"></i></div>
                      <div className="col-10">{((data.adderss.Location[0].toUpperCase()) + data.adderss.Location.slice(1))}</div>
                    </div>
                    <div className="row g-0">
                      <div className="col-6">
                        <div className="row">
                          <div className="col-2 d-flex align-items-center "><i class="fa-solid fa-wallet"></i></div>
                          <div className="col-10 fs-5 fw-bold">{data.price === 0 ? data.price : 'Free'}</div>
                        </div>
                      </div>
                      <div className="col-6 d-flex justify-content-end">
                        <button type="button" class="btn btn-danger me-3" onClick={() => AddToCart1(data.id)}>BUY NOW</button>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="card mt-4">
                  <div class="card-body">
                    <h5 class="card-title mb-3 fw-bold">Event Guide</h5>
                    <div className="line border-bottom mb-3"></div>

                    <div className="row g-0 mb-2">
                      <div className="col-1"><i class="fa-regular fa-calendar-check"></i></div>
                      <div className="col-10">{data.age}+</div>
                    </div>

                    <div className="row g-0 mb-2">
                      <div className="col-1"><img src={lang} alt=""style={{height:'20px', width:'20px' }} /></div>
                      <div className="col-10">{data.language}</div>
                    </div>
                  
                  </div>
                </div>

              </div>
            </div>
          </div>
        ))
      }

    </div>
  )
}

export default Eventshow
