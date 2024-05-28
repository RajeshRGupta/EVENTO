import React, { useState, useEffect } from 'react';
import { Formik, Form } from 'formik';
import TextField from './TextField'
import * as Yup from 'yup'
import 'yup-phone'
import axios from 'axios';
import { ErrorMessage, useField } from 'formik'
import { useNavigate } from 'react-router-dom';


// import * as Yup from 'yup-phone'

const Login = () => {

  const navigate=useNavigate(null)

  const [errorMessage, setErrorMessage] = useState("");

  useEffect(()=>{
    localStorage.clear();
  },[])


  const validate = Yup.object({
    email: Yup.string()
      .email(15, 'Email is invalid')
      .required('Email is required'),
    password: Yup.string()
      .min(6, 'Password must be at least 6 characters')
      .required('Password is required')
  })
  const handleSubmit = async (values) => {
    axios.post('http://127.0.0.1:8000/login/', values)
      .then(function (response) {
        console.log(response.data.access)
        localStorage.clear();
        localStorage.setItem('access_token', response.data.access);
        localStorage.setItem('refresh_token', response.data.refresh);

        const authToken = `Bearer ${localStorage.getItem('access_token')}`
      console.log(authToken)

      axios.get('http://127.0.0.1:8000/userdata/', {
        headers: {
          Authorization: authToken,
        },
      })
        .then((response) => {
          // console.log(`user ${response.data}`)
          console.log(`user ${response.data.is_superuser}`)
          localStorage.setItem('superuserauth', response.data.is_staff);
          localStorage.setItem('userauth', response.data.is_staff);
          if(response.data.is_superuser===true && response.data.is_staff===true){
            navigate('/super-admin-dashbord/home',{relpace:true})
          }else if(response.data.is_staff===true){
            navigate('/admin-dashbord/home/home',{relpace:true})
          }else{
            navigate('/evento',{relpace:true})
          }
        })
        .catch((error) => {
          console.log(error)
          console.log('error')
        });
      })
      .catch(function (error) {
        console.log(error)
        setErrorMessage('Email ID and Password should be worng')
      });
  };

  return (
    <>
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        validationSchema={validate}
        onSubmit={handleSubmit}
      >
        {
          formik =>
          (
            <div className="p-4 ">
              <h1 className="mb-4 font-weight-bold-display-4">Login</h1>
              <Form >

                <TextField label='Email'  name='email' type='email' />
                <TextField label='Password' name='password' type='password' />
                {/* <span className='error'>{message}</span> */}
                <p className='error mb-2'>{errorMessage}</p>
                <button className="btn1 btn btn-dark mt-4 " type='submit'>Login</button>
                <button className="btn1 btn btn-danger mt-4" type='reset'>Reset</button>
              </Form>
            </div>
          )

        }
      </Formik>
    </>
  )
}

export default Login
