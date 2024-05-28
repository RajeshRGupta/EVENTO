import React, { useContext, useEffect, useState } from 'react'
import './ConfromORG.css'
import NoteContext from '../../context/NotContext'
import ORGAllGet from '../../axios/ORGAllGet'
import UserUpdate from '../../axios/UserUpdate'

const ConfarmForORG = () => {
    const [usersData, setUsersData] = useState()
    const [usersStaff, setUsersStaff] = useState()

    const context=useContext(NoteContext)



  const [time, setTime] = useState(new Date());
    useEffect(() => {
        const intervalId = setInterval(() => {
          // Update time every second
          setTime(new Date());
        }, 500);
        return () => clearInterval(intervalId);
      }, [time])


    useEffect(()=>{
            const GetORGAllData = (value) => {
                setUsersData(value.filter((data)=>data.id===context.checked).map((data1)=>data1.user.id)[0])
                setUsersStaff(value.filter((data)=>data.id===context.checked).map((data1)=>data1.user.is_staff)[0])
            }
            ORGAllGet({ GetORGAllData })
    },[context.popORG,time])


    const handlConform=()=>{
        try {
            let form_data = new FormData();
            form_data.append('is_staff', usersStaff===true?false:true);
            UserUpdate(form_data,usersData)
            context.onPopORG(false)
        } catch (error) {
            console.log(error);
        };
    }


    const handlCancel=()=>{
        context.onPopORG(false)
    }


    return (
        <div className='ConfarmForORG' style={{display:`${context.popORG===true?"flex":'none'}`}}>
            <div className="mainORG">
                <div className="card">
                    <div className="card-header">
                        Featured
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">Special title treatment</h5>
                        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                        <a href="#" onClick={handlConform} className="btn btn-success me-3">CONFORM</a>
                        <a href="#" onClick={handlCancel} className="btn btn-danger ">CANCEL</a>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default ConfarmForORG