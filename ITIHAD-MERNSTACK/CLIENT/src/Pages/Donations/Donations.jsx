import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import Spinner from '../../Components/Spinner/Spinner'
import "./Donations.css"
function Donation() {
  const [loading, setLoading] = useState(true)
  const [donation, setDoantion] = useState([])
  useEffect(() => {
    fetch("https://itihad.onrender.com/donation")
      .then(res => res.json())
      .then(data => {
        const reversDoantion = data.donation.slice().reverse()
        setDoantion(reversDoantion)
        setLoading(false)
      })
      .catch(err => console.log(err))
  }, [])

  if (loading) {
    return <Spinner />
  }
  ///  total ammount count 
let totalAmount = 0
for (let i = 0; i < donation.length; i++) {
  const amount = donation[i].amount;
   totalAmount  += amount
}
  return (
    <div className='doantion'>
      <table className='amount_table'>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Amount</th>
          </tr>
        </thead>
        {
          donation.map(donation => {
            return (
              <tbody key={donation._id}>
                <tr>
                  <td className='fw-bold text-secondary'>{donation.name}</td>
                  <td className='text-primary fw-bold'>{donation.email}</td>
                  <td className='text-danger fw-bold'>{donation.amount} ৳</td>
                </tr>

              </tbody>
            )
          })
        }
        <tfoot>
          <tr>
            <th colSpan={1}></th>
            <th>TOTAL</th>
            <th className='text-success'>{totalAmount} ৳</th>
          </tr>
        </tfoot>
      </table>
    </div>
  )
}

export default Donation