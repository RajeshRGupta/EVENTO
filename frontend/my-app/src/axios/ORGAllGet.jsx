import axios from 'axios';
import React from 'react'

const ORGAllGet = (props) => {
    const authToken = `Bearer ${localStorage.getItem('access_token')}`
    axios.get('http://127.0.0.1:8000/organizercreateadmin/', {
      headers: {
        'Authorization': authToken,
      },
    })
      .then((response) => {
        props.GetORGAllData(response.data)
        return response.data
      })
      .catch((error) => {
        console.log(error)
        console.log('error')
        return error
      });
}

export default ORGAllGet