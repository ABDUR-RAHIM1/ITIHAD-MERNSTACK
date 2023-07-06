import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import Message from '../../Components/Message/Message'
import Spinner from '../../Components/Spinner/Spinner'
import Admin from '../Admin/Admin'
import "./Admins.css"
function Admins() {
  const [loading , setLoading] = useState(true)
  const [message , setMessage] = useState("")
  const [admin, setAdmin] = useState([])
  useEffect(() => {
    fetch("https://itihad.onrender.com/api/admin/admins")
      .then(res => res.json())
      .then(data => {
        setAdmin(data.admin)
        setLoading(false)
      })
  }, [])

  const handleAdminDelete = (id) => {
    fetch(`https://itihad.onrender.com/api/admin/admin-delete/${id}`, {
      method: "DELETE"
    }).then(res => res.json())
      .then(data => setMessage(data.message))
  } 
  if (loading) {
     return <Spinner/>
  }
  return (
    <>
     { message &&  
      <Message message={message}/>
     }

      <div className='adminContainer row'>
        {
          admin.map(admin => <Admin
            key={admin._id}
            admin={admin}
            handleAdminDelete={handleAdminDelete}
          />)
        }
      </div>
    </>
  )
}

export default Admins