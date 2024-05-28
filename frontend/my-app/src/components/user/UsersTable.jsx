import React from 'react'
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const UsersTable = (props) => {

    console.log(props.allusers)

    // const {}

    return (
        <Container className='h-100'>

            <div className="evetableheding">
                <div className="row g-0 h-100">
                    <div className="col-1 evdetels">Sr.</div>
                    <div className="col-2 evdetels">First Name</div>
                    <div className="col-2 evdetels">Last Name</div>
                    <div className="col-3 evdetels">Email</div>
                    <div className="col-3 evdetels">Contact NO.</div>
                    <div className="col-1 evdetels">Delete</div>
                </div>
            </div>

            <div className="evetabledata">
                {
                    props.allusers &&
                    props.allusers.map((data, inx) => {
                        return(
                        <div className="row g-0 mt-3 position-relative">
                            <div className="col-1 evdetels">{inx+1}</div>
                            <div className="col-2 evdetels">{data.first_name}</div>
                            <div className="col-2 evdetels">{data.last_name}</div>
                            <div className="col-3 evdetels">{data.email}</div>
                            <div className="col-3 evdetels">{data.phone}</div>
                            <div className="col-1 py-3 evdetels">
                                <button className='btn bg-danger fs-4' style={{ color: '#fff', position: 'relative', zIndex: 999 }}><i class="fa-regular fa-trash-can"></i></button>
                            </div>
                            <Link to={`/super-admin-dashbord/user-edit/${data.id}`} className="col-11 h-100 position-absolute" style={{cursor: 'pointer'}}></Link>
                        </div>
                        )
                    })
                }
                {/* {nPage > 1 && <PaginationButton message={nPage} onChangePage={handlePageChange} />} */}
            </div>
        </Container>
    )
}

export default UsersTable
