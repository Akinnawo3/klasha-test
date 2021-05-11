import React from 'react'
import PagesTitle from './pagesTitle'
import '../assets/scss/pages.scss'
import chart from '../assets/img/asset-chart-diagram.jpeg'
import pieChart from '../assets/img/asset-pie-chart.jpeg'
import Chartt from '../assets/img/asset-chart.jpeg'
const Dashboard = () => {
    const menuData = [
        { title: "Assets", color: "rgb(159, 0, 0)", clickLink: "" },
        { title: "Assigned Assets", color: "rgb(255, 159, 113)", clickLink: "" },
        { title: "Unassigned Assets", color: "rgb(255, 128, 192)", clickLink: "" },
        { title: "Vendors", color: "rgb(192, 192, 192)", clickLink: "" },
        { title: "Locations", color: "rgb(73 , 228, 224)", clickLink: "" },
        { title: "Users", color: "rgb(217, 0, 108)", clickLink: "" },
        { title: "Notifications", color: "rgb(255, 0 , 0)", clickLink: "" }
    ]
    return (
        <div className="container mt-4 mx-5 bg-white p-0">
            <PagesTitle title={"Dashboard"} />

            <div className="body-padding row mt-5">
                {
                    menuData.map(item => <div className="col-3 text-center fs-5 menu-data fw-bold d-flex justify-content-center align-items-center p-3" style={{ backgroundColor: item.color }}>{item.title}</div>)
                }

            </div>

            <PagesTitle title={"Visualization"} />

            <div className="body-padding row mt-5">
                <div className="col-4 text-center">
                    <img src={chart}  className=" align-text-top " />
                </div>
                <div className="col-4 text-center">
                    <img src={pieChart}  className=" align-text-top " />
                </div>
                <div className="col-4 text-center">
                    <img src={Chartt}  className=" align-text-top " />
                </div>
            </div>
        </div>
    )
}

export default Dashboard
