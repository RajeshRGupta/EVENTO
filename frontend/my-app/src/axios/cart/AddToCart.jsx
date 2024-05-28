import axios from 'axios';
import React from 'react'

const AddToCart = (id) => {

    const authToken = `Bearer ${localStorage.getItem('access_token')}`;
    const config = {
        headers: {
            'Content-Type': 'multipart/form-data',
            'Authorization': authToken
        },
    };
    axios.post('http://127.0.0.1:8000/addcarts/', {"quantity": 1,"events": id} , config)
        .then(() => {
            return 'sucsses'
        })
        .catch(function (error) {
            console.log(error);
            throw error
        });
}

export default AddToCart
