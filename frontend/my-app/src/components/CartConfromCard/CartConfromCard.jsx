import React, { useContext, useEffect, useState } from 'react'
import NoteContext from '../../context/NotContext'
import AddToCart from '../../axios/cart/AddToCart'
import { useNavigate } from 'react-router-dom'
import CartGet from '../../axios/cart/CartGet'
import CartDataDelet from '../../axios/cart/CartDataDelet'

const CartConfromCard = () => {
    const context = useContext(NoteContext)
    const navigate = useNavigate(null)
    const [cartvalue, setCartvalue] = useState([])



    useEffect(() => {
        const GetCartValues = (value) => setCartvalue(value)
        CartGet({ GetCartValues })
    }, [])

    const AddToCart1 = () => {
        cartvalue.map((data) => {
            CartDataDelet(data.id)
        })
        AddToCart(context.idpass)
        navigate('/User-dashbord-all/cart')
        context.onCartAdd(false)
    }
    return (
        <div className='position-absolute d-flex justify-content-center align-items-center' style={{ overflow: 'hidden', height: '100%', width: '100%', backgroundColor: 'rgba(0,0,0,0.2)', top: 0, left: 0, zIndex: 999999999 }}>
            <div class="card  " style={{ width: '25rem' }}>
                <div class="card-body">
                    <h5 class="card-title">Cart Have Value</h5>
                    <p class="card-text">It will remove Cart value than add it</p>
                    <button class="btn btn-light border me-3" onClick={() => context.onCartAdd(false)}>Cancel</button >
                    <button class="btn btn-danger" onClick={AddToCart1}>ADD</button >
                </div>
            </div>
        </div>
    )
}

export default CartConfromCard