import axios from 'axios';
import React from 'react'

const CartUpdate = async (id,quantity) => {
    const authToken = `Bearer ${localStorage.getItem('access_token')}`
    const config = {
        headers: {
            'Authorization': authToken
        },
    };
    try {
        const response = await axios.patch(`http://127.0.0.1:8000/cart/${id}`, {'quantity':quantity}, config);
        return response;
    } catch (error) {
        console.error('Error updating event:', error);
        return error; 
    }
}

export default CartUpdate
