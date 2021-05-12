import React from 'react'
import PagesTitle from './pagesTitle'
import '../assets/scss/pages.scss'
import { FaTimesCircle, FaUserTimes } from 'react-icons/fa'

const Users = () => {
    const users = [
        { name: "chukwuma Obiazor", location: "General 1", status: "Assigned" },
        { name: "chukwuma Obiazor", location: "General 1", status: "unAssigned" },
        { name: "chukwuma Obiazor", location: "General 1", status: "Assigned" },
        { name: "chukwuma Obiazor", location: "General 1", status: "Assigned" },
        { name: "chukwuma Obiazor", location: "General 1", status: "Unassigned" },
        { name: "chukwuma Obiazor", location: "General 1", status: "Assigned" },
        { name: "chukwuma Obiazor", location: "General 1", status: "Unassigned" },
        { name: "chukwuma Obiazor", location: "General 1", status: "Assigned" }
    ]
    return (
        <div className="container mt-4 mx-5 bg-white p-0">
            <PagesTitle title={"Users"} />

            <div className="body-padding  mt-5">
                <table className="table rounded">
                    <thead>
                        <tr>
                            <th scope="col">S/N</th>
                            <th scope="col">Name</th>
                            <th scope="col">Location</th>
                            <th scope="col">Status</th>
                            <th scope="col">Edit</th>
                            <th scope="col">Delete</th>
                            <th scope="col">Disable</th>
                            <th scope="col">Change Password</th>

                        </tr>
                    </thead>
                    <tbody>

                        {
                            users.map(
                                (user, indx) =>
                                    <tr>
                                        <th scope="row">{indx + 1}</th>
                                        <td>{user.name}</td>
                                        <td>{user.location}</td>
                                        <td className={`${user.status === "Assigned" ? "text-danger" : "text-muted"}`}>{user.status}</td>
                                        <td className="text-danger">Edit</td>
                                        <td><FaUserTimes className="text-danger" size={25}/></td>
                                        <td><FaTimesCircle className="text-danger" size={25}/></td>
                                        <td className="text-muted">Change Password</td>
                                    </tr>
                            )
                        }
                    </tbody>
                </table>






            </div>
        </div>
    )
}

export default Users
