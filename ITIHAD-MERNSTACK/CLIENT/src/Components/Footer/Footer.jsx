import React from 'react'
import logo from "../../image/logo.png"
import { FaLocationArrow } from 'react-icons/fa'
import { AiOutlineCode, AiOutlineMail } from 'react-icons/ai'
import video from '../../video/manush.mp4'
import poster from "../../image/membar.PNG"
import "./Footer.css"
import { Link } from 'react-router-dom'
function Footer() {
    return (
        <div className='footerConatiner'>
            <div className="container">
                <div className="row">
                    <div className="col-md-4 footerCol">
                        <h3>Address</h3>
                        <div className="footerLogo">
                           <Link to="/">
                           <img src={logo} alt="" />
                           </Link>
                        </div>
                        <h5>Social Development Organization</h5>
                        <p><FaLocationArrow className='fIcons' /> Aditmary , Lalmonirhat</p>
                        <p><AiOutlineCode className='fIcons' /> Post Code : 5510</p>
                        <p><AiOutlineMail className='fIcons' /> Email: etihaddonation@gmail.com</p>
                    </div>

                    <div className="col-md-4 footerCol">
                        <h3>Documentary</h3>
                        <video className='w-100 mt-4' src={video} poster={poster} controls></video>
                    </div>
                    <div className="col-md-4 footerCol">
                        <h3>Contact</h3>
                        <table className='footerTble'>
                            <thead>
                                <tr>
                                    <th>NAME</th>
                                    <th>PHONE</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th>ABDUR RAHIM (ABR)</th>
                                    <th>01321040273</th>
                                </tr>
                                <tr>
                                    <th>AF RABIUL AUWAL</th>
                                    <th>01750483685</th>
                                </tr>
                                <tr>
                                    <th>SHAHIN ZAMAN</th>
                                    <th>01312120806</th>
                                </tr>
                                <tr>
                                    <th>MOSTAFIZUR RAHMAN</th>
                                    <th>01722091130</th>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            <div className="copyrighyInfo">
                 <p>Developed by <a rel="noreferrer" href="https://web.facebook.com/Aabdurrahim.17" target="_blank">Abdur Rahim</a></p>
                 <p>Date- 27-06-2023</p>
            </div>
            </div>
        </div>
    )
}

export default Footer