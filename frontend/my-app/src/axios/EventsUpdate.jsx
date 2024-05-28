import React from 'react'
import axios from 'axios';



const EventsUpdate = async (form_data, id) => {
    const authToken = `Bearer ${localStorage.getItem('access_token')}`
    const config = {
        headers: {
            'Content-Type': 'multipart/form-data',
            'Authorization': authToken
        },
    };
    try {
        const response = await axios.patch(`http://127.0.0.1:8000/event/${id}`, form_data, config);
        return response;
    } catch (error) {
        console.error('Error updating event:', error);
        return error; 
    }
}

export default EventsUpdate
