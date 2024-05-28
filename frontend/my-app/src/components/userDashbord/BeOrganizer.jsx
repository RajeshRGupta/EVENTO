import React, { useEffect, useState } from 'react'
import BeOrganizerForm from './BeOrganizerForm.jsx/BeOrganizerForm'
import ORGet from '../../axios/ORGet'
import Userdata from '../../axios/Userdata'

const BeOrganizer = () => {

  // const [userData1,setUserData1]=useState(null)
  const [ORGData1,setORGData1]=useState(null)
    

    // useEffect(()=>{
    //     const GetUserData=(data)=>setUserData1(data.id)  
    //     Userdata({GetUserData})
    // },[])
    useEffect(()=>{
        // const GetORGData=(data)=>setORGData1(data.filter((data1)=>data1.id===userData1))
        const GetORGData=(data)=>setORGData1(data)
        ORGet({GetORGData})
    },[])

  return (
    <div>
        <BeOrganizerForm/>
    </div>
  )
}

export default BeOrganizer