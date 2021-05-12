import React from 'react'
import PagesTitle from './pagesTitle'
import '../assets/scss/pages.scss'

const Users = () => {
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
                        <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td colSpan={2}>Larry the Bird</td>
                            <td>@twitter</td>
                        </tr>
                    </tbody>
                </table>






            </div>
        </div>
    )
}

export default Users
