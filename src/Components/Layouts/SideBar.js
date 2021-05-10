import React from 'react'
import '../../assets/scss/aside.scss'
import pp from '../../assets/img/user-profile-pic.jpeg'

const SideBar = () => {
    return (
        <div className="vh-100 bg-white aside">
            <div className="aside-menu">
                <div className="">
                    <img src={pp} height={75} className="d-inline-block align-text-top rounded-circle" />
                </div>
            </div>
        </div>
    )
}

export default SideBar
