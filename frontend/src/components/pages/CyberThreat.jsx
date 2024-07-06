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
    // textAlign:'left !important'
}

export default function CyberThreat() {
    return (
        <header style={ HeaderStyle }>
        <div class="container">
        <h2>What is a Cyber Threat?</h2>
        <p>
            A cyber threat is any malicious act that seeks to damage data, steal data, or disrupt digital life in general. These threats are launched by various entities including hackers, terrorist groups, hostile nation-states, and criminal organizations.
        </p>
        <h2>Common Cyber Threats</h2>
        <ul>
            <li>Advanced Persistent Threats (APTs)</li>
            <li>Insider Threats</li>
            <li>Distributed Denial-of-Service (DDoS) Attacks</li>
            <li>Spyware</li>
            <li>Trojan Horses</li>
            <li>Zero-Day Exploits</li>
        </ul>
        <h2>Identifying Cyber Threats</h2>
        <p>
            Identifying cyber threats involves monitoring networks for unusual activities, analyzing system logs, and employing threat intelligence tools. It's important to stay informed about new and evolving threats and to conduct regular security assessments.
        </p>
        <h2>Mitigation Strategies</h2>
        <p>
            Effective mitigation strategies include implementing robust security protocols, conducting employee training, regularly updating software, and developing a comprehensive incident response plan. Collaborating with other organizations and sharing threat intelligence can also enhance overall security posture.
        </p>
    </div>
    </header>
    )
}