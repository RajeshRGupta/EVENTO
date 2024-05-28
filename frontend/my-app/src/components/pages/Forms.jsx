import React,{useContext, useEffect, useState} from 'react'
import Signup from '../Form/Signup'
import './form.css';
import Login from '../Form/Login';
import NoteContext from '../../context/NotContext';


const Forms = () => {
  const context = useContext(NoteContext)
  useEffect(()=>{
    context.updateShow(false)
  },[])

  const [show,setShow]=useState(true)
  console.log(show)

  return (
    <div className="formMain">


      <div className="formBox">


      {
        show?<Login />:<Signup onChildValueChange={(value)=>setShow(value)} />
      }
      
      


      <button className='HideShowbtn' onClick={()=>{setShow(!show)}}>{show?"I Don't Have Account":"I Have Account"}</button>  
 
      </div>



    </div>
  )
}

export default Forms
