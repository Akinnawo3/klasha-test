import React from 'react'
import SideBar from '../Components/SideBar'
import '../assets/scss/layout.scss'

const StandardLayout = ({ children }) => {



    return (
        <div className="d-flex h-100 cont ">
            <SideBar />
            <div className="main-item container-fluid w-100" id="main">
                {children}
            </div>
        </div>
    )
}

export default StandardLayout
