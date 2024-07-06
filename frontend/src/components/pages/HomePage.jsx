import React from 'react'
import { Link } from 'react-router-dom'

import '../../App.css'
import BackgroundImage from '../../assets/images/bg1.jpg'

export default function Homepage() {
    return (
        <header style={ HeaderStyle }>
            <h1 className="main-title text-center">Welcome</h1>
            <p className="main-para text-center">Have you ever been effected by any cyber attack or threat?</p>
            <div className="buttons text-center">
                <Link to="/yes">
                    <button className="primary-button">Yes</button>
                </Link>
                <Link to="/no">
                    <button className="primary-button" id="reg_btn"><span>No </span></button>
                </Link>
            </div>
        </header>
    )
}

const HeaderStyle = {
    width: "100%",
    height: "100vh",
    background: `url(${BackgroundImage})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover"
}