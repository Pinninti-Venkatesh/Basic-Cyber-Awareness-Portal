import React from 'react'
import { Link } from 'react-router-dom'

import '../../App.css'
import BackgroundImage from '../../assets/images/bg1.jpg'

export default function YesPage() {
    return (
        <header style={ HeaderStyle }>
            <h1 className="main-title text-center">We are sorry to hear that</h1>
            <p className="main-para text-center">Please slect which form of cyber crime you have faced!</p>
            <div className="buttons text-center">
                <Link to="/CA">
                    <button className="primary-button">Cyber Attack</button>
                </Link>
                <Link to="/CT">
                    <button className="primary-button" id="reg_btn"><span>Cyber Threat </span></button>
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