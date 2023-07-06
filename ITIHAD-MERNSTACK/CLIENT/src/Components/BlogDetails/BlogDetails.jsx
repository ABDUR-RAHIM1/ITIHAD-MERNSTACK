import React from 'react'
import { useContext } from 'react'
import {AiFillBackward} from "react-icons/ai"
import { useNavigate, useParams } from 'react-router-dom'
import { blogContext } from '../../App'
import Spinner from '../Spinner/Spinner'
import "./BlogDetails.css"

function BlogDetails() {
    const nevigate = useNavigate()
    const {id} = useParams()
    const [blogs, setBlogs] = useContext(blogContext)
    const blogDetails = blogs.find(blog => blog._id === id)
    if (!blogDetails) {
        return <Spinner/>
    }
  return (
    <div className='blogDetails container'>
          <div className="detailsImg">
          <img src={blogDetails.image} alt="" />
          </div>
          <small className='fw-bold my-3 text-danger border'>Post On : {blogDetails.date.slice(0, 10)}</small>
          <h3>{blogDetails.title}</h3>
          <p>{blogDetails.desc}</p> 
              <AiFillBackward onClick={
                  ()=> {
                    nevigate("/blogs")
                  }
              } className="backArrow"/> 
    </div>
  )
}

export default BlogDetails