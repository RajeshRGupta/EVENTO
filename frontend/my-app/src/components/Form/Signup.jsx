import React, { useState, useEffect } from 'react';
import { Formik, Form } from 'formik';
import TextField from './TextField'
import * as Yup from 'yup'
import 'yup-phone'
import axios from 'axios';

// import * as Yup from 'yup-phone'


const Signup = ({ onChildValueChange }) => {
  const phoneRegExp = (/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/)
  const validate = Yup.object({
    first_name: Yup.string()
      .max(15, 'Must be 15 characters or less')
      .required('Required'),
    last_name: Yup.string()
      .max(15, 'Must be 15 characters or less')
      .required('Required'),
    phone: Yup.string()
      .matches(phoneRegExp, 'Invalid phone number')
      .required('Phone is required'),
    email: Yup.string()
      .email(15, 'Email is invalid')
      .required('Email is required'),
    password: Yup.string()
      .min(6, 'Password must be at least 6 characters')
      .required('Password is required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Password must match')
      .required('Confirm password is required'),
  })
  

  // const handleSubmit = async (values) => {

  //   try {
  //     axios.post('http://127.0.0.1:8000/ragister/', values)
  //   } catch (error) {
  //     console.log(error);
  //   };
  // };



  return (
    <>
      {/* <Formik
        initialValues={{
            first_name:'',
            last_name:'',
            phone:'',
            email:'',
            password:'',
            confirmPassword:''
        }}
        validationSchema={validate}
        onSubmit={handleSubmit}
      >
        {
            formik=>
                (
                    <div className="p-4 ">
                        <h1 className="mb-4 font-weight-bold-display-4">Sign UP</h1>
                        <Form>
                            <TextField label='First Name' name='first_name' type='text' />
                            <TextField label='Last Name' name='last_name' type='text' />
                            <TextField label='Phone' name='phone' type='text' />
                            <TextField label='Email' name='email' type='email' />
                            <TextField label='Password' name='password' type='password' />
                            <TextField label='Confirm Password' name='confirmPassword' type='password' />
                            <button className="btn1 btn btn-dark mt-3" type='submit'>Register</button>
                            <button className="btn1 btn btn-danger mt-3 ml-3" type='reset'>Reset</button>
                        </Form>
                    </div>
                )
            
        }
      </Formik> */}
      <Formik
        initialValues={
          {
            first_name:'',
            last_name:'',
            phone:'',
            email:'',
            password:'',
            confirmPassword:''
        }
        }
        validationSchema={validate}
        // validate={values => {
        //   const errors = {};
        //   if (!values.email) {
        //     errors.email = 'Required';
        //   } else if (
        //     !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        //   ) {
        //     errors.email = 'Invalid email address';
        //   }
        //   return errors;
        // }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            try {
              axios.post('http://127.0.0.1:8000/ragister/', values)
              onChildValueChange(true)

            } catch (error) {
              console.log(error);
            };
          }, 400);
        }}
      >
        {({
          handleSubmit,
          /* and other goodies */
        }) => (
          <div className="p-4">
              <h1 className="mb-4 font-weight-bold-display-4">Registertion</h1>
          <form onSubmit={handleSubmit}>
             <TextField label='First Name' name='first_name' type='text' />
                            <TextField label='Last Name' name='last_name' type='text' />
                            <TextField label='Phone' name='phone' type='text' />
                            <TextField label='Email' name='email' type='email' />
                            <TextField label='Password' name='password' type='password' />
                            <TextField label='Confirm Password' name='confirmPassword' type='password' />
                            <button className="btn1 btn btn-dark mt-3"  type='submit'>Register</button>
                            <button className="btn1 btn btn-danger mt-3 ml-3" type='reset'>Reset</button>
          </form>
          </div>
        )}
      </Formik>
    </>
  )
}

export default Signup
