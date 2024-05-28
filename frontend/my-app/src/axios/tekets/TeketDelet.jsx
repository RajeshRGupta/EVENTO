import axios from 'axios';
import React from 'react'

const TeketDelet = async (id) => {
    try {
      const response = await axios.delete(`http://127.0.0.1:8000/organizerdelet/${id}`);
      return 'success';
    } catch (error) {
      console.error('Error deleting cart data:', error);
      throw error; // rethrowing to handle it where this function is called
    }
}

export default TeketDelet