import React from 'react'
import { Link } from 'react-router-dom'

import '../../App.css'
import BackgroundImage from '../../assets/images/bg1.jpg'

export default function NoPage() {
    return (
        <header style={ HeaderStyle }>
            <p className="main-para text-center">Congratulations on not being affected by any Cyber Threat or Attack!!!</p>
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