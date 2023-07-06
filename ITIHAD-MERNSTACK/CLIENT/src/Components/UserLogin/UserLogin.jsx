import { useContext,useState } from 'react' 
import {BsFillImageFill} from "react-icons/bs"
import { AiOutlineUsergroupAdd } from 'react-icons/ai'
import { userLoginContext } from '../../App'
import Loading from '../Loading/Loading'
import './UserLogin.css'
import { useNavigate } from 'react-router-dom'
function UserLogin() {
  const navigate = useNavigate()
  const [message, setMessage] = useState('')
  const [imgLoading, setImgLoading] = useState(false)
  const [loading, setLoading] = useState(false)
  const [checkBox, setCheckBox] = useState(true)
  const [user, setUser] = useContext(userLoginContext)  /// export this from app 

  //  register change
  const handleRegisterChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value })

  }
  //  handle file change 
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
    setUser((preUser) => ({
      ...preUser,
      image: imageUrl
    }))
  }
  // handle register submit
  const handleregisterSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    if (user.image) {
      fetch("https://itihad.onrender.com/api/create-user", {
        method: "POST",
        headers: {
          "content-type": "application/json"
        },
        body: JSON.stringify(user)
      }).then(res => res.json())
        .then(data => {
          setMessage(data.message)
          setLoading(false)
          setUser((prevUser) => ({
            ...prevUser,
            image: ""
          }))
        })
    } else {
      setMessage("Image Uploaded Or Wait a second")
    }

  }

  /// handle login submit
  const handleLoginSubmit = (e) => {
    setLoading(true)
    e.preventDefault()
    fetch("https://itihad.onrender.com/api/login-user", {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(user)
    }).then(res => res.json())
      .then(data => {
        setLoading(false)
        setMessage(data.message)
      })
  }

  if (message.includes("Login Successfully")) {
      setTimeout(() => {
        navigate("/members")
      }, 1500);
  }
  return (
    <div className='UserLoginContainer'>

      <div className="container">
        <div className="loginWrapper">

          <div className="loginImgWrapper">
            <AiOutlineUsergroupAdd className='loginIcon' />
          </div>
          <div className="loginFormWrapper">
            <input onChange={() => setCheckBox(!checkBox)} type="checkbox" className='form-check-input' id='check' />
            <label className=' text-light fw-bold' htmlFor="chekc">Register / Sign in</label>
            <h3 className='text-light my-3'>
              {checkBox ? "Register Account" : "Sign in"}
            </h3>
            {checkBox ?
              (<div className="registerForm">
                <form onSubmit={handleregisterSubmit}>
                  <input onChange={handleRegisterChange} className='form-control formInput mt-2' value={user.name} type="text" name='name' placeholder='Name' required />
                  <input onChange={handleRegisterChange} className='form-control formInput mt-2' value={user.email} type="email" name='email' placeholder='Email' required />
                  <input onChange={handleRegisterChange} className='form-control formInput mt-2' type="number" name='phone' placeholder='Phone' required />
                  <input onChange={handleRegisterChange} className='form-control formInput mt-2' type="text" name='profession' placeholder='profession' required />
                  <input onChange={handleRegisterChange} className='form-control formInput mt-2' value={user.password} type="password" name='password' placeholder='Password' required />
                  <input onChange={handleFileChange} className='d-none' id='file' type="file" name='password' required />
                  <div className="formLable mt-3">
                        <label htmlFor="file"><BsFillImageFill className='fileIcon text-light' /></label>
                        {imgLoading ?
                            <>  <div style={{ margin: "10px" }} className="spinner-border text-light" role="status"> </div>
                                <span className='text-light'>image uploading . . .</span>
                            </>
                            : <h6 className="text-light ml-3">uploaded Image</h6>
                        }
                    </div>
                  <input className='form-control my-3 fw-bold bg-primary text-light' type="submit" value="Register" />
                </form>
              </div>)
              :
              (<div className="loginrForm">
                <form onSubmit={handleLoginSubmit}>
                  <input onChange={handleRegisterChange} className='form-control formInput mt-2' value={user.email} type="email" name='email' placeholder='Email' required />
                  <input onChange={handleRegisterChange} className='form-control formInput mt-2' value={user.password} type="password" name='password' placeholder='Password' required />
                  <input className='form-control my-3 fw-bold bg-success text-light' type="submit" value="Sign in" />
                </form>
              </div>)
            }

            {(
              message.includes("Successfully") ?
                <h6 className='text-center text-light my-3'>{message}</h6>
                : <h6 className='text-center text-warning my-3'>{message}</h6>
            )
            }
            {loading && (<Loading />)}

          </div>
        </div>
      </div>
    </div>
  )
}

export default UserLogin