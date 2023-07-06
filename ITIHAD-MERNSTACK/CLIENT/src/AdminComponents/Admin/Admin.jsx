import React, { useState, useContext } from 'react'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { AiFillDelete, AiFillEdit } from "react-icons/ai"
import { BsFillImageFill } from "react-icons/bs"
import { adminLoginContext, adminMessageContext } from '../../App';
import Loading from '../../Components/Loading/Loading';
import demoImg from '../../image/demo.jpg'
import "./Admin.css"
function Admin(props) { 
    const [show, setShow] = useState(false)
    const [loading ,setLoading] = useState(false)
    const [message, setMessage] = useState("")
    const [imgLoading, setImgLoading] = useState(false) 
    const [adminLogin] = useContext(adminLoginContext) 
    const { name, email, phone, image, roll, profession, _id } = props.admin
    const [updateAdmin, setUpdateAdmin] = useState({
        name,
        email,
        phone,
        image,
        roll, 
        profession,
    })

    const handleRegisterChange = (e) => {
        setUpdateAdmin({ ...updateAdmin, [e.target.name]: e.target.value })
    }

    const handleFileChange = async (e) => {
        setImgLoading(true)
        const file = e.target.files[0];
        const formData = new FormData()
        formData.append("file", file)
        formData.append("upload_preset", "shopUp")
        formData.append("cloud_name", "dhivoejt4")
        const res = await fetch("https://api.cloudinary.com/v1_1/dhivoejt4/image/upload", {
            method: "POST",
            body: formData
        });

        const data = await res.json()
        setImgLoading(false)
        const imageUrl = data.secure_url
        setUpdateAdmin((preUser) => ({
            ...preUser,
            image: imageUrl
        }))
    }

 
    const handleAdminUpdate = (e ,id) => {
    e.preventDefault() 
    setLoading(true)
    fetch(`https://itihad.onrender.com/api/admin/admin-update/${id}`, {
        method : "PUT",
        headers : {
            "Content-Type" :"application/json"
        },
        body : JSON.stringify(updateAdmin)
    }).then(res => res.json())
    .then(data => {
        setMessage(data.message)
        setLoading(false)
        setTimeout(() => {
            setShow(false)
            setMessage("")
        }, 1500);
    })
    }
    return (
        <div className='adminCard col-lg-4 col-md-6 col-sm-6'>
            <Card>
                <Card.Img variant="top" src={image || demoImg} />
                <Card.Body>
                    <Card.Title className='text-lowercase'>Name : {name}</Card.Title>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroup.Item>Profession : {profession}</ListGroup.Item>
                    <ListGroup.Item className='fw-bold text-primary'>Role : {roll}</ListGroup.Item>
                    <ListGroup.Item>Phone : {"0" + phone}</ListGroup.Item>
                    <ListGroup.Item>E-mail: {email}</ListGroup.Item>
                </ListGroup>
                {adminLogin === "admin" && <Card.Body className='cardBody'>
                    <AiFillDelete onClick={() => props.handleAdminDelete(_id)} className="cardIcons" />
                    <AiFillEdit onClick={() => setShow(!show)} className="cardIcons" />
                </Card.Body>}
             
            </Card>


            {show && <div className="updateAdminForm">
                <form onSubmit={(e)=>handleAdminUpdate(e, _id)}>
                    <input onChange={handleRegisterChange} className='form-control formInput mt-2' type="text" name='name' value={updateAdmin.name} placeholder='Name'   />
                    <input onChange={handleRegisterChange} className='form-control formInput mt-2' type="email" name='email'value={updateAdmin.email} placeholder='Email'   />
                    <input onChange={handleRegisterChange} className='form-control formInput mt-2' type="number" name='phone'value={updateAdmin.phone} placeholder='Phone'   />
                    <input onChange={handleRegisterChange} className='form-control formInput mt-2' type="text" name='profession'value={updateAdmin.profession} placeholder='profession'   />
                    {
                    adminLogin === "admin" &&      
                    <input onChange={handleRegisterChange} className='form-control formInput mt-2' type="text" name='roll' value={updateAdmin.roll} placeholder='sub admin /modarator'   />
                    }
                    <input onChange={handleRegisterChange} className='form-control formInput mt-2' type="password" name='password' value={updateAdmin.password} placeholder='Password'   />
                    <input onChange={handleFileChange} className='d-none' type="file" id='file' name='image' />
                    <div className="formLable mt-3">
                        <label htmlFor="file"><BsFillImageFill className='fileIcon text-light' /></label>
                        {imgLoading ?
                            <>  <div style={{ margin: "10px" }} className="spinner-border text-light" role="status"> </div>
                                <span className='text-light'>image uploading . . .</span>
                            </>
                            : <h6 className='text-light'>Update Image</h6>
                        }
                    </div>
                 { message &&  <h6 className='text-center text-light my-4'>{message}</h6>}
                 {
                     loading && <Loading/>
                 }
                    <div className="btnWrapper">
                        <button className='btn btn-sm btn-success mt-2'>Update</button>
                        <button onClick={()=>setShow(false)} className='btn btn-sm btn-warning mt-2'>closed</button>
                    </div>
                </form>
            </div>}

        </div>
    )
}

export default Admin