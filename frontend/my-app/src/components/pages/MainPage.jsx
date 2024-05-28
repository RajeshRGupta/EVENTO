import React, { useState, useEffect } from 'react'
import { Route,Outlet, Routes, BrowserRouter as Router } from 'react-router-dom'

import Category from './EventoPages/Category'
import Home from './EventoPages/Home';
import Futter from '../futter/Futter'
import Navbar from '../Navbar/Navbar';
import Dashbord from './Eventodasbord/Dashbord'
import axios from 'axios';

const MainPage = () => {
    const [message, setMessage] = useState('');
    const [userauth, setUserauth] = useState(false);
    useEffect(() => {
        if (localStorage.getItem('access_token') === null) {
            window.location.href = '/login'
        }
        else {

            const authToken=`Bearer ${localStorage.getItem('access_token')}`
            console.log(authToken)

            axios.get('http://127.0.0.1:8000/userdata/',{
                headers: {
                  Authorization: authToken,
                },
              })
                .then((response)=> {
                    console.log(response.data.is_staff)
                    setUserauth(response.data.is_staff)
                })
                .catch((error)=> {
                    console.log(error)
                    console.log('error')
                });


        };
    }, []);

    const handleLogout = () => {
        // Clear the access token from localStorage and redirect to the login page
        localStorage.removeItem('access_token');
        window.location.href = '/';
      };

      console.log(userauth);

      


    return (
        <div>
            mainpage 
                        {/* <Routes>
                            <Route path='/home' element={<Home/>} />
                            <Route path='/category/:cteg?' element={<Category />} />
                        </Routes> */}
                        <Outlet/>
            {/* hello{message} */}
                {!userauth && <Navbar />}
                {/* {
                    userauth?(<>
                   
                        <Routes>
                            <Route path='/' element={<Dashbord />} />
                        </Routes></>):(<>
                            <button onClick={handleLogout}>Logout</button>
                        <Routes>
                            <Route path='home' element={<Home/>} />
                            <Route path='/category/:cteg?' element={<Category />} />
                        </Routes></>)
                } */}



                        

            {/* <Futter/> */}

        </div>
    )
}

export default MainPage
