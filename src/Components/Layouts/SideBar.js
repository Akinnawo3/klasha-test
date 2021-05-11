import React from 'react'
import '../../assets/scss/aside.scss'
import pp from '../../assets/img/user-profile-pic.jpeg'

const SideBar = () => {
    const menuItems = ["Profile", "Dashboard", "Assets", "Users"]

    return (
        <div className="vh-100 bg-white aside">
            <div className="aside-menu">
                <div className="user-avatar">
                    <img src={pp} height={85} className="d-inline-block align-text-top rounded-circle" />
                    <div>
                    <Fa
                    </div>
                </div>
                <div className="menu-items">
                    <ul>
                        {
                            menuItems.map(
                                item => <li>
                                    <div className="menu-item">
                                        {item}
                                    </div>
                                </li>
                            )
                        }

                    </ul>
                </div>
            </div>
        </div>
    )
}

export default SideBar
