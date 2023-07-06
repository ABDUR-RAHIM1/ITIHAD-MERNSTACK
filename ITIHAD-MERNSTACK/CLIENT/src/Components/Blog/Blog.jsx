import React, { useContext,useState } from 'react'
import { Link } from 'react-router-dom'
import { AiFillDelete } from "react-icons/ai"
import { TiEdit } from "react-icons/ti"
import { adminLoginContext } from '../../App'
import "./Blog.css"
import BlogUpdate from '../UpdateForm/blogUpdate'  
function Blog(props) {
  const [show, setShow] = useState(false)
  const [loading , setLoading] = useState(false)
  const [message , setMessage] = useState("")
  const [imgLoading, setImgLoading] = useState(false)
  const [adminLogin] = useContext(adminLoginContext) 
  const { title, desc, image, _id } = props.blog
  const [updateBlog , setUpdateBlog] = useState({
    title,
    desc,
    image
  })
  
  
const handleChange = (e)=>{
  setUpdateBlog({...updateBlog, [e.target.name]:e.target.value})
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
  setUpdateBlog((preUser) => ({
      ...preUser,
      image: imageUrl
  }))
}
const handleEditBlog = (e, id)=>{
  e.preventDefault()
  setLoading(true)
  fetch(`https://itihad.onrender.com/api/blog/blog/${id}`, {
    method : "PUT",
    headers : {
      "Content-Type" :"application/json"
    },
    body : JSON.stringify(updateBlog)
  }).then(res => res.json())
  .then(data => {
    setMessage(data.message)
    setLoading(false)
    setTimeout(() => {
       setMessage("")
       setShow(false)
    }, 3000);
  })
}

  return (
    <div className='blog'>
      <div className="blog_img">
        <img src={image} alt="" />
        {
          adminLogin === "admin" || adminLogin === "modarator" ?
          <div className="btnIconsWrapper">
            <AiFillDelete onClick={() => props.handleDeleteBlog(_id)} className='blogIcons' />
            <TiEdit onClick={()=>setShow(!show)} className='blogIcons' />
          </div> : null
        }
      </div>
      <div className="blog_desc">
        <h5>{title}</h5>
        <p>{desc.slice(0, 150) + " . . ."}</p>
        <Link to={`/blog-details/${_id}`}>
          <button disabled={desc.length < 150}
            className='btn btn-sm btn-outline-primary'>
            Read More
          </button>
        </Link>
      </div>
    { show && <BlogUpdate
     
     handleChange={handleChange}
     handleEditBlog={handleEditBlog}
     handleFileChange={handleFileChange}
     imgLoading={imgLoading}
     message={message}
     loading= {loading}
     blog={props.blog}
    />}
    </div>
  )
}

export default Blog