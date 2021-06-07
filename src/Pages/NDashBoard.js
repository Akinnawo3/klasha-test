import React from 'react'
import MainNav from '../Components/mainNav'
import '../assets/scss/dashboard.scss'
import { FaSearch } from 'react-icons/fa'
const NDashboard = () => {
    return (
        <div className="container-fluid">
            <MainNav pageTitle={"DashBoard"} />

            <div className="row mb-4 mx-1  ">
                <div className=" d-flex border p-0 rounded outer-border " >
                    <div className="w-50 p-3 iner-items">
                        <div className="d-flex justify-content-between">
                            <div className="text-muted">Total account balance</div>
                            <div className="dropdown ">
                                <button type="button" className="btn btn-light btn-sm dropdown-toggle" id="dropdownMenuOffset" data-bs-toggle="dropdown" aria-expanded="false" data-bs-offset="10,20">
                                    USD
                                </button>
                                <ul className="dropdown-menu dropdown-menu-end"  aria-labelledby="dropdownMenuOffset">
                                    <li><a className="dropdown-item" href="#">KES</a></li>
                                    <li><a className="dropdown-item" href="#">NGN</a></li>
                                    <li><a className="dropdown-item" href="#"> GHC </a></li>
                                </ul>
                            </div>
                        </div>
                        <hr className="my-3" />
                        <h1>
                            $5322.18
                        </h1>
                        <div className="text-muted">1 USD = 381.97 NGN</div>
                    </div>
                    <div className="card d-inline rounded bg-light p-3 iner-items" style={{ width: '20rem' }}>
                        <div className="d-flex justify-content-between">
                            <div className="text-muted">Funds on hold</div>
                        </div>
                        <hr className="my-3" />
                        <h1>
                            $5322.18
                        </h1>
                    </div>


                </div>
            </div>




            <div className="row ">
                <div className="table-responsive">
                    <div className="d-flex justify-content-between mb-3 align-items-center ">
                        <div className="fw-bold text-nowrap my-auto text-start me-2">Payout table</div>
                        <div>
                            <div className="d-flex">
                                <span className="border px-1"><input type="text" className="mx-2 p-1 w-30 border-0" placeholder="Search something.." />
                                    <FaSearch color={"grey"} className="d-none d-md-inline" />
                                </span>
                                <span className="border mx-2"><input type="month" id="start" name="start" defaultValue="2020-03" className=" p-1 w-30 border-0" /></span>
                                <span><button className="btn btn-success  p-2 btn-sm">Payout</button></span>
                            </div>
                        </div>
                    </div>
                    <table className="table table-hover">
                        <thead className="table-light">
                            <tr>
                                <th scope="col">Payout ID</th>
                                <th scope="col">Source</th>
                                <th scope="col">Date</th>
                                <th scope="col">Amount</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="p-3">KLA12578DHQ</td>
                                <td className="p-3"> Vel pellentesque ornare</td>
                                <td className="p-3">25th November, 2020</td>
                                <td className="p-3"> $1,200</td>
                            </tr>
                            <tr>
                                <td className="p-3">KLA12578DHQ</td>
                                <td className="p-3"> Vel pellentesque ornare</td>
                                <td className="p-3">25th November, 2020</td>
                                <td className="p-3"> $1,200</td>
                            </tr>
                            <tr>
                                <td className="p-3">KLA12578DHQ</td>
                                <td className="p-3"> Vel pellentesque ornare</td>
                                <td className="p-3">25th November, 2020</td>
                                <td className="p-3"> $1,200</td>
                            </tr>
                            <tr>
                                <td className="p-3">KLA12578DHQ</td>
                                <td className="p-3"> Vel pellentesque ornare</td>
                                <td className="p-3">25th November, 2020</td>
                                <td className="p-3"> $1,200</td>
                            </tr>

                            <tr className="text-center">
                                <td colspan="4 ">
                                    <span className="text-primary">See More</span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    )
}
export default NDashboard