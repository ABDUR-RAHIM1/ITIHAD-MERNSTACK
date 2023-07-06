import React, { useState } from 'react'
import { useContext } from 'react'
import { blogDonationContext } from '../../App'
import Loading from '../../Components/Loading/Loading'
import "./AddDonation.css"
function AddDonation() {
  const [loading , setLoading] = useState(false)
  const [message ,setMessage] = useState("")
  const [blogDonation, setBlogDonation] = useContext(blogDonationContext)
  const handleDonation =(e)=>{
    setBlogDonation({...blogDonation , [e.target.name]:e.target.value})
  }

  // amount submit 
  const handleAmountSubmit =(e)=>{
    setLoading(true)
    e.preventDefault()
    fetch("https://itihad.onrender.com/donation", {
      method: "POST",
      headers :{
        "Content-type" :"application/json"
      },
      body : JSON.stringify(blogDonation)
    }).then(res => res.json())
    .then(data => {
      setMessage(data.message)
      setLoading(false)
    })
  }
  return (
    <div className='adminFormWrapper doantionForm'>
      <h2 className='text-center my-3 text-uppercase'>Add Donation</h2>
      <form onSubmit={handleAmountSubmit}>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email</label>
          <input onChange={handleDonation} name='email' type="email" className="form-control"  placeholder="Enter email" required/>
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Name</label>
          <input onChange={handleDonation} name='name' type="text" className="form-control" placeholder="Name" required/>
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Amount</label>
          <input onChange={handleDonation} name='amount' type="number" className="form-control" placeholder="Amount" required/>
        </div>
        <button type="submit" className="btn btn-primary my-3 w-100">Submit</button>
        
      </form>
      {
        loading && <Loading/>
      }
      {
        message && <h6 className='text-center my-3'>{message}</h6>
      }
    </div>
  )
}

export default AddDonation