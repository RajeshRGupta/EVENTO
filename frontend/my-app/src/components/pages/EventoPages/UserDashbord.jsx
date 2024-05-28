import React from 'react'
import NavTab from '../../NavAndTab.jsx/NavTab'
import { Outlet } from 'react-router-dom'

const UserDashbord = () => {
  return (
    <div className='mt-2' style={{height:'90vh',overflow:"hidden", position:'relative'}}>
      <NavTab/>
      <div className='mb-5' style={{height:'95%',overflow:"scroll",overflowX: 'hidden', scrollbarWidth: 'thin'}}>
        <Outlet/>
      </div>
    </div>
  )
}

export default UserDashbord
