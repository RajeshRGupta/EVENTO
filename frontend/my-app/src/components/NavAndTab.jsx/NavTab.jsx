import React, { useEffect, useState } from 'react'
import './NavTab.css'
import { display } from '@mui/system';
import { Link, useNavigate } from 'react-router-dom';
import Userdata from '../../axios/Userdata';
import ORGet from '../../axios/ORGet';
import ORGAllGet from '../../axios/ORGAllGet';

const NavTab = () => {

  const [activeStates, setActiveStates] = useState(0);

  const [userData1,setUserData1]=useState([])
  const [userDoc,setUserDoc]=useState([])
  const navigate=useNavigate()
    useEffect(()=>{
        const GetUserData=(data)=>{
            // setUserData1(data.is_staff)
            setUserData1(data)
        }   
        const GetORGAllData=(data)=>{
          setUserDoc(data.filter((data1)=>data1.user.id===userData1.id))
        }
        ORGAllGet({GetORGAllData})
        Userdata({GetUserData})

    },[])
    console.log("userDoc:-------------",userDoc)
    const UnderLine1=(inx)=>{
      setActiveStates(inx)
    }

    const LogOut=()=>{
      localStorage.removeItem('access_token');
      navigate('/');
    }

  return (
    <div className='w-100 d-flex justify-content-center border-bottom main-navtab' >
        <div className="navTab d-flex justify-content-center align-items-center">
          {
            userData1.is_staff?
            <Link to='/admin-dashbord/home' className="tekets position-relative" onClick={()=>UnderLine1(1)}>ORGANIZER <div className="underline" style={{display:`${activeStates===1?"block":"none"}`}}></div></Link>:
            <Link to={userDoc.length>0?'organizer-in-process':"organizer"} className="tekets position-relative" onClick={()=>UnderLine1(1)}>ORGANIZER <div className="underline" style={{display:`${activeStates===1?"block":"none"}`}}></div></Link>
          }
            <Link to='Tekets' className="tekets position-relative" onClick={()=>UnderLine1(0)}>TEKETS <div className="underline" style={{display:`${activeStates===0?"block":"none"}`}}></div></Link>
            <Link to='cart' className="tekets position-relative" onClick={()=>UnderLine1(2)}>CART <div className="underline" style={{display:`${activeStates===2?"block":"none"}`}}></div></Link>

            <button type="button" onClick={LogOut} class="btn btn-danger">LogOut</button>
        </div>
    </div>
  )
}

export default NavTab
