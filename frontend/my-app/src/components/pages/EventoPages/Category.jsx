import React, { useState, useEffect, useContext } from 'react'
import { useParams, useNavigate, Link, Route, Routes } from 'react-router-dom'
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';

import { Button } from 'react-bootstrap'
import EveCard from '../../EventsCard/EveCard'
import './category.css'

import axios from 'axios';
import NoteContext from '../../../context/NotContext';
import NoData from './NoData';
import { number } from 'yup';
import CartConfromCard from '../../CartConfromCard/CartConfromCard';



const Category = () => {

  const { cteg } = useParams()
  const { cteg1 } = useParams()
  const { cteg2 } = useParams()
  const navigate = useNavigate(null)

  const [cngColor, setcngColor] = useState({})
  const [cngFontColor, setcngFontColor] = useState({})
  const [cngColor1, setcngColor1] = useState({})
  const [cngFontColor1, setcngFontColor1] = useState({})


  const [alldata, setAllData] = useState([])
  const [alldata1, setAllData1] = useState([])
  const [countofdata, setCountofdata] = useState()
  const [category1, setCategory1] = useState()


  const context = useContext(NoteContext)

  useEffect(() => {
    context.updateShow(true)
  }, [])
  useEffect(() => {
    if (localStorage.getItem('access_token') === null) {
      window.location.href = '/login'
    }
    else {
      let dateObj = new Date();
      let month = String(dateObj.getMonth() + 1).padStart(2, '0');
      let day = String(dateObj.getDate()).padStart(2, '0');
      let year = dateObj.getFullYear();
      let output = day + '-' + month + '-' + year;
      const authToken = `Bearer ${localStorage.getItem('access_token')}`
      axios.get('http://127.0.0.1:8000/genres/', {
        headers: {
          Authorization: authToken,
        },
      })
        .then((response) => {
          setCategory1(response.data)
        })
        .catch((error) => {
          console.log(error)
          console.log('error')
        });
      axios.get('http://127.0.0.1:8000/events/', {
        headers: {
          Authorization: authToken,
        },
      })
        .then((response) => {
          if (cteg === 'free-events') {
            const filteredData = response.data.filter(data => Number(data.price) === Number(0));
            setCountofdata(Object.keys(filteredData).length)
            setAllData(filteredData)
            setAllData1(filteredData)
          } 
          else if (cteg === 'events') {
            setCountofdata(Object.keys(response.data).length)
            setAllData(response.data)
            setAllData1(response.data)
          }
          else {
            const filteredData = response.data.filter(data => data.adderss.id === Number(cteg));
            setCountofdata(Object.keys(filteredData).length)
            setAllData(filteredData)
            setAllData1(filteredData)
          }
      
        })
        .catch((error) => {
          console.log(error)
          console.log('error')
        });
    };
  }, [cteg]);


  const btnChang = (index) => {
    setcngColor(() => ({
      [index]: 'red',
    }));
    setcngFontColor(() => ({
      [index]: 'white',
    }));
  }

  const btnChang1 = (index,elm) => {
    setcngColor1(() => ({
      [index]: 'red',
    }));
    setcngFontColor1(() => ({
      [index]: 'white',
    }));
    const filteredData = alldata1.filter((data) => data.genre.categry === elm);
    setCountofdata(Object.keys(filteredData).length)
    setAllData((prev)=>prev=filteredData)
    console.log('data:----------------------',filteredData)
    console.log('ctg:----------------------',elm)
  }


  const timeButton = ['All', 'Today', 'Tomorrow', 'Weekend']

  const catStyle = {
    padding: '5px 15px',
    borderRadius: '20px',
    border: 'solid 1px',
    fontSize: '18px',
    fontWidth: '700',
    backgroundColor: cngColor
  }

  return (
    <>
      <div className="container mt-5 position-relative" >
        <h2 className=' text-center text-bold text-info'><span>All</span> <span>Games</span> Events <span className='text-dark'>{countofdata}</span></h2>
        <div className="w-100 d-flex flex-column align-items-center text-secondary">

          <div className="font mt-3 d-flex align-items-center flex-wrap">GENRE:
            <div className="btnslider">
              <Splide hasTrack={false}>
                <SplideTrack>

                  {category1 &&
                    category1.map((elm, ind) => {
                      return (
                        <SplideSlide>
                          <Link to={`${elm.categry}`} className={`border-secondary my-3 mx-2 catselectbtn`} onClick={() => btnChang1(ind,elm.categry)}
                            style={{ ...catStyle, backgroundColor: cngColor1[ind], color: cngFontColor1[ind] }} key={ind}>{((elm.categry[0].toUpperCase())+(elm.categry.slice(1)))}</Link></SplideSlide>
                      )
                    })
                  }
                </SplideTrack>

                <div className="splide__arrows">
                  <button className="splide__arrow splide__arrow--prev"><i class="fa-solid fa-circle-left"></i></button>
                  <button className="splide__arrow splide__arrow--next"><i class="fa-solid fa-circle-right"></i></button>
                </div>
              </Splide>
            </div>
          </div>
          <div className="font mt-3">Time: {
            timeButton.map((elm, ind) => {
              return (
                <Link to={`${elm}`} className={`border-secondary mx-2 dateselectbtn`} onClick={() => btnChang(ind)}
                  style={{ ...catStyle, backgroundColor: cngColor[ind], color: cngFontColor[ind] }} key={ind}>{elm}</Link>
              )
            })
          }</div>
        </div>
      </div>

      <div className="container my-5" style={{ height: alldata.length > 0 ? "fit-content" : "55vh" }}>
        {
          alldata.length > 0 ?
            <div className="row g-5">
              {
                alldata &&
                alldata.map((data, inx) => {
                  return (<>
                    <div className="col-4">
                      <div style={{ cursor: 'pointer' }}>
                        <EveCard massage={data} />
                      </div>
                    </div>
                  </>)
                })
              }
            </div>:<NoData/>
          }
      </div>

    </>
  )
}


export default Category
