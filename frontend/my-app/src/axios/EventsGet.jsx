import React from 'react'
import axios from 'axios'

const EventsGet = (props) => {
    const authToken = `Bearer ${localStorage.getItem('access_token')}`
    axios.get('http://127.0.0.1:8000/events/', {
      headers: {
        Authorization: authToken,
      },
    })
      .then((response) => {
        props.GetEvents(response.data)
        return response.data
      })
      .catch((error) => {
        console.log(error)
        console.log('error')
        return error
      });
}

export default EventsGet
