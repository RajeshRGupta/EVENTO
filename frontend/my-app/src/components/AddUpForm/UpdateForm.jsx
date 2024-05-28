import React, { useState, useEffect, useContext } from 'react'
import { TextField, RadioGroup, FormControlLabel, Radio, Checkbox, FormGroup, FormLabel } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import './AddUpForm.css'
import ImageField from '../FieldCompo/ImageField';
import SelectField from '../FieldCompo/SelectField';
import { Formik, Form, Field } from 'formik';
import InputAdornment from '@mui/material/InputAdornment';
import axios from 'axios';
import { object, setLocale } from 'yup';
import EventsUpdate from '../../axios/EventsUpdate';
import NoteContext from '../../context/NotContext';
import DropDown from '../FieldCompo/DropDown';
import GenerGet from '../../axios/GenerGet';
import LocationGet from '../../axios/LocationGet';

const UpdateForm = (props) => {

    const data = props.message
    const [selectedImage, setSelectedImage] = useState(data.image);
    const [picture, setPicture] = useState(data.image);
    const [title, setTitle] = useState(data.title)
    const [details, setDetails] = useState(data.details)
    const [startDate, setStartDate] = useState(data.startDate)
    const [startTime, setStartTime] = useState(data.startTime)
    const [evquntity, setEvquntity] = useState(data.evquntity)
    const [genar, setGenar] = useState(data.genre)
    const [language, setLanguage] = useState(data.language)
    const [age, setAge] = useState(data.age)
    const [eventMode, setEventMode] = useState(data.eventMode)
    const [location, setLocation] = useState(data.adderss)
    const [price, setPrice] = useState(data.price)
    
    const [genres,setGenres]=useState([])
    const [loc,setLoc]=useState([])

    const context=useContext(NoteContext)

    const today = new Date()
    const todaydate = today.getFullYear() + `-${(today.getMonth() + 1) < 10 ? '0' : ''}` + (today.getMonth() + 1) + '-' + `${(today.getMonth() + 1) < 10 ? '0' : ''}` + today.getDate();
    const curentTime = `${today.getHours() < 10 ? '0' : ''}${today.getHours()}${today.getHours() < 10 ? ':0' : ':'}${today.getMinutes()}${today.getSeconds() < 10 ? ':0' : ':'}${today.getSeconds()}`;
  

    const handleChange1=(value)=>setGenar(value)
    const handleChange2=(value)=>setLocation(value)


    useEffect(()=>{
        const GenersGet=(value)=>setGenres(value)
        const locationsGet=(value)=>setLoc(value)
        GenerGet({GenersGet})
        LocationGet({locationsGet})
      context.addUpdataData(genar)
  },[])

    const theme = createTheme({
        palette: {
            primary: {
                main: '#818181',
            },
            secondary: {
                main: '#818181',
            },
        },
    });


    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setSelectedImage(reader.result);
                setPicture(file)
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = (e) => {
        setTimeout(() => {
            context.updateAddref(1)
            let form_data = new FormData();
            if (typeof (picture) !== 'string') {
                form_data.append('image', picture, picture.name);
            }
            form_data.append('title', title);
            form_data.append('details', details);
            form_data.append('genre', genar);
            form_data.append('startDate', startDate);
            form_data.append('startTime', startTime);
            form_data.append('evquntity', evquntity);
            form_data.append('adderss', location);
            form_data.append('price', price);
            form_data.append('age', age);
            form_data.append('language', language);
            form_data.append('eventMode', eventMode);
            if(startDate===todaydate){
                startTime>curentTime?form_data.append('deactivate', true):form_data.append('deactivate', false);
            }else{
                startDate>todaydate?form_data.append('deactivate', true):form_data.append('deactivate', false);
            }
            try {
                EventsUpdate(form_data,data.id)
                props.onStateChange(true)
            } catch (error) {
                console.log(error);
            };
        })
    }



    return (
        <div className='AddUpForm'>
            <button onClick={() => props.onStateChange(true)} className='position-absolute top-0 start-100 translate-middle badge border border-light bg-danger cancelBtn'>
                <i className="fa-solid fa-xmark"></i>
            </button>
            <div className="container-fluid h-100  form-main">
                <Formik
                    initialValues={{
                        image: '',
                        details: '',
                        title: '',
                        genar: '',
                        startDate: '',
                        startTime: '',
                        endDate: '',
                        endTime: '',
                        adderss: '',
                        price: '',
                        age: '',
                        language: '',
                        eventMode: ''
                    }}
                    onSubmit={handleSubmit}
                >
                    <Form className='h-100'>
                        <h2 className='pt-3 pb-4' style={{ color: 'rgb(73 73 73)', height:'5%', textAlign:'center' }}>
                                UPDATE EVENT FORM
                        </h2>
                        <div className="row g-0 py-4 ps-5 pe-3" style={{height:'95%'}}>
                             
                            <div className="col-8">
                                <div className="AddUpImgBox">
                                    <div className="imgInput">
                                        <input
                                            type="file"
                                            accept="image/*"
                                            id='file'
                                            // className=x'd-none'
                                            onChange={handleImageChange}
                                        />
                                        <label htmlFor='file' className='toFile'>
                                            <div className="circle">
                                                <i class="fa-solid fa-plus"></i>
                                            </div>
                                        </label>

                                    </div>


                                    {selectedImage && (
                                        <div>
                                            <img src={selectedImage} />
                                        </div>
                                    )}
                                </div>
                                <div className="AddUpAbout mt-3 mb-2 d-flex flex-column">
                                    <FormLabel id="demo-row-radio-buttons-group-label" className='mt-2'>About</FormLabel>
                                    <textarea name="" id="" className='aboutText p-3' value={details} onChange={(e) => setDetails(e.target.value)}></textarea>
                                    <FormLabel id="demo-row-radio-buttons-group-label" className='mt-2'></FormLabel>

                                </div>
                            </div>
                            <div className="col-4 pe-3" style={{overflow:'scroll',height:'93%',overflowX:'hidden',scrollbarWidth: 'thin'}}>
                                <ThemeProvider theme={theme}>
                                    <TextField style={{ margin: '5px' }} placeholder='title' value={title} onChange={(e) => setTitle(e.target.value)} multiline fullWidth id="outlined-basic" label="Title" variant="outlined" />
                                    <DropDown onChange={handleChange1} massage={genres} default={genar} plece={'Genar'} />

                                    <FormLabel id="demo-row-radio-buttons-group-label" className='mt-2'>Event Start</FormLabel>
                                    <div className="dateTime mb-1">
                                        <Field name="startDate">
                                            {({ field }) => (
                                                <input
                                                    {...field}
                                                    type="date"
                                                    value={startDate}
                                                    onChange={(e) => setStartDate(e.target.value)}
                                                />
                                            )}
                                        </Field>
                                        <Field name="startTime">
                                            {({ field }) => (
                                                <input
                                                    {...field}
                                                    type="time"
                                                    value={startTime}
                                                    onChange={(e) => setStartTime(e.target.value)}

                                                />
                                            )}
                                        </Field>
                                    </div>
                                    {/* <TextField style={{ margin: '5px' }} placeholder='location' value={location} onChange={(e) => setLocation(e.target.value)} multiline fullWidth id="outlined-basic" label="Location" variant="outlined" /> */}
                                    <DropDown onChange={handleChange2} massage={loc} default={location} plece={'Location'} />
                                    
                                    <TextField style={{ margin: '5px' }} placeholder='price' value={price} onChange={(e) => setPrice(e.target.value)} multiline fullWidth id="outlined-basic" label="Price" variant="outlined" />
                                    
                                    <TextField style={{ margin: '5px' }} placeholder='Number of Tekets' value={evquntity} onChange={(e) => setEvquntity(e.target.value)} multiline fullWidth id="outlined-basic" label="Number of Tekets" variant="outlined" />
                                    
                                    <TextField style={{ margin: '5px' }} placeholder='age' value={age} onChange={(e) => setAge(e.target.value)} multiline fullWidth id="outlined-basic" label="Age" variant="outlined" />
                                    <TextField style={{ margin: '5px' }} placeholder='language' value={language} onChange={(e) => setLanguage(e.target.value)} multiline fullWidth id="outlined-basic" label="Language" variant="outlined" />
                                    <TextField style={{ margin: '5px' }} placeholder='Event Mode' value={eventMode} onChange={(e) => setEventMode(e.target.value)} multiline fullWidth id="outlined-basic" label="Event Mode" variant="outlined" />
                                    <button type='submit' className='btn btn-dark'>Save</button>
                                    <button type='reset' className='btn btn-danger buttonsave'>Reset</button>
                                </ThemeProvider>
                            </div>

                        </div>
                    </Form>


                </Formik>
            </div>

        </div>
    )
}


export default UpdateForm
