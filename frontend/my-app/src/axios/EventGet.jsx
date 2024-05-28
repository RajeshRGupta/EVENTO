import axios from 'axios';
import React from 'react'

const EventGet = (props) => {
    const authToken = `Bearer ${localStorage.getItem('access_token')}`
    axios.get('http://127.0.0.1:8000/events/', {
        headers: {
          Authorization: authToken,
        },
      })
        .then((response) => {
            const event=response.data.filter((data)=>data.id===props.id)
          props.GetEvent(event)
          return event
        })
        .catch((error) => {
          console.log(error)
          console.log('error','rror')
          return error
        });
}

export default EventGet
