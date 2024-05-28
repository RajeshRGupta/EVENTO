import React, { useContext, useEffect, useState } from 'react'
import './events.css'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios';
import NoteContext from '../../context/NotContext';
import EventsGet from '../../axios/EventsGet';


const HomeEvents = (props) => {


  const [active1, setActive1] = useState();
  const [closed1, setClosed1] = useState();
  const [allEveData, setAllEveData] = useState([]);
  const { desh } = useParams()
  const navigate = useNavigate()
  const context = useContext(NoteContext)

  const [time, setTime] = useState(new Date());



  const today = new Date()
  const todaydate = today.getFullYear() + `-${(today.getMonth() + 1) < 10 ? '0' : ''}` + (today.getMonth() + 1) + '-' + `${(today.getMonth() + 1) < 10 ? '0' : ''}` + today.getDate();
  const curentTime = `${today.getHours() < 10 ? '0' : ''}${today.getHours()}${today.getHours() < 10 ? ':0' : ':'}${today.getMinutes()}${today.getSeconds() < 10 ? ':0' : ':'}${today.getSeconds()}`;


  


  useEffect(()=>{
    const GetEvents = (value) => setAllEveData(value)
    EventsGet({ GetEvents })
  },[today])
  
  useEffect(()=>{
    const intervalId = setInterval(() => {
      // Update time every second    
      setTime(new Date());
    }, 1000);
    return () => clearInterval(intervalId);
  },[time])

  useEffect(() => {
    const datedata = allEveData.filter((data1) => data1.deactivate === true).map((data) => data)
    setActive1(datedata.length)
    const datedata1 = allEveData.filter((data1) => data1.deactivate === false).map((data) => data)
    setClosed1(datedata1.length)
  }, [desh, context.onAddRef,time])

  return (
    <div style={props.style} className='h-100'>
      <div className="homeEve">
        <div className="homeActEve mt-3" onClick={() => navigate('/admin-dashbord/curent-events/active')}>
          <h2>ACTIVE EVENTS</h2>
          <p>{active1}</p>
        </div>
        <div className="homeCloseEve mt-3" onClick={() => navigate('/admin-dashbord/closed-events/close')} >
          <h2>CLOSED EVENTS</h2>
          <p>{closed1}</p>

        </div>
      </div>
    </div>
  )
}

export default HomeEvents
