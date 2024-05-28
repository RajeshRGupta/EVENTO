import React, { useContext, useEffect } from 'react'
import OutSlider from '../../Slider/OutSlider'
import NoteContext from '../../../context/NotContext'
import mumbai from '../../midia/city/gate-of-india.png'
import kolkata from '../../midia/city/city.png'
import delhi from '../../midia/city/india-gate.png'
import hyderabad from '../../midia/city/hyderabad-charminar.png'
import chennai from '../../midia/city/noun-chennai-3925168 (1).png'
import bangalore from '../../midia/city/bangalore.png'

import { Link } from 'react-router-dom'

const Home = () => {

  const context = useContext(NoteContext)

  useEffect(() => {
    context.updateShow(true)
  }, [])

  return (
    <div className='contaner p-5'>
      {/* <OutSlider/> */}
      <div className="row p-5 g-5">
        <div className="col-4 px-4">
          <Link to={'/category/1'} class="card p-3" style={{textDecoration:'none'}}>
            {/* <img src="..." class="card-img-top" alt="..."> */}
              <div className="imag d-flex justify-content-center" style={{height:"200px"}}>
                <img src={mumbai} alt="" style={{height:'100%',width:"50%"}} />
              </div>
              <div class="card-body">
                <h4 class="card-text text-center">MUMBAI</h4>
              </div>
          </Link>
        </div>


        <div className="col-4 px-4">
          <Link to={'/category/4'} class="card p-3" style={{textDecoration:'none'}}>
            {/* <img src="..." class="card-img-top" alt="..."> */}
              <div className="imag d-flex justify-content-center" style={{height:"200px"}}>
                <img src={delhi} alt="" style={{height:'100%',width:"50%"}} />
              </div>
              <div class="card-body">
                <h4 class="card-text text-center">DELHI</h4>
              </div>
          </Link>
        </div>

        <div className="col-4 px-4">
          <Link to={'/category/5'} class="card p-3" style={{textDecoration:'none'}}>
            {/* <img src="..." class="card-img-top" alt="..."> */}
              <div className="imag d-flex justify-content-center" style={{height:"200px"}}>
                <img src={kolkata} alt="" style={{height:'100%',width:"50%"}} />
              </div>
              <div class="card-body">
                <h4 class="card-text text-center">KOLKATA</h4>
              </div>
          </Link>
        </div>

        <div className="col-4 px-4">
          <Link to={'/category/6'} class="card p-3" style={{textDecoration:'none'}}>
            {/* <img src="..." class="card-img-top" alt="..."> */}
              <div className="imag d-flex justify-content-center" style={{height:"200px"}}>
                <img src={hyderabad} alt="" style={{height:'100%',width:"50%"}} />
              </div>
              <div class="card-body">
                <h4 class="card-text text-center">HYDERABAD</h4>
              </div>
          </Link>
        </div>

        <div className="col-4 px-4">
          <Link to={'/category/2'} class="card p-3" style={{textDecoration:'none'}}>
            {/* <img src="..." class="card-img-top" alt="..."> */}
              <div className="imag d-flex justify-content-center" style={{height:"200px"}}>
                <img src={chennai} alt="" style={{height:'100%',width:"50%"}} />
              </div>
              <div class="card-body">
                <h4 class="card-text text-center">CHENNAI</h4>
              </div>
          </Link>
        </div>

        <div className="col-4 px-4">
          <Link to={'/category/3'} class="card p-3" style={{textDecoration:'none'}}>
            {/* <img src="..." class="card-img-top" alt="..."> */}
              <div className="imag d-flex justify-content-center" style={{height:"200px"}}>
                <img src={bangalore} alt="" style={{height:'100%',width:"50%"}} />
              </div>
              <div class="card-body">
                <h4 class="card-text text-center">BENGALURU</h4>
              </div>
          </Link>
        </div>


      </div>
    </div>
  )
}

export default Home