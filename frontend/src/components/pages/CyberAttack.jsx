import React from 'react'

import '../../App.css'
const HeaderStyle = {
    width: "100%",
    height: "100vh",
    // background: `url(${BackgroundImage})`,
    backgroundColor:'#222',
    // backgroundPosition: "center",
    // backgroundRepeat: "no-repeat",
    // backgroundSize: "cover"
}

export default function CyberAttack() {
    return (
        <header style={ HeaderStyle }>
        <body >
            <div class="container">
        <h2>What is a Cyber Attack?</h2>
        <p>
            A cyber attack is any attempt to expose, alter, disable, destroy, steal or gain unauthorized access to or make unauthorized use of an asset. Cyber attacks are often aimed at accessing, changing, or destroying sensitive information; extorting money from users; or interrupting normal business processes.
        </p>
        <h2>Types of Cyber Attacks</h2>
        <ul>
            <li>Phishing</li>
            <li>Ransomware</li>
            <li>Denial-of-Service (DoS)</li>
            <li>Man-in-the-Middle (MitM)</li>
            <li>SQL Injection</li>
            <li>Malware</li>
        </ul>
        <h2>Prevention and Protection</h2>
        <p>
            To protect against cyber attacks, it's crucial to implement strong security measures such as firewalls, antivirus software, and regular system updates. Educating employees on recognizing and preventing phishing attacks and securing networks with strong passwords and multi-factor authentication are also essential steps.
        </p>
    </div>
        </body>
        </header>
    )
}