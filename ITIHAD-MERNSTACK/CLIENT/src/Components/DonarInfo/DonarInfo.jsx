import React, { useContext, useState } from 'react'
import { userLoginContext } from '../../App'
import Loading from '../Loading/Loading'
import "./DonarInfo.css"
function DonarInfo() {
  const [loading,setLoading] = useState(false)
  const [message, setMessage] = useState('')
  const [donar, setDonar] = useState([])
  const [user, setUser] = useContext(userLoginContext)
  const handleDoantionSearch = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value })
  }
  const handleDonationSearchSubmit = (e) => {
    setLoading(true)
    e.preventDefault()
    fetch("https://itihad.onrender.com/donation/donar", {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(user)
    })
      .then(res => res.json())
      .then(data => {
        setMessage(data.message) 
        setDonar(data.donar)
        setLoading(false)
      })
  }
  let totalDonation = 0;
   if (donar) {
    donar.forEach(element => {
      totalDonation +=  element.amount
});
   }
  return (
    <div className='donarInfo container'>
      <div className="donationText">
        <h2 className='text-center my-3'>View Your Donation Information</h2>
        <p>
          Welcome to the Donor Information Page! Here, you can easily access and view your donation details. Follow the steps below to view your donation information:
        </p>
        <p>
          Click the <strong>"Search"</strong> button:
          By clicking the login button, a modal will appear where you can securely log in using your credentials. If you don't have an account yet, you will have the option to create one.
        </p>
        <p>
          <strong> Access Your Account:</strong>
          Once you've successfully logged in, you'll be granted access to your personalized donor account. Here, you can manage and view your donation history, including the specific details of each contribution.
        </p>
        <p>
          <strong> Explore Your Donation Information:</strong>
          Within your donor account, you will find comprehensive information about your donations. This includes the donation amounts, dates, recipient organizations, and any additional details associated with your contributions.
        </p>
        <p>
          <strong>Please note</strong> that the privacy and security of your information are of utmost importance to us. We have implemented robust measures to ensure the confidentiality and protection of your data.
        </p>
        <p>
          If you have any further questions or encounter any issues while accessing your donation information, please don't hesitate to reach out to our support team. We are here to assist you every step of the way.

          <strong className='text-success'>  Thank you for your generosity and support!</strong>
        </p>
      </div>

      <div className="donationSerch">
        <form onSubmit={handleDonationSearchSubmit}>
          <input required onChange={handleDoantionSearch} className='form-control my-3' type="text" placeholder='your name' name='name' />
          <input required onChange={handleDoantionSearch} className='form-control my-3' type="email" placeholder='your email' name='email' />
          {
          loading ? <Loading/> :   <input  className='form-control my-3 fw-bold' type="submit" value="Search" />
        }
        
        </form>
      
      </div>
      <div className="donarResult">
        {
          donar &&  donar.length > 0 ? 
           <table className='w-100'>
              <thead>
                 <tr>
                   <th>Name</th>
                   <th>email</th>
                   <th>Amount</th>
                   <th>Date</th>
                 </tr>
              </thead>
              {
               donar.map( donar => {
                 return (
                    <tbody key={donar._id}>
                        <tr>
                          <td>{donar.name}</td>
                          <td>{donar.email}</td>
                          <td>{donar.amount} ৳</td>
                          <td className='overflow-auto'>{donar.date.slice(0,10)}</td>
                        </tr>
                    </tbody>
                 )
               })
              }
              <tfoot>
                 <tr>
                   <td colSpan={2}></td>
                   <th>{totalDonation} ৳</th>
                   <th>Total </th>
                 </tr>
              </tfoot>
           </table>
          
          : <h4 className='text-center text-danger '>{message}</h4>
        }
      </div>
    </div>
  )
}

export default DonarInfo