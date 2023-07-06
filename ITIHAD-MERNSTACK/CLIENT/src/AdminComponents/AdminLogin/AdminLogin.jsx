import React from 'react'
import { useState } from 'react'
import { useContext } from 'react' 
import {AiOutlineUsergroupAdd} from "react-icons/ai" 
import { useNavigate } from 'react-router-dom'
import { adminMessageContext, userLoginContext } from '../../App'
import Loading from '../../Components/Loading/Loading'
function AdminLogin() {
    const navigate = useNavigate()
    const [loading , setLoading] = useState(false)
    const [adminMessage , setAdminMessage] = useContext(adminMessageContext)
    const [user , setUser] = useContext(userLoginContext)
    // handleRegisterChange  
    const handleRegisterChange = (e) =>{
        setUser({...user, [e.target.name]: e.target.value})
    }
   // handleAdminSubmit 
    const handleAdminSubmit = (e)=>{
        setLoading(true)
        e.preventDefault()
        fetch("https://itihad.onrender.com/api/admin/admin-login", {
            method : "POST",
            headers : {
                "Content-type" : "application/json",
            },
            body :JSON.stringify(user)
        }).then(res => res.json())
        .then(data => {
            setLoading(false)
            console.log(data.adminInfo)
            const adminInfo =   localStorage.setItem("admin", JSON.stringify(data.adminInfo))
            setAdminMessage((preMsg)=> ({
                ...adminMessage,
                message : data.message,
                adminInfo : data.adminInfo
            }))
          
        })
    }
    if (adminMessage.message ==="Login Successful") {
        setTimeout(() => {
             navigate("/dashboard")
             setAdminMessage(preMsg => ({
                ...adminMessage,
                message : "",  
                adminInfo : ""
             }))
        }, 1500);
    }
    return (
        <div className='adminLoginContainer'>
            <div className='UserLoginContainer'>

                <div className="container">
                    <div className="loginWrapper">

                        <div className="loginImgWrapper">
                            <AiOutlineUsergroupAdd className='loginIcon' />
                        </div>
                        <div className="loginFormWrapper">

                            <h3 className='text-light my-3'>
                                Admin login
                            </h3>
                            <div className="loginrForm">
                                <form onSubmit={handleAdminSubmit}>
                                    <input onChange={handleRegisterChange} className='form-control formInput my-2' type="email" name='email' placeholder='Email' required />
                                    <input onChange={handleRegisterChange} className='form-control formInput my-2' type="password" name='password' placeholder='password' required />
                                    <input onChange={handleRegisterChange} className='form-control formInput my-2'  type="text" name='roll' placeholder='Admin / modaretor ' required />
                                    <input className='form-control my-3 fw-bold bg-success' type="submit" value="Sign in" />
                                </form>
                            </div>
                            {
                                loading && <Loading/>
                            }
                     { adminMessage.message.includes("Successful") ?
                                <h6 className='text-center my-3 text-light'>{adminMessage.adminInfo + " " + adminMessage.message}</h6> 
                                :
                                <h6 className='text-center my-3 text-warning'>{adminMessage.adminInfo + " " + adminMessage.message}</h6>
                     }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdminLogin