import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import UsersGet from '../../axios/UsersGet'

const UserEdit = () => {

  const {desh1}=useParams()
  const [userData, setUsersData] = useState([])


  useEffect(()=>{
    const GetUsersData = (value) => setUsersData(value.filter((data) => data.id === Number(desh1)).map((data1) => data1))
    UsersGet({ GetUsersData })
  },[])

  console.log('user-data',desh1,userData)




  return (
    <div>
      <h1>user Edit</h1>
    </div>
  )
}

export default UserEdit
