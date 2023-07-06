import React from 'react'
import { useState } from 'react'
import { useContext } from 'react'
import { BsFillImageFill } from "react-icons/bs"
import { json } from 'react-router-dom'
import { blogDonationContext } from '../../App'
import Loading from '../../Components/Loading/Loading' 
import "./AddBlogs.css"
function AddBlogs() {
    const [message, setMessage] = useState("")
    const [loading, setLoading] = useState(false)
    const [imgLoading, setImgLoading] = useState(false)
    const [blogDonation, setBlogDonation] = useContext(blogDonationContext)
    // handle blog change
    const handleBlogChange = (e) => {
        setBlogDonation({ ...blogDonation, [e.target.name]: e.target.value })
    }
    // handle Blog image
    const handleBlogImage = async (e) => {
        setImgLoading(true)
        const file = e.target.files[0]
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
        setBlogDonation((preDonation) => ({
            ...preDonation,
            image: data.secure_url
        }))
    }
    // handle bolg submit 
    const handleBlogSubmit = (e) => {
        e.preventDefault()
        setLoading(true)
        fetch("https://itihad.onrender.com/api/blog/blogs", {
            method: "POST",
            headers: {
                'Content-type': "application/json",
            },
            body: JSON.stringify(blogDonation)
        }).then(res => res.json())
            .then(data => {
                setMessage(data.message)
                setLoading(false)
            })
    }
    return (
        <div className='add_blog'>
            <h2 className='text-center my-3 text-uppercase'>Add Blog</h2>
            <form onSubmit={handleBlogSubmit}>
                <div className="form-group">
                    <input onChange={handleBlogChange} className="form-control" name="title" placeholder='Title' required />
                </div>
                <div className="form-group">
                    <textarea onChange={handleBlogChange} className="form-control my-3" name='desc' rows="5" placeholder='Write Description' required></textarea>
                </div>
                <div className="form-group">
                    <div className="formLable">
                        <label htmlFor="file"><BsFillImageFill className='fileIcon' /></label>
                        {imgLoading ?
                            <>  <div style={{ margin: "10px" }} className="spinner-border" role="status"> </div>
                                <span>image uploading . . .</span>
                            </>
                            : <h6 className='text-light'>uploaded Image</h6>
                        }
                    </div>
                    <input onChange={handleBlogImage} required type="file" id='file' className='d-none' required/>
                </div>
                <button className='btn btn-light my-3 w-100'>Post Now</button>
            </form>
    { loading && <Loading/>}
        {  message.includes("successfully") ?  <h6 className='text-light text-center'>{message}</h6>
    :
    <h6 className='text-warning text-center'>{message}</h6>    
    }

        </div>
    )
}

export default AddBlogs