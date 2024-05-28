import React, { useState } from 'react'
import { Row, Col, Container } from 'react-bootstrap';
import './Navbar.css'
import { Link } from 'react-router-dom';
import { Location } from 'react-router-dom';
import NavLovation from './NavLovation';
import Logo2 from '../midia/logo/logo2.png'




const Navbar = (...props) => {

    const [showNav, setshowNav] = useState(false)

    const locNav = () => {
        setshowNav(!showNav)
        console.log('abc')
    }
    return (
        <>
            <nav className="w-100">

                <div className="row g-2">

                    <div className="col-2 text-center logo2">
                        <Link to='evento' >
                            <img src={Logo2} alt="" />
                        </Link>
                    </div>

                    <div className="col d-flex justify-content-center text-center">

                    </div>

                    <div className="col-1 d-flex justify-content-center">

                        <div className="nav-btns">
                            <Link to='category/free-events' >
                                <div className="nav-btn">
                                    Free Events
                                </div>
                            </Link>
                        </div>

                    </div>

                    <div className="col-1 d-flex justify-content-center">
                        <div className="nav-btns">
                            <Link to='category/events' >
                                <div className="nav-btn px-4">
                                    Events
                                </div>
                            </Link>

                        </div>

                    </div>

                    

                    <div className="col-1 d-flex justify-content-center">
                        <div className="nav-btns">
                            <div className="nav-btn" onClick={locNav} style={{ cursor: 'pointer' }}>
                                <ion-icon class="loc-icon" name="location-outline"></ion-icon>
                                Location
                                <i className="fa-solid fa-chevron-down arr-icon"></i>
                            </div>
                        </div>
                    </div>

                    {/* <div className="col-1 d-flex justify-content-end pe-3">
                        <div className="nav-btns ">

                            <Link to='cart'>
                            <div className="nav-btn circle "  >
                                <i class="fa-solid fa-cart-shopping"></i>
                            </div>
                            </Link>
                        </div>
                    </div> */}

                    <div className="col-1 d-flex justify-content-center">
                        <div className="nav-btns ">

                            <Link to='User-dashbord-all/Tekets'>
                            <div className="nav-btn circle "  >
                                <i className="fa-regular fa-user user-icon"></i>
                            </div>
                            </Link>
                        </div>
                    </div>
                </div>


                {showNav && <NavLovation />}
            </nav>
        </>
    )
}

export default Navbar
