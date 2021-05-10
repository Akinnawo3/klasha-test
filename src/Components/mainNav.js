import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/img/logo.jpeg'
import pp from '../assets/img/user-profile-pic.jpeg'

const MainNav = () => {
    return (
        <nav className="navbar navbar-light bg-white">
            <div className="container-fluid d-flex">
                <Link className="navbar-brand ms-md-4 " to="/">
                    <img src={logo} height={35} className="d-inline-block align-text-top" />
                </Link>
                <div className="me-md-5 d-flex" >
                    <img src={pp} height={45} className="d-inline-block align-text-top rounded-circle" />
                    {/* <div className="text-center d-flex flex-column">
                        <div>
                            <b>
                                Chukwuma Albert Obiazor
                            </b>
                        </div>
                        <small>
                            <b>
                                Snr. Software Developer
                            </b>
                        </small>
                    </div> */}
                </div>
            </div>
        </nav>



    )
}

export default MainNav
