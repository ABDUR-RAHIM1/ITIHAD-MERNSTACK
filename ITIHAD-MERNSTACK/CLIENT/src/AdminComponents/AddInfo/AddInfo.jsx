import React, { Component } from 'react'
import { useState } from 'react'
import AddBlogs from '../AddBlogs/AddBlogs'
import CreateAdminForm from '../CreateAdminForm/CreateAdminForm'
import AddDonation from "../AddDonation/AddDonation"
import './AddInfo.css'
function AddInfo() {
    const [component, setComponent] = useState(<CreateAdminForm />)

    const handlePostForm = (e) => {
        if (e.target.innerText === "Create Admin") {
            setComponent(<CreateAdminForm />)
        } else if (e.target.innerText === "Blog Post") {
            setComponent(<AddBlogs />)
        } else if (e.target.innerText === "Add Donation") {
            setComponent(<AddDonation />)
        }
    }
    
    return (
        <div className='container'>
            <div className="addBtnWrapper">
                <button onClick={handlePostForm} className='btn btn-success fw-bold btn-sm m-2'>Create Admin</button>
                <button onClick={handlePostForm} className='btn btn-success fw-bold btn-sm m-2'>Blog Post</button>
                <button onClick={handlePostForm} className='btn btn-success fw-bold btn-sm m-2'> Add Donation </button>
            </div>
            <div className="addComponent">
                {component}
            </div>
        </div>
    )
}

export default AddInfo