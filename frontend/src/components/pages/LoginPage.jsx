import React, { useState } from 'react'
import { Link, Redirect } from 'react-router-dom'
import { signIn } from '../../APIs/apiCalls'

import '../../App.css'
import BackgroundImage from '../../assets/images/bg1.jpg'
const HeaderStyle = {
    width: "100%",
    height: "100vh",
    background: `url(${BackgroundImage})`,
    // backgroundColor:'#222',
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover"
}
export default function SignInPage() {
    const [un, setun] = useState();
    const [ps, setps] = useState();
    const [redirect,setRedirect]=useState(false);
    const handleChangeun = (name) => (event) => {
        setun(event.target.value);
    };
    const handleChangeps = (name) => (event) => {
        setps(event.target.value);
    };
    const login = () => {
        signIn(un, ps).then((res) => {
            if (res) {
                window.location.href='/home'
            } else {
                alert("Invalid credentails")
            }
        })
    }

    return (
        <header style={ HeaderStyle }>
        <div className="text-center m-auto" >
            <h2 className='main-para '>Sign in to us</h2>
            <form>
                <p>
                    <label>Username</label><br />
                    <input type="text" name="first_name" id='username' value={un} onChange={handleChangeun()} required />
                </p>
                <p>
                    <label>Password</label>
                    <br />
                    <input type="password" name="password" required value={ps} onChange={handleChangeps()} />
                </p>
                <p>
                    <button id="sub_btn" type="button" onClick={() => { login() }}>Login</button>
                </p>
            </form>
            <footer className='main-text'>
                <p>First time? <Link to="/register">Create an account</Link>.</p>
                <p><Link to="/">Back to Homepage</Link>.</p>
            </footer>
        </div>
          </header>
    )
}
