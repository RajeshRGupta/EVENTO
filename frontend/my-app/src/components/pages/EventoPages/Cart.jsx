import React, { useContext, useEffect, useState } from 'react'
import CartGet from '../../../axios/cart/CartGet'
import CartUpdate from '../../../axios/cart/CartUpdate'
import CartDataDelet from '../../../axios/cart/CartDataDelet'
import { Link } from 'react-router-dom'
import NoteContext from '../../../context/NotContext'
import { display } from '@mui/system'
import NoData from './NoData'

const Cart = () => {

  const [allCartvalues, setAllCartValues] = useState([])
  const [count, setCount] = useState(0)
  const [countdl, setCountdl] = useState(0)
  const [totale, setTotale] = useState(0)

  const [allTotle, setAllTotle] = useState()

  const context=useContext(NoteContext)


  useEffect(() => {
    const GetCartValues = (value) => {
      setAllCartValues(value)
      const quantity = (value.map((data) => data.quantity))
      const price = (value.map((data) => data.events.price))

      var totle1 = 0
      for (var i = 0; i < quantity.length; i++) {
        totle1 += (quantity[i] * price[i])
      }
      setTotale(totle1)
      setAllTotle(((totale * 5) / 100) + ((totale * 5) / 100) + totle1)
    }

    CartGet({ GetCartValues })
  }, [count, countdl])




  const QuantityPlus = (id, quantity, evquntity, evsoldquntity) => {
    CartUpdate(id, (evsoldquntity + quantity + 1) !== evquntity ? quantity + 1 : quantity)
    setCount(prev => prev + 1)

  }

  const QuantityMinas = (id, quantity, evquntity, evsoldquntity) => {
    CartUpdate(id, quantity - 1 !== 0 ? quantity - 1 : quantity)
    setCount(prev => prev + 1)
  }

  const CartDataDelet1 = (id) => {
    // console.log(IdleDeadline)
    CartDataDelet(id)
    setCountdl(prev => prev + 1)
  }

  return (
    <div className='py-5 d-flex justify-content-center'>
      {/* <h1>{context.eveID} cart</h1> */}

      {
        allCartvalues.length>0?
        <div className="" style={{ width: '55%', }}>

        <div class="card">
          <div class="card-header">
            <h4>TICKETS</h4>
          </div>

          {
            allCartvalues &&
            allCartvalues.map((data, inx) => (
              <div class="card-body p-3">
                <div className=" border rounded p-3">
                  <div className="row">
                    <div className="col-6 d-flex justify-content-start"><h5 class="card-title" >{data.events.title}</h5></div>
                    <div className="col-6 d-flex justify-content-end "><div className="btn" onClick={() => CartDataDelet1(data.id)}><i class="fa-regular fa-trash-can"></i></div></div>
                    <div className="col-6 d-flex justify-content-start ">
                      <div className="btn1 p-0 m-0 " onClick={() => QuantityMinas(data.id, data.quantity, data.evquntity, data.evsoldquntity)} style={{ color: 'rgb(130, 130, 130)', cursor: 'pointer' }}><i class="fa-solid fa-minus"></i></div>
                      <p class="card-text px-2" style={{ color: 'rgb(130, 130, 130)' }}>
                        {data.quantity}
                      </p>
                      <div className="btn1 p-0 m-0" onClick={() => QuantityPlus(data.id, data.quantity, data.evquntity, data.evsoldquntity)} style={{ color: 'rgb(130, 130, 130)', cursor: 'pointer' }}><i class="fa-solid fa-plus"></i></div>
                      <p class="card-text px-2" style={{ color: 'rgb(130, 130, 130)' }}>ticket</p>
                    </div>
                    <div className="col-6 d-flex justify-content-end">₹ {data.quantity * data.events.price} </div>
                  </div>
                </div>
              </div>
            ))
          }

          <div class="card-body p-3">
            <div className=" border rounded p-3">
              <div className="row">
                <div className="col-6 d-flex justify-content-start m-0"><p class="card-text px-2">TOTAL</p></div>

                <div className="col-6 d-flex justify-content-end" >₹ {totale}</div>
              </div>
            </div>
          </div>
          <div class="card-body p-3">
            <div className=" border rounded" style={{display:"block"}}>
              <Link to='/payment' className="btn m-0 w-100 btn-secondary px-4 fs-5 fw-bold" >Continue</Link>
            </div>
          </div>
        </div>
      </div>:<NoData/>
      }

      
    </div>
  )
}

export default Cart
