import React, { useState, useEffect, useContext } from 'react'
import NoteContext from '../../../context/NotContext'

import { Link, Outlet, useNavigate, useParams } from 'react-router-dom';


import logo from '../../midia/logo/logo2.png'
import '../Eventodasbord/dashbord.css'
import SuperAdmin from './SuperAdmin';
// import './superAdmin.css'


const SuperAdminDashbord = () => {

  const [active, setActive] = useState('')
  const [leftDown,setLeftDown]=useState(2)
  const [leftDown1,setLeftDown1]=useState(2)
  const context = useContext(NoteContext)

  const { desh1 } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    context.updateShow(false)
  }, [])

  useEffect(() => {
    if (localStorage.getItem('access_token') === null) {
      navigate('/login')
    }
    else if (localStorage.getItem('userauth') === 'false') {
      navigate('/evento')
    }
    else {
      console.log('fale')
    };

  }, []);

  useEffect(() => {
    if (desh1 === 'active') {
      setActive('ae')
    } else if (desh1 === 'close') {
      setActive('ce')
    }else if (desh1 === 'user') {
      setActive('us')
    }else if (desh1 === 'orgUser') {
      setActive('ous')
    }else if (desh1 === 'creorg') {
      setActive('creorg')
    }
     else {
      setActive('he')
    }
  }, [desh1])


  const changeStyle = (value) => {
    setActive(value)
  }



  return (
    <>
      <div className="superAdmin">
        <div className="superLeft">
          <div className="container container1">
            <div className="logo">
            {/* <img src={logo} alt="" /> */}
            </div>
            <div className="adminList">
              <div className="row ">
                <Link to='home/home' className={`col-12 colm dashnavLink ${active === 'he' ? 'dashnavActive' : ''}`} onClick={() => changeStyle('he')}> HOME</Link>
                <div className='col-12 colm dashnavLink' onClick={()=>setLeftDown(leftDown+1)}>
                  {leftDown%2===0?<i class="fa-solid fa-caret-right"></i>:<i class="fa-solid fa-caret-down"></i>} USER 
                </div>
                <div class="collapse"  style={{display:`${leftDown%2===0?'none':'flex'}`}}>
                      <Link to='users/user' className={`col-12 colm dashnavLink ${active === 'us' ? 'dashnavActive' : ''}`} onClick={() => changeStyle('us')}> USERS</Link>
                      <Link to='organisers/orgUser' className={`col-12 colm dashnavLink ${active === 'ous' ? 'dashnavActive' : ''}`} onClick={() => changeStyle('ous')}>ORGANISERS</Link>
                </div>
                <div className='col-12 colm dashnavLink' onClick={()=>setLeftDown1(leftDown1+1)}>
                  {leftDown1%2===0?<i class="fa-solid fa-caret-right"></i>:<i class="fa-solid fa-caret-down"></i>} EVENTS 
                </div>
                <div class="collapse" style={{display:`${leftDown1%2===0?'none':'flex'}`}}>
                      <Link to='curent-events/active' className={`col-12 colm dashnavLink ${active === 'ae' ? 'dashnavActive' : ''}`} onClick={() => changeStyle('ae')}> ACTIVE EVENTS</Link>
                      <Link to='closed-events/close' className={`col-12 colm dashnavLink ${active === 'ce' ? 'dashnavActive' : ''}`} onClick={() => changeStyle('ce')}> CLOSED EVENTS</Link>
                      {/* <Link to='users/user' className={`col-12 colm dashnavLink ${active === 'us' ? 'dashnavActive' : ''}`} onClick={() => changeStyle('us')}> USERS</Link> */}
                </div>

                <Link to='create-orgamiser/creorg' className={`col-12 colm dashnavLink ${active === 'creorg' ? 'dashnavActive' : ''}`} onClick={() => changeStyle('creorg')}> Create ORGANISERS</Link>



              </div>
            </div>
          </div>
        </div>
        <div className="superRight position-relative">
          <SuperAdmin message={active}/>
        </div>
      </div>
    </>
  )
}

export default SuperAdminDashbord
