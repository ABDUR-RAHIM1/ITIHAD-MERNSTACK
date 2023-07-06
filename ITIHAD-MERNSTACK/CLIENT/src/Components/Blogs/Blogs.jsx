import React, { useContext } from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { blogContext } from '../../App'
import Banner from '../Banner/Banner'
import Blog from '../Blog/Blog' 
import Message from '../Message/Message'
import Spinner from '../Spinner/Spinner'
import './Blogs.css'
function Blogs() {
  const [message , setMessage] = useState("")
  const [loading , setLoading] = useState(true)
  const [blogs, setBlogs] = useContext(blogContext) 

  useEffect(()=>{
     fetch("https://itihad.onrender.com/api/blog/blogs")
     .then(res => res.json())
     .then(blog => {
      const reverseBlog = blog.blog.slice().reverse();
      setBlogs(reverseBlog)
      setLoading(false)
     });
  } ,[])

// delete blog 
const handleDeleteBlog = (id)=>{
   fetch(`https://itihad.onrender.com/api/blog/blogs/${id}`,{
     method :"DELETE",
   }).then(res => res.json())
   .then(data => setMessage(data.message))
   .catch((error) => setMessage(`Error:", ${error}`));
}
  if (loading) {
     return <Spinner/>
  }
  return (
    <>
          <Banner
       title  = "Reads Our blogs"
       className = "membar_banner blog_banner"
    />
    <div className='blogs_container'>
  
 {  message && 
    
   <Message message={message}/>
 }
        {
          blogs.map(blog => <Blog
            key={blog._id}
             blog={blog}
             handleDeleteBlog ={handleDeleteBlog}
             />
              )
        }
    </div>
    </>
  )
}

export default Blogs