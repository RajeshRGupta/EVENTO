import React, { useContext, useState,useEffect } from 'react'

import AddForm from '../../AddUpForm/AddForm';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import NoteContext from '../../../context/NotContext';
import axios from 'axios';


// import './dashbord.css'


const AdminEvents = (props) => {

  const [show, setShow] = useState(true)
  const pagevalues = [10, 15, 20, 25, 50]
  const navigate=useNavigate()
  const context=useContext(NoteContext)


  const today = new Date()
  const todaydate = today.getFullYear() + `-${(today.getMonth() + 1) < 10 ? '0' : ''}` + (today.getMonth() + 1) + '-' + `-${(today.getMonth() + 1) < 10 ? '0' : ''}` + today.getDate();
  const curentTime = `${today.getHours() < 10 ? '0' : ''}${today.getHours()}${today.getHours() < 10 ? ':0' : ':'}${today.getMinutes()}${today.getSeconds() < 10 ? ':0' : ':'}${today.getSeconds()}`;



//   useEffect(() => {

//     const authToken = `Bearer ${localStorage.getItem('access_token')}`
//     axios.get('http://127.0.0.1:8000/events/', {
//       headers: {
//         Authorization: authToken,
//       },
//     })
//       .then((response) => {
//         response.data.filter((data1) =>data1.startDate > todaydate).map((data) => {
//           console.log('data121 ',data)
//           try {
//             let form_data = new FormData();
//             form_data.append('deactivate', true);
//             const config = {
//               headers: {
//                 'Content-Type': 'multipart/form-data',
//                 'Authorization': authToken
//               },
//             };
//             const response = axios.patch(`http://127.0.0.1:8000/event/${data.id}`, form_data, config)
//             if (response.status === 200 || response.status === 201) {
//               console.log('Event created successfully:', response.data);
//             } else {
//               console.log('Unexpected response status aedfavc:', response.status);
//             }
//           } catch (error) {
//             console.log(error);
//           };
//         })
//         // response.data.filter((data1) =>data1.startDate < todaydate).map((data) => {
//         //   console.log('data212 ',data)
//         //   try {
//         //     let form_data = new FormData();
//         //     form_data.append('deactivate', false);
//         //     const config = {
//         //       headers: {
//         //         'Content-Type': 'multipart/form-data',
//         //         'Authorization': authToken
//         //       },
//         //     };
//         //     const response = axios.patch(`http://127.0.0.1:8000/event/${data.id}`, form_data, config)
//         //     if (response.status === 200 || response.status === 201) {
//         //       console.log('Event created successfully:', response.data);
//         //     } else {
//         //       console.log('Unexpected response status:', response.status);
//         //     }
//         //   } catch (error) {
//         //     console.log(error);
//         //   };
//         // })
//       })
//       .catch((error) => {
//         console.log(error)
//         console.log('error')
//       });
// }, [context.onAddRef])


console.log('refresh-data ',context.onAddRef)


  const Hide = (value) => {
    setShow(true);
  };

  const Logout=()=>{
    localStorage.removeItem('access_token');
    navigate('/');
  }


  return (
    <>
      <div className='container-fluid m-0 adminEvents h-100'>
        <div className="EventsTop ">
          <div className="row p-3">
            <div className="col-2">
              <div className=" me-3 mb-3" style={{ width: 'fit-content', display:`${props.message==='he'?'none':'block'}` }}>
                <select class="form-select" onChange={(e) => {
                  context.changepageValue(e.target.value)
                  } } aria-label="Default select example">
                  <option value={5} selected>5</option>
                  {
                    pagevalues &&
                    pagevalues.map((data, inx) => {
                      return <option value={data}>{data}</option>
                    })
                  }
                </select>
              </div>
            </div>
            <div className="col-8 ">
            </div>
            <div className="col-2">
              <div className='btn btn-outline-secondary bg-dark' onClick={() => setShow(!show)} style={{ color: '#fff' }}><i class="fa-solid fa-circle-plus"></i> ADD</div>
              <div className='btn btn-outline-secondary bg-dark' onClick={Logout} style={{ color: '#fff' }}>LOGOUT</div>
            </div>
          </div>
        </div>
        <div className="EventsBottom ">
          <Outlet/>
        </div>
      </div>
      {!show && <AddForm onStateChange={Hide}/>}


    </>
  )
}

export default AdminEvents
