import React, { useState, useEffect, useContext } from 'react'
import { Container } from 'react-bootstrap';
import logo from '../../midia/logo/logo2.png'
import './dashbord.css'
import AdminEvents from './AdminEvents';
import PaginationButton from '../../Pagination/PaginationButton';
import { Link, Outlet, useNavigate, useParams } from 'react-router-dom';
import HomeEvents from '../../Events/HomeEvents';
import axios from 'axios';
import NoteContext from '../../../context/NotContext';
import Userdata from '../../../axios/Userdata';


const Dashbord = (props) => {



  const [active, setActive] = useState('')
  const [userData1,setUserData1]=useState([])

  const context=useContext(NoteContext)
  const { desh } = useParams()
  const navigate = useNavigate()


  useEffect(()=>{
    context.updateShow(false)
  },[])

    useEffect(()=>{
        const GetUserData=(data)=>setUserData1(data)  
        Userdata({GetUserData})
    },[])

    console.log(userData1)

  useEffect(() => {
    if (localStorage.getItem('access_token') === null) {
      navigate('/login')
    }
    else if (localStorage.getItem('userauth') === 'false') {
      if(userData1.is_staff===true){
        navigate('/admin-dashbord/home')
        localStorage.setItem('userauth',userData1.is_staff)
      }
      else{
        navigate('/evento')
      }
    }
    else if (localStorage.getItem('userauth') === 'true') {
      if(userData1.is_staff===false){
        localStorage.setItem('userauth',userData1.is_staff)
        navigate('/evento')
      }
      else{
        navigate('/admin-dashbord/home')
      }
    }
    else {
      console.log('fale')
    };

  }, []);

  const changeStyle = (value) => {
    setActive(value)
  }

  return (
    <div className='adminDashbord'>
      <div className="dashLeft">
        <div className='container container1'>
          <div className="logo"></div>
          <div className="adminList">
            <div className="row ">
              <Link to='home/home' className={`col-12 colm dashnavLink ${active === 'he' ? 'dashnavActive' : ''}`} onClick={() => changeStyle('he')}> HOME</Link>
              <Link to='curent-events/active' className={`col-12 colm dashnavLink ${active === 'ae' ? 'dashnavActive' : ''}`} onClick={() => changeStyle('ae')}> ACTIVE EVENTS</Link>
              <Link to='closed-events/close' className={`col-12 colm dashnavLink ${active === 'ce' ? 'dashnavActive' : ''}`} onClick={() => changeStyle('ce')}> CLOSED EVENTS</Link>
            </div>
          </div>
          <div className="adminList1" style={{ marginBottom: 0 }}>
            <div className="row ">
              <Link to='curent-events/active' className={`col-12 colm dashnavLink`} style={{textDecoration:'none',color:'white'}} onClick={() => navigate('/evento')}> BACK TO EVENTO </Link>
              {/* <div to='closed-events/close' className={`col-12 colm dashnavLink`} onClick={() => changeStyle('ce')}> HELP</div> */}
            </div>
          </div>
        </div>
      </div>
      <div className=" position-relative dashRight">
        <AdminEvents message={active} />
      </div>

    </div>
  )
}

export default Dashbord
