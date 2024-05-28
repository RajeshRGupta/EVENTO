import React, { useState, useEffect, useContext } from 'react'
import { Container } from 'react-bootstrap';
import './events.css'
import axios from 'axios';
import UpdateForm from '../AddUpForm/UpdateForm';
import PaginationButton from '../Pagination/PaginationButton';
import { useParams } from 'react-router-dom';
import NoteContext from '../../context/NotContext';
import EventsUpdate from '../../axios/EventsUpdate';
import EventsGet from '../../axios/EventsGet';



const Events = (props) => {
  const [delete1, setDelete1] = useState()
  const [showup, setShowUp] = useState(true);
  const [dataid, setDataId] = useState();
  const [onAddPageRef1, setOnAddPageRef1] = useState();
  const [currentPage, setCurrentPage] = useState(1)
  const [record, setRecord] = useState()
  const [nPage, setNPage] = useState()
  const [allEveData, setAllEveData] = useState([]);
  const context = useContext(NoteContext)
  const pageValue = context.pageValue
  const lastIndex = currentPage * pageValue
  const firtIndex = lastIndex - pageValue

  const today = new Date()
  const todaydate = today.getFullYear() + `-${(today.getMonth() + 1) < 10 ? '0' : ''}` + (today.getMonth() + 1) + '-' + `${(today.getDate() + 1) < 10 ? '0' : ''}` + today.getDate();
  const curentTime = `${today.getHours() < 10 ? '0' : ''}${today.getHours()}${today.getHours() < 10 ? ':0' : ':'}${today.getMinutes()}${today.getSeconds() < 10 ? ':0' : ':'}${today.getSeconds()}`;


  const [time, setTime] = useState(new Date());




  useEffect(() => {
    const intervalId = setInterval(() => {
      // Update time every second
      setTime(new Date());
    }, 500);
    return () => clearInterval(intervalId);
  }, [time])

  useEffect(() => {
    setTimeout(() => {
      const GetEvents = (value) => setAllEveData(value)
      EventsGet({ GetEvents })
    }, 1000)

  }, [time])

  useEffect(()=>{
    try{
      allEveData.filter((data1) => data1.startDate < todaydate).map((data) =>{
        try {
          let form_data = new FormData();
          form_data.append('deactivate', false);
          EventsUpdate(form_data, data.id)
        } catch (error) {
          console.log(error);
        };
      })

      allEveData.filter((data1) => data1.startDate === todaydate && data1.startTime < curentTime).map((data) => {
        try {
          let form_data = new FormData();
          form_data.append('deactivate', false);
          EventsUpdate(form_data, data.id)
  
        } catch (error) {
          console.log(error);
        };
      })
    }
    catch{
      console('error')
    }

  },[time])

  useEffect(() => {
    try{
      const datedata = allEveData.filter((data1) => data1.deactivate === true).map((data) => data)
      setRecord(datedata.slice(firtIndex, lastIndex))
      setNPage(Math.ceil((datedata.length) / pageValue))
      setOnAddPageRef1(props.onAddPageRef)
    }
    catch{
      console('error')
    }
  }, [delete1 ,pageValue ,currentPage ,context.onAddRef,time])


  // useEffect(() => {
  //   const authToken = `Bearer ${localStorage.getItem('access_token')}`



  //   axios.get('http://127.0.0.1:8000/events/', {
  //     headers: {
  //       Authorization: authToken,
  //     },
  //   })
  //     .then((response) => {
  //       response.data.filter((data1) => data1.startDate > todaydate).map((data) => {
  //         console.log('data121 ', data)
  //         try {
  //           let form_data = new FormData();
  //           form_data.append('deactivate', true);
  //           // const config = {
  //           //   headers: {
  //           //     'Content-Type': 'multipart/form-data',
  //           //     'Authorization': authToken
  //           //   },
  //           // };
  //           // const response = axios.patch(`http://127.0.0.1:8000/event/${data.id}`, form_data, config)
  //           // if (response.status === 200 || response.status === 201) {
  //           //   console.log('Event created successfully:', response.data);
  //           // } else {
  //           //   console.log('Unexpected response status:', response.status);
  //           // }
  //           EventsUpdate(form_data,data.id)
  //         } catch (error) {
  //           console.log(error);
  //         };
  //       })

  //       response.data.filter((data1)=>data1.startDate===todaydate&&data1.startTime > curentTime).map((data)=>{
  //         console.log('data1213 ', data)
  //         try {
  //           let form_data = new FormData();
  //           form_data.append('deactivate', true);
  //           EventsUpdate(form_data,data.id)

  //         } catch (error) {
  //           console.log(error);
  //         };
  //       })

  //       response.data.filter((data1) => data1.startDate < todaydate).map((data) => {
  //         console.log('data212 ', data)
  //         try {
  //           let form_data = new FormData();
  //           form_data.append('deactivate', false);
  //           EventsUpdate(form_data,data.id)
  //         } catch (error) {
  //           console.log(error);
  //         };
  //       })

  //       response.data.filter((data1)=>data1.startDate===todaydate&&data1.startTime < curentTime).map((data)=>{
  //         console.log('data1214 ', data)
  //         try {
  //           let form_data = new FormData();
  //           form_data.append('deactivate', false);
  //           EventsUpdate(form_data,data.id)

  //         } catch (error) {
  //           console.log(error);
  //         };
  //       })

  //       const datedata = response.data.filter((data1) => data1.deactivate === true).map((data) => data)
  //       setRecord(datedata.slice(firtIndex, lastIndex))
  //       setNPage(Math.ceil((datedata.length) / pageValue))
  //       setOnAddPageRef1(props.onAddPageRef)
  //     })
  //     .catch((error) => {
  //       console.log('error')
  //       console.log(error)
  //     });
  // }, [delete1, pageValue, currentPage, context.onAddRef,time])



  const Hide = (value) => {
    setShowUp(value);
  };

  const handlePageChange = (data) => {
    setCurrentPage(data)
  }
  const onclikDelet = (id) => {
    axios.delete(`http://127.0.0.1:8000/event/${id}`)
      .then(response => {
        setDelete1(id)
      })
      .catch(error => {
        console.error(error);
      });
  }

  return (
    <div style={props.style} className='h-100'>
      <Container className='h-100'>
        <div className="evetableheding">
          <div className="row g-0">
            <div className="col-1 py-3 evdetels">Sr.</div>
            <div className="col-2 evdetels">Image</div>
            <div className="col-4 evdetels">Title</div>
            <div className="col-2 evdetels">Number of tekets</div>
            <div className="col-2 evdetels">Price</div>
            <div className="col-1 evdetels">Delete</div>
          </div>
        </div>

        <div className="evetabledata">
          {
            record &&
            record.map((data, inx) => {
              return (
                <div className="row g-0 mt-3 position-relative" style={{ cursor: 'pointer' }} >
                  <div className="col-1 py-3 fs-4 evdetels">{(inx + ((currentPage - 1) * pageValue) + 1)}</div>
                  <div className="col-2 evdetels">
                    <div className="imgbox">
                      <img src={data.image} alt="" />
                    </div>
                  </div>
                  <div className="col-4 px-3 py-3 fs-5 evdetels">{data.title}</div>
                  <div className="col-2 py-3 fs-4 evdetels">{`${data.evsoldquntity}/${data.evquntity}`}</div>
                  <div className="col-2 py-3 fs-4 evdetels">{data.price}</div>
                  <div className="col-1 py-3 evdetels">
                    <button onClick={() => onclikDelet(data.id)} className='btn bg-danger fs-4' style={{ color: '#fff', position: 'relative', zIndex: 999 }}><i class="fa-regular fa-trash-can"></i></button>
                  </div>
                  <div className="col-11 h-100 position-absolute" style={{ top: 0, left: 0, zIndex: 999 }} onClick={() => { setShowUp(!showup); setDataId(data) }}></div>
                </div>
              )
            })
          }
          {nPage > 1 && <PaginationButton message={nPage} onChangePage={handlePageChange} />}
        </div>




      </Container>

      {!showup && <UpdateForm message={dataid} onStateChange={Hide} />}

    </div >
  )
}

export default Events
