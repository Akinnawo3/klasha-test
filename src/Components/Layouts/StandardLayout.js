import React from 'react'
import MainNav from '../mainNav'
import SideBar from './SideBar'

const StandardLayout = ({ children }) => {
    return (
        <div>
            <MainNav />
            <div className="d-flex ">
                <SideBar />
                {children}
            </div>

        </div>
    )
}

export default StandardLayout
