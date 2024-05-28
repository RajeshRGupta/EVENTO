import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import LocationGet from '../../axios/LocationGet'

const NavLovation = () => {
  const [loc,setLoc]=useState([])

  useEffect(()=>{
    const locationsGet=(value)=>setLoc(value)
    LocationGet({locationsGet})
  },[])
  return (
    <div>
      <div className="loc-modal">
            <ul>

              {loc&&
              loc.map((data,inx)=>{
                return(
                <li><Link to={`category/${data.id}`} style={{color:'black',textDecoration:'none'}} > {(data.Location[0].toUpperCase())+(data.Location.slice(1))}</Link></li>
                )
              })

              }
              
                {/* <li><Link to='category/mumbai' style={{color:'black',textDecoration:'none'}} > Mumbai</Link></li>
                <li><Link to='category/kolkata' style={{color:'black',textDecoration:'none'}} > Kolkata</Link></li>
                <li><Link to='category/delhi' style={{color:'black',textDecoration:'none'}} > Delhi</Link></li>
                <li><Link to='category/hyderabad' style={{color:'black',textDecoration:'none'}} > Hyderabad</Link></li>
                <li><Link to='category/chennai' style={{color:'black',textDecoration:'none'}} > Chennai</Link></li>
                <li><Link to='category/bangalore' style={{color:'black',textDecoration:'none'}} > Bangalore</Link></li> */}
            </ul>
        </div>
    </div>
  )
}

export default NavLovation
