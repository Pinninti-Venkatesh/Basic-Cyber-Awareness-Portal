import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import LandingPage from './components/pages/LandingPage.jsx'
import LoginPage from './components/pages/LoginPage.jsx'
import RegisterPage from './components/pages/RegisterPage.jsx'
import ForgetPasswordPage from './components/pages/ForgetPasswordPage.jsx'
import HomePage from './components/pages/HomePage.jsx'

import './App.css'
import YesPage from './components/pages/Yes.jsx'
import NoPage from './components/pages/No.jsx'
import CyberAttack from './components/pages/CyberAttack.jsx'
import CyberThreat from './components/pages/CyberThreat.jsx'

export default function App() {
    console.log('testing');
        return (
        <Router>
            <div>
                <Switch>
                    <Route exact path="/" component={ LandingPage } />
                    <Route path="/login" component={ LoginPage } />
                    <Route path="/register" component={ RegisterPage } />
                    <Route path="/forget-password" component={ ForgetPasswordPage } />
                    <Route path="/home" component={ HomePage } />
                    <Route path="/yes" component={ YesPage } />
                    <Route path="/no" component={ NoPage } />
                    <Route path="/CA" component={ 
                        CyberAttack
                     } />
                    <Route path="/CT" component={ CyberThreat } />
                </Switch>
            </div>
        </Router>
    )
}

const FooterStyle = {
    background: "#222",
    fontSize: ".8rem",
    color: "#fff",
    position: "absolute",
    bottom: 0,
    padding: "1rem",
    margin: 0,
    width: "100%",
    opacity: ".5"
}