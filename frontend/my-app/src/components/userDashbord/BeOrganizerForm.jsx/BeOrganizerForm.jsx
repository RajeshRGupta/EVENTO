import React, { useState } from 'react'
import { Formik, Form, Field } from 'formik';
import './Beoreg.css'
import axios from 'axios';
import { TextField } from '@mui/material';

const BeOrganizerForm = () => {

    const [selectedImage, setSelectedImage] = useState({
        1: null,
        2: null,
        3: null,
        4: null,

    });

    const [companyname,setCompanyname]=useState('')
    const [selectedImage1, setSelectedImage1] = useState({
        1: null,
        2: null,
        3: null,
        4: null,
    });

    const handleImageChange = (docKey) => (e) => {
        console.log('get:------', e.target.files[0])
        const file = e.target.files[0];

        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {

                setSelectedImage((prevImages) => ({
                    ...prevImages,
                    [docKey]: reader.result,
                }))
                setSelectedImage1((prevImages) => ({
                    ...prevImages,
                    [docKey]: file,
                }))
            };
            reader.readAsDataURL(file);
        }
    };

    console.log('texfcyvghjbk----------------', selectedImage1)
    const handleSubmit = async () => {
        try {
            let form_data = new FormData();
            form_data.append('image1', selectedImage1[1], selectedImage1[1].name);
            form_data.append('image2', selectedImage1[2], selectedImage1[2].name);
            form_data.append('image3', selectedImage1[3], selectedImage1[3].name);
            form_data.append('image4', selectedImage1[4], selectedImage1[4].name);
            form_data.append('companyName', companyname);

            const authToken = `Bearer ${localStorage.getItem('access_token')}`;
            const config = {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Authorization': authToken
                },
            };

            const response = await axios.post('http://127.0.0.1:8000/organizercreate/', form_data, config);

            if (response.status === 200 || response.status === 201) {
                console.log('Event created successfully:', response.data);
            } else {
                console.log('Unexpected response status:', response.status);
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };


    const hendelReset = () => {
        setSelectedImage((prevImages) => {
            const resetImages = {};
            Object.keys(prevImages).forEach((key) => {
                resetImages[key] = null;
            });
            return resetImages;
        })
    }


    return (
        <div className="container mainDashTktCon mt-5 d-flex justify-content-center pb-5" >
            <div className="" style={{ width: "75%" }}>
                <h2 className='fw-bold text-center mb-4' style={{ color: 'rgb(80,80,80)' }} >ORGANIZER FORM</h2>
                <div className="organizer-form">


                    <div className="container-fluid h-100  form-main">
                        <Formik
                        initialValues={{
                            image1: '',
                            image2: '',
                            image3: '',
                            image4: '',
                            companyName:''
                            
                        }}
                            onSubmit={handleSubmit}
                        >
                            {
                                formik => (
                                    <Form>

                                        <div className="inputText mb-4">
                                            <h4 className='document-lable'>Company Name </h4>
                                            <TextField style={{ margin: '5px' }} placeholder='Company Name' value={companyname} onChange={(e) => setCompanyname(e.target.value)} multiline fullWidth id="outlined-basic" label="Company Name" variant="outlined" />

                                        </div>

                                        <div className="row g-0 gy-4">

                                            <div className="col-6">
                                                <h4 className='document-lable'>Document1 </h4>
                                                <div className="image-input-box">

                                                    <div className="AddUpImgBox1">
                                                        <div className="imgInput1">
                                                            <input
                                                                type="file"
                                                                accept="image/*"
                                                                id='file1'
                                                                className='d-none'
                                                                onChange={handleImageChange(1)}
                                                            />
                                                            <label htmlFor='file1' className='toFile1'>
                                                                <div className="circle1">
                                                                    <i class="fa-solid fa-plus"></i>
                                                                </div>
                                                            </label>

                                                        </div>


                                                        {selectedImage[1] && (
                                                            <div>
                                                                <img src={selectedImage[1]} />
                                                            </div>
                                                        )}
                                                    </div>


                                                </div>
                                            </div>


                                            <div className="col-6">
                                                <h4 className='document-lable'>Document2 </h4>
                                                <div className="image-input-box">

                                                    <div className="AddUpImgBox1">
                                                        <div className="imgInput1">
                                                            <input
                                                                type="file"
                                                                accept="image/*"
                                                                id='file2'
                                                                className='d-none'
                                                                onChange={handleImageChange(2)}
                                                            />
                                                            <label htmlFor='file2' className='toFile1'>
                                                                <div className="circle1">
                                                                    <i class="fa-solid fa-plus"></i>
                                                                </div>
                                                            </label>

                                                        </div>


                                                        {selectedImage[2] && (
                                                            <div>
                                                                <img src={selectedImage[2]} />
                                                            </div>
                                                        )}
                                                    </div>


                                                </div>
                                            </div>

                                            <div className="col-6">
                                                <h4 className='document-lable'>Document3 </h4>
                                                <div className="image-input-box">

                                                    <div className="AddUpImgBox1">
                                                        <div className="imgInput1">
                                                            <input
                                                                type="file"
                                                                accept="image/*"
                                                                id='file3'
                                                                className='d-none'
                                                                onChange={handleImageChange(3)}
                                                            />
                                                            <label htmlFor='file3' className='toFile1'>
                                                                <div className="circle1">
                                                                    <i class="fa-solid fa-plus"></i>
                                                                </div>
                                                            </label>

                                                        </div>


                                                        {selectedImage[3] && (
                                                            <div>
                                                                <img src={selectedImage[3]} />
                                                            </div>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>



                                            <div className="col-6">
                                                <h4 className='document-lable'>Document4 </h4>
                                                <div className="image-input-box">

                                                    <div className="AddUpImgBox1">
                                                        <div className="imgInput1">
                                                            <input
                                                                type="file"
                                                                accept="image/*"
                                                                id='file4'
                                                                className='d-none'
                                                                onChange={handleImageChange(4)}
                                                            />
                                                            <label htmlFor='file4' className='toFile1'>
                                                                <div className="circle1">
                                                                    <i class="fa-solid fa-plus"></i>
                                                                </div>
                                                            </label>

                                                        </div>


                                                        {selectedImage[4] && (
                                                            <div>
                                                                <img src={selectedImage[4]} />
                                                            </div>
                                                        )}
                                                    </div>


                                                </div>
                                            </div>

                                        </div>


                                        <div className="org-btn mt-5 d-flex justify-content-center  ">
                                            <button type='submit' className='btn btn-dark me-4 px-5'>Save</button>
                                            <button type='reset' className='btn btn-danger buttonsave me-4 px-5' onClick={hendelReset}>Reset</button>
                                        </div>




                                    </Form>
                                )
                            }
                        </Formik>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default BeOrganizerForm