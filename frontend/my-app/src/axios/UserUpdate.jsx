import axios from 'axios';
import React from 'react'

const UserUpdate = async (form_data, id) => {
    const authToken = `Bearer ${localStorage.getItem('access_token')}`
    const config = {
        headers: {
            'Authorization': authToken
        },
    };
    try {
        const response = await axios.patch(`http://127.0.0.1:8000/userdatas/${id}`, form_data, config);
        return response;
    } catch (error) {
        console.error('Error updating event:', error);
        return error; 
    }
}

export default UserUpdate