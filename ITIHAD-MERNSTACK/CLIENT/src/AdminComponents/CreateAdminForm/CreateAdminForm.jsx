import React from 'react'
import { useState } from 'react'
import { useContext } from 'react'
import {BsFillImageFill} from 'react-icons/bs'
import { adminLoginContext, userLoginContext } from '../../App'
import Loading from '../../Components/Loading/Loading'
import "./CreatAdminForm.css"
function CreateAdminForm() {
  const [adminLogin] = useContext(adminLoginContext) 
  const [loading , setLoading] = useState(false)
  const [imgLoading, setImgLoading] = useState(false)
  const [message, setMessage] = useState("")
  const [user, setUser] = useContext(userLoginContext) /// export from app

  const handleRegisterChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value })
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
    setUser((preUser) => ({
      ...preUser,
      image: imageUrl
    })) 
  }

  const handleAdminCreateSubmit = (e) => {
    setLoading(true)
    e.preventDefault()

       if (user.image) {
        fetch("https://itihad.onrender.com/api/admin/modaretor-create", {
          method: "POST",
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
          body: JSON.stringify(user)
        }).then(res => res.json())
          .then(data => {
            setMessage(data.message)
            setUser((preUser) => ({
              ...preUser,
              image: ""
            })) 
            setLoading(false)
          })
       }else{
         setMessage("Image Uploaded Or Wait a Second")
       }
  }
  return (
    <>
      <div className="adminFormWrapper">

        <h3 className='text-light my-3'>
        {adminLogin !== "admin"? "Only for admin" : " Create a Modaretor"}
        </h3>
        <div className="registerForm">
          <form onSubmit={handleAdminCreateSubmit}>
            <input onChange={handleRegisterChange} className='form-control formInput mt-2'  type="text" name='name' placeholder='Name' required />
            <input onChange={handleRegisterChange} className='form-control formInput mt-2'  type="email" name='email' placeholder='Email' required />
            <input onChange={handleRegisterChange} className='form-control formInput mt-2' type="number" name='phone' placeholder='Phone' required />
            <input onChange={handleRegisterChange} className='form-control formInput mt-2' type="text" name='profession' placeholder='profession' required />
            <input onChange={handleRegisterChange} className='form-control formInput mt-2' type="text" name='roll' placeholder='sub admin /modarator' required />
            <input onChange={handleRegisterChange} className='form-control formInput mt-2'  type="password" name='password' placeholder='Password' required />
            <input onChange={handleFileChange} className='d-none' type="file" id='file' name='image' required />
     
            <div className="formLable mt-3">
                        <label htmlFor="file"><BsFillImageFill className='fileIcon text-light' /></label>
                        {imgLoading ?
                            <>  <div style={{ margin: "10px" }} className="spinner-border text-light" role="status"> </div>
                                <span className='text-light'>image uploading . . .</span>
                            </>
                                : <h6 className='text-light'>uploaded Image</h6>
                        }
                    </div>
            <input disabled={adminLogin !== "admin"} className='form-control my-3 fw-bold bg-success text-light ' type="submit" value="CREATE ADMIN" />
          </form>
        </div>
          {message.includes("Successfully") ?
           <h6 className='text-center my-2 text-light'>{message}</h6> 
          :
          <h6 className='text-center my-2 text-warning'>{message}</h6>
          }
          {loading && <Loading/>}
      </div>
    </>
  )
}

export default CreateAdminForm