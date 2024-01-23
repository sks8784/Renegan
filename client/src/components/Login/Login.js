import React, { useState } from 'react';
import './Login.css';
import loginImg from '../../images/loginImg.svg';
import logo from '../../images/logo.svg';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import { Link } from "react-router-dom";

const Login = () => {

    const [activeTab, setActiveTab] = useState('signin');
    const [loginEmail, setLoginEmail] = useState("");

    const switchTab = (tabName) => {
        setActiveTab(tabName);
    };

    return (
        <div className='outer-container'>
            <div className='login-container'>

                <div className='logo-container'>
                    <img src={logo} alt='/logo' />
                </div>

                <div className='login-box'>
                    <div className='header-container'>
                        <h1>Welcome Back</h1>
                        <p>Welcome Back, Please Enter Your University Mail Id</p>
                    </div>

                    <div className='signin-signup-toggle-container'>
                        <div
                            className={`tab ${activeTab === 'signin' ? 'active' : ''}`}
                            onClick={() => switchTab('signin')}
                        >
                            SignIn
                        </div>
                        <div
                            className={`tab ${activeTab === 'signup' ? 'active' : ''}`}
                            onClick={() => switchTab('signup')}
                        >
                            SignUp
                        </div>
                    </div>

                    <div className='loginEmail'>
                        <MailOutlineIcon />
                        <div className=''></div>
                        <input className="mailInput" type="email" placeholder='Email' required value={loginEmail} onChange={(e) => setLoginEmail(e.target.value)} />
                    </div>

                    <div className='btn-container'>
                        <button className=''>
                            Continue
                        </button>
                    </div>

                    <div className='join-text-container'>
                        <p>Still does not joined <Link to='/'>Renegan? </Link>Click Here</p>
                    </div>

                    <div className="arc"></div>
                </div>

            </div>
            <div className='login-image-container'>
                <img src={loginImg} alt='/' />
            </div>
        </div>
    )
}

export default Login
