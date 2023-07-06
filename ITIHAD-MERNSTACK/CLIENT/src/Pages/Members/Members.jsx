import React, { useContext } from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { merbersContext } from '../../App'
import Banner from '../../Components/Banner/Banner'
import Member from '../../Components/Member/Member'
import Message from '../../Components/Message/Message'
import Spinner from '../../Components/Spinner/Spinner'
import "./Members.css"

function Members() {
  const [loading, setLoading] = useState(true)
  const [message, setMessage] = useState("")
  const [members, setMembers] = useContext(merbersContext)
  useEffect(() => {
    const membersData = async () => {
      try {
        const res = await fetch("https://itihad.onrender.com/api/users")
        const data = await res.json()
        setLoading(false)
        const reversMember =await data.users.slice().reverse()
        setMembers(reversMember)
      } catch (error) {
        setMessage("network problem")
      }

    }
    membersData()
  }, [])

  // delele user handler 

  const handleDeleteUser = async (id) => {
    const res = await fetch(`https://itihad.onrender.com/api/delete-user/${id}`, {
      method: "delete"
    })
    const data = await res.json()
    setMessage(data.message)

  }

  if (loading) {
    return <Spinner />
  }
  return (
    <>
    <Banner
       title  = "list of members"
       className = "membar_banner"
    />
      <div className="container">
        {message && 
           <Message message={message}/>
        }
        <div className='membersContainer'>
          <div className="row">
            {
              members.map(member => <Member
                member={member}
                handleDeleteUser={handleDeleteUser}
                key={member._id} />)
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default Members