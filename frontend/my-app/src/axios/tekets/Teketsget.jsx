import axios from 'axios';
import React from 'react'

const Teketsget = (props) => {
    const authToken = `Bearer ${localStorage.getItem('access_token')}`
    axios.get('http://127.0.0.1:8000/order/show/', {
      headers: {
        Authorization: authToken,
      },
    })
      .then((response) => {
        props.GetTekets(response.data)
        return response.data
      })
      .catch((error) => {
        console.log(error)
        console.log('error')
        return error
      });
}

export default Teketsget