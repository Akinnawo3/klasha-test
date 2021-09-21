import React, {useEffect, useRef} from 'react'
import moment from 'moment'
import { FaBars, FaBell, FaCircle, FaDotCircle } from 'react-icons/fa'
import "../assets/scss/mainNav.scss"
import userImage from '../assets/img/user-profile-pic.jpeg'





const MainNav = ({ pageTitle }) => {
    const sideSwitchRef = useRef();
    useEffect(() => {
        const listener = () => {
            document.querySelector("div.aside").classList.add("expanded");
        }
        sideSwitchRef?.current.addEventListener("click", listener);
        // l[[dodffca]]
        // const sRef = sideSwitchRef.current;
        // return () => sRef.removeEventListener('click',listener)
    }, [])
    return (
        <div className="mt-2 d-flex justify-content-between align-items-center mb-5">
            <div className="d-flex">
                <div 
                ref={sideSwitchRef} 
                className="me-2 d-md-none side-switch"><FaBars /></div>
                <div className="left-side d-flex flex-column ">
                    <span className="fw-bold"> {pageTitle}</span>
                    <small className="text-muted ">Today, {moment().format("MMM Do YY")}</small>
                </div>
            </div>
            <div className="right-side pe-2 d-flex">
                <span className="border rounded-circle p-2 bg-light notification-border">
                    <div className=" text-danger blinker"><FaCircle size={10} /></div>
                    <FaBell style={{ color: "grey", fontSize: "1.5em" }} />
                </span>
                <img src={userImage} height="45" className=" rounded-circle border rounded-circle  border-danger bg-warning ms-3" />
            </div>
        </div>

    )
}
export default MainNav