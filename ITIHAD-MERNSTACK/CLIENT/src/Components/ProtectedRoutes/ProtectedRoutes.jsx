import React from 'react' 
import { Navigate } from 'react-router-dom' 

function ProtectedRoutes({children}) {
  const getAdminData = JSON.parse(localStorage.getItem('admin')) 
  return getAdminData ? children : <Navigate to="/admin-login"/>
}

export default ProtectedRoutes