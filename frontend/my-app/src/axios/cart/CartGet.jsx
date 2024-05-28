import axios from 'axios';
import React from 'react'

const CartGet = (props) => {
    const authToken = `Bearer ${localStorage.getItem('access_token')}`
    axios.get('http://127.0.0.1:8000/carts/', {
      headers: {
        Authorization: authToken,
      },
    })
      .then((response) => {
        props.GetCartValues(response.data)
        return response.data
      })
      .catch((error) => {
        console.log(error)
        console.log('error')
        return error
      });
}

export default CartGet
