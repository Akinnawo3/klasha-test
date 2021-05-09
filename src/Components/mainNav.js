import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/img/logo.jpeg'

const MainNav = () => {
    return (
        <nav className="navbar navbar-light bg-white">
            <div className="container-fluid">
                <Link className="navbar-brand ms-4 " to="/">
                    <img src={logo} height={35} className="d-inline-block align-text-top" />
                </Link>
            </div>
        </nav>



    )
}

export default MainNav
