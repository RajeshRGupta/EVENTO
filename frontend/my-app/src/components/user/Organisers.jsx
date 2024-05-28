import React, { useEffect, useState } from 'react'
import UsersGet from '../../axios/UsersGet'
import UsersTable from './UsersTable'

const Organisers = () => {
  const [usersData, setUsersData] = useState([])

  useEffect(() => {
    const GetUsersData = (value) => setUsersData(value.filter((data) => data.is_staff === true && data.is_superuser === false).map((data1) => data1))
    UsersGet({ GetUsersData })
  }, [])
  // console.log('userdata :- ',usersData)
  return (
    <div className='h-100'>
      <UsersTable allusers={usersData} />
    </div>
  )
}

export default Organisers
