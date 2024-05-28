import React from 'react'
import './futter.css'

const Futter = () => {
  return (
    <>
      <div className="futter px-5">
        <div className="row g-0">
            <div className="col-4 d-flex align-items-center">
                <ul>
                    <li>Find us on :</li>
                    <li><i class="fa-brands fa-facebook"></i></li>
                    <li><i class="fa-brands fa-instagram"></i></li>
                    <li><i class="fa-brands fa-twitter"></i></li>
                </ul>
            </div>
            <div className="col-5 d-flex justify-content-center align-items-center">
                © 2023 MYTICKET.COM. ALL RIGHTS RESERVED
            </div>
            <div className="col-3 d-flex justify-content-end align-items-center">
                <a href="#">Contact us</a>
            </div>
        </div>
      </div>
    </>
  )
}

export default Futter
