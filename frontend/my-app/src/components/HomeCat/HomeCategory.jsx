import React from 'react'
import './Category.css'
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import TheaterComedyOutlinedIcon from '@mui/icons-material/TheaterComedyOutlined';
import HealthAndSafetyOutlinedIcon from '@mui/icons-material/HealthAndSafetyOutlined';
import SportsEsportsOutlinedIcon from '@mui/icons-material/SportsEsportsOutlined';
import ChildCareOutlinedIcon from '@mui/icons-material/ChildCareOutlined';
import MusicNoteOutlinedIcon from '@mui/icons-material/MusicNoteOutlined';
import TheatersOutlinedIcon from '@mui/icons-material/TheatersOutlined';

const HomeCategory = () => {
    return (
        <>
            <div className="container my-5">
                <div className="cat-top">
                    <div className="cat-left">
                        <ion-icon name="grid-outline"></ion-icon>
                    </div>
                    <div className="cat-right">
                        BROWSE EVENTS BY GENRE
                    </div>
                </div>
                <div className="container-md px-5 mt-4">
                    <div className="row g-5">
                        <div className="col">
                            <div class="card border-0">
                                <div className="cat-card-box">
                                    {/* <img src={require('../images/work.png')} alt="" /> */}
                                </div>
                                <div class="card-body p-0 pt-2 text-center">
                                    <h5 class="card-title">Card title</h5>
                                    <p class="card-text fs-6">Some quick</p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div class="card border-0">
                                <div className="cat-card-box">
                                <SchoolOutlinedIcon className='cat-icon'/>
                                </div>
                                <div class="card-body p-0 pt-2 text-center">
                                    <h5 class="card-title">Card title</h5>
                                    <p class="card-text fs-6">Some quick</p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div class="card border-0">
                                <div className="cat-card-box">
                                <TheatersOutlinedIcon className='cat-icon'/>
                                </div>
                                <div class="card-body p-0 pt-2 text-center">
                                    <h5 class="card-title">Card title</h5>
                                    <p class="card-text fs-6">Some quick</p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div class="card border-0">
                                <div className="cat-card-box">
                                    <HealthAndSafetyOutlinedIcon className='cat-icon'/>  
                                </div>
                                <div class="card-body p-0 pt-2 text-center">
                                    <h5 class="card-title">Card title</h5>
                                    <p class="card-text fs-6">Some quick</p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div class="card border-0">
                                <div className="cat-card-box">
                                    <SportsEsportsOutlinedIcon className='cat-icon'/>  
                                </div>
                                <div class="card-body p-0 pt-2 text-center">
                                    <h5 class="card-title">Card title</h5>
                                    <p class="card-text fs-6">Some quick</p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div class="card border-0">
                                <div className="cat-card-box">
                                    <ChildCareOutlinedIcon className='cat-icon'/>
                                </div>
                                <div class="card-body p-0 pt-2 text-center">
                                    <h5 class="card-title">Card title</h5>
                                    <p class="card-text fs-6">Some quick</p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div class="card border-0">
                                <div className="cat-card-box">
                                    <MusicNoteOutlinedIcon className='cat-icon'/>
                                </div>
                                <div class="card-body p-0 pt-2 text-center">
                                    <h5 class="card-title">Card title</h5>
                                    <p class="card-text fs-6">Some quick</p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div class="card border-0">
                                <div className="cat-card-box">
                                <TheaterComedyOutlinedIcon className='cat-icon'/>
                                </div>
                                <div class="card-body p-0 pt-2 text-center">
                                    <h5 class="card-title">Card title</h5>
                                    <p class="card-text fs-6">Some quick</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default HomeCategory
