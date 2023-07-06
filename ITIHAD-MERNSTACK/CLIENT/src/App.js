import React, { createContext, useState } from 'react'
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Header from './Components/Header/Header'
import ErrorPage from './Pages/ErrorPage/ErrorPage'
import Members from './Pages/Members/Members'
import Home from './Pages/Home/Home'
import Footer from './Components/Footer/Footer'
import UserLogin from './Components/UserLogin/UserLogin' 
import AdminLogin from './AdminComponents/AdminLogin/AdminLogin'
import Dashboard from './AdminComponents/Dashboard/Dashboard'
import Blogs from './Components/Blogs/Blogs'
import BlogDetails from './Components/BlogDetails/BlogDetails'
import DonarInfo from './Components/DonarInfo/DonarInfo'
import ProtectedRoutes from './Components/ProtectedRoutes/ProtectedRoutes'
// context API 
export const userLoginContext = createContext()  // user /admin / login / set up register object
export const merbersContext = createContext()
export const blogDonationContext =  createContext() // blog and donation set up object
export const blogContext = createContext()  /// blog context
export const adminMessageContext = createContext()
export const adminLoginContext = createContext()
function App() {
 const [adminMessage , setAdminMessage] = useState({
    message : '',
    adminInfo : ''
})
const [adminLogin ,setAdminLogin] = useState("")
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    profession: "",
    password: "",
    roll :"",
    image: ""
  }) 
  const [blogDonation, setBlogDonation] = useState({
      name :"", // add donaitonn
      email :"",
      amount : "",
      title :"", //add blog 
      desc :"",
      image :""
  })
  const [members,setMembers] = useState([])
  const [blogs, setBlogs] = useState([])
  return (
    <adminLoginContext.Provider value={[adminLogin ,setAdminLogin]}>
    <adminMessageContext.Provider value={[adminMessage , setAdminMessage]}>
    <userLoginContext.Provider value={[user, setUser]}>
      <merbersContext.Provider value={[members , setMembers]}>
        <blogDonationContext.Provider value={[blogDonation, setBlogDonation]}>
          <blogContext.Provider value={[blogs, setBlogs]}>
       <BrowserRouter>
       <Header/>
          <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/members" element={<Members/>}/>
              <Route path="/signup"  element={<UserLogin/>}/>
              <Route path="/admin-login"  element={<AdminLogin/>}/>
              <Route path="/dashboard"  element={<ProtectedRoutes>
                <Dashboard/>
              </ProtectedRoutes>}/>
              <Route path="/blogs"  element={<Blogs/>}/>
              <Route path="/blog-details/:id"  element={<BlogDetails/>}/>
              <Route path="/donar-info"  element={<DonarInfo/>}/>

              <Route path="/*" element={<ErrorPage/>}/>
          </Routes>
          <Footer/>
       </BrowserRouter>
       </blogContext.Provider>
       </blogDonationContext.Provider>
       </merbersContext.Provider>
    </userLoginContext.Provider>
    </adminMessageContext.Provider>
    </adminLoginContext.Provider>
  )
}

export default App