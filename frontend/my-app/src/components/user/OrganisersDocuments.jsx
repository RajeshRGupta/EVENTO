import React, { useContext, useEffect, useState,useRef } from 'react'
import { useParams } from 'react-router-dom'
import ORGAllGet from '../../axios/ORGAllGet'
import NoteContext from '../../context/NotContext'
import { toPng } from 'html-to-image';
import download from 'downloadjs';

const OrganisersDocuments = () => {
    const [usersData, setUsersData] = useState([])

    const context=useContext(NoteContext)

    const {id1}=useParams()

    const imageRefs = [useRef(), useRef(), useRef()];


    const [time, setTime] = useState(new Date());
    useEffect(() => {
        const intervalId = setInterval(() => {
          // Update time every second
          setTime(new Date());
        }, 500);
        return () => clearInterval(intervalId);
      }, [])

    const ref=context.popORG
    useEffect(() => {
            // const GetORGAllData = (value) => setUsersData(value.filter((data)=>data.id===id1))
            const GetORGAllData = (value) => setUsersData(value.filter((data)=>data.id===Number(id1))[0])
            ORGAllGet({ GetORGAllData })
    }, [ref])



    const handleDownload = async (ref, filename) => {
        try {
          const dataUrl = await toPng(ref.current); // Convert to PNG
          download(dataUrl, filename); // Download the image
        } catch (error) {
          console.error('Error converting to image:', error);
        }
      };
    





    console.log(usersData)
    return (
        <div className='position-absolute ORGDocuments' >

            <h1 className='text-center '>Documents</h1>
            <div className="maindoc">
                <div className="companyTitle d-flex  ms-4"><h3>Company Name :-</h3><h3 className='ms-4'>{usersData.companyName}</h3></div>
                <div className="row">
                    <div className="col-6 p-5">
                        <h3 >Document1</h3>
                        <div class="card border">
                            <div className="img rounded" style={{height:'400px',overflow:'hidden'}}>
                                <img ref={imageRefs[0]} src={usersData.image1} alt="" />
                            </div>
                                <div className="card-body  text-end">
                                    <a href="#" class="btn btn-primary"  onClick={() => handleDownload(imageRefs[0], 'image1.png')}>Download</a>
                                </div>
                        </div>
                    </div>

                    <div className="col-6 p-5">
                        <h3>Document2</h3>
                        <div class="card border">
                            <div className="img rounded" style={{height:'400px',overflow:'hidden'}}>
                            <img ref={imageRefs[1]} src={usersData.image2} alt="" />

                            </div>
                                <div className="card-body  text-end">
                                    <a href="#" class="btn btn-primary"  onClick={() => handleDownload(imageRefs[1], 'image2.png')}>Download</a>
                                </div>
                        </div>
                    </div>

                    <div className="col-6 p-5">
                        <h3>Document3</h3>
                        <div class="card border">
                            <div className="img rounded" style={{height:'400px',overflow:'hidden'}}>
                            <img ref={imageRefs[2]} src={usersData.image3} alt="" />

                            </div>
                                <div className="card-body  text-end">
                                    <a href="#" class="btn btn-primary"  onClick={() => handleDownload(imageRefs[2], 'image3.png')}>Download</a>
                                </div>
                        </div>
                    </div>

                    <div className="col-6 p-5">
                        <h3>Document4</h3>
                        <div class="card border">
                            <div className="img rounded" style={{height:'400px',overflow:'hidden'}}>
                            <img ref={imageRefs[3]} src={usersData.image4} alt="" />

                            </div>
                                <div className="card-body  text-end">
                                    <a href="#" class="btn btn-primary"  onClick={() => handleDownload(imageRefs[3], 'image4.png')}>Download</a>
                                </div>
                        </div>
                    </div>


                </div>
            </div>

        </div>
    )
}

export default OrganisersDocuments