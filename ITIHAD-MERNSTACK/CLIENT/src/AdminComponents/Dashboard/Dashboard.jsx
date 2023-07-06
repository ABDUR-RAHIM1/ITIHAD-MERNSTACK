import React, { useState } from 'react'
import { AiOutlinePlus } from 'react-icons/ai'
import { FcDonate } from 'react-icons/fc'
import { RiAdminFill } from 'react-icons/ri'
import Donation from '../../Pages/Donations/Donations'
import AddInfo from '../AddInfo/AddInfo'
import Admins from '../Admins/Admins'
import "./Dashboard..css"

function Dashboard() {
    const [component, setComponent] = useState(<AddInfo />)

    const handleDashboardCompo = (e) => {
        if (e.target.innerText === "POST") {
            setComponent(<AddInfo />)
        } else if (e.target.innerText === "DONATION") {
            setComponent(<Donation/>)
        } else if (e.target.innerText === "ADMIN") {
            setComponent(<Admins />)
        }
    }
    return (
        <>
            <div className='dashboardContainer'>
                <div className="dashboardMenu">
                    <button onClick={handleDashboardCompo} className='btn btn-info'><AiOutlinePlus className="btnIcons" /> post</button>
                    <button onClick={handleDashboardCompo} className='btn btn-info'> <FcDonate className="btnIcons"/> donation</button>
                    <button onClick={handleDashboardCompo} className='btn btn-info'><RiAdminFill className="btnIcons"/> admin</button>
                </div> 
                <div className="dashboardContent">
                    {component}
                </div>
            </div>
        </>
    )
}

export default Dashboard