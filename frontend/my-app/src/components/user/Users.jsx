import React, { useEffect, useState } from 'react'
import UsersGet from '../../axios/UsersGet'
import UsersTable from './UsersTable'


const Users = () => {

    const [usersData, setUsersData] = useState([])
    const [time, setTime] = useState(new Date());


    useEffect(() => {
        setTimeout(() => {
            const GetUsersData = (value) => setUsersData(value.filter((data) => data.is_staff === false && data.is_superuser === false).map((data1) => data1))
            UsersGet({ GetUsersData })
            console.log('data')
        }, 1000)
    }, [time])
    // console.log('userdata :- ',usersData)
    return (
        <div className='h-100'>
            <UsersTable allusers={usersData} />
        </div>
    )
}

export default Users
