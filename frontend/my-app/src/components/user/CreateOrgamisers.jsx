import React, { useContext, useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import Switch1 from '../Switch/Switch1';
import ORGAllGet from '../../axios/ORGAllGet';
import NoteContext from '../../context/NotContext';
import { Link, Outlet, useParams } from 'react-router-dom';
import TeketDelet from '../../axios/tekets/TeketDelet';

const CreateOrgamisers = () => {

    const [usersData, setUsersData] = useState([])

    const context=useContext(NoteContext)

    const {id1}=useParams()


    const [time, setTime] = useState(new Date());
    useEffect(() => {
        const intervalId = setInterval(() => {
          // Update time every second
          setTime(new Date());
        }, 500);
        return () => clearInterval(intervalId);
      }, [time])

    const ref=context.popORG
    useEffect(() => {
            const GetORGAllData = (value) => setUsersData(value)
            ORGAllGet({ GetORGAllData })
    }, [ref,time])


    const OrgDelet=(id)=>{
        TeketDelet(id)
    }



    return (
        <div className='position-relative'>

            <Container className='h-100 mt-4'>

                <div className="evetableheding mb-3">
                    <div className="row g-0 h-100">
                        <div className="col-1 evdetels py-3">Sr.</div>
                        <div className="col-1 evdetels py-3">User ID</div>
                        <div className="col-6 evdetels py-3">Name Of Company</div>
                        <div className="col-1 evdetels py-3">Douments</div>
                        <div className="col-2 evdetels py-3">Create Orgamizer</div>
                        <div className="col-1 evdetels py-3">Delete</div>
                    </div>
                </div>

                <div className="evetableheding mb-3">
                    
                    {
                        usersData &&
                        usersData.map((data, inx) => {
                            return(
                                <div className="row g-0 h-100 mb-3">
                                <div className="col-1 evdetels">{++inx}</div>
                                <div className="col-1 evdetels">{data.user.id}</div>
                                <div className="col-6 fs-3 fw-bold evdetels" >{data.companyName}</div>
                                <div className="col-1 evdetels py-3">
                                    <Link to={`documents/${data.id}`} className='btn bg-info fs-4' style={{ color: '#fff', position: 'relative', zIndex: 999 }}><i class="fa-regular fa-file-image"></i></Link>
                                </div>
                                <div className="col-2 evdetels">
                                    <Switch1 message={data} />
                                </div>
                                <div className="col-1 evdetels py-3">
                                    <button className='btn bg-danger fs-4' onClick={OrgDelet(data.id)} style={{ color: '#fff', position: 'relative', zIndex: 999 }}><i class="fa-regular fa-trash-can"></i></button>
                                </div>
                            </div>
                            )
                        })
                    }
                </div>


                {/* <div className="evetabledata">
    {
        props.allusers &&
        props.allusers.map((data, inx) => {
            return(
            <div className="row g-0 mt-3 position-relative">
                <div className="col-1 evdetels">{inx+1}</div>
                <div className="col-4 evdetels">{data.email}</div>
                <div className="col-4 evdetels">{data.phone}</div>
                <div className="col-1 evdetels">

                </div>
                <div className="col-1 py-3 evdetels">
                    <button className='btn bg-danger fs-4' style={{ color: '#fff', position: 'relative', zIndex: 999 }}><i class="fa-regular fa-trash-can"></i></button>
                </div>
                <Link to={`/super-admin-dashbord/user-edit/${data.id}`} className="col-11 h-100 position-absolute" style={{cursor: 'pointer'}}></Link>
            </div>
            )
        })
    }
    {nPage > 1 && <PaginationButton message={nPage} onChangePage={handlePageChange} />}
</div> */}


            </Container>

            <Outlet/>
        </div>
    )
}

export default CreateOrgamisers