import React, { Component } from 'react';
import "./Login_and_signup.css";
import {Link} from "react-router-dom"
import Logo from '../Logo/Logo';
class Login extends Component {
    constructor(props) {
        super(props)

        this.state = {
            email: '',
            password: ''
        }
        // this.handleChange = this.handleChange.bind(this);
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        console.log(this.state)
    }
    render() {
        return (
            <div className='row login_signup'>
                <div className='col-sm-4 col-md-6 logo'>
                    {/* <img src={logo} alt="interview pic" /> */}
                    <Logo/>
                </div>
                <div className='col-sm-8 col-md-6'>

                    <div className='container fillForm'>
                        <div className="card">
                            <p>Login to your Account</p>
                            <input type='email' name="email" placeholder="Email.." required onChange={this.handleChange} /><br />
                            <input type='password' name='password' placeholder='Password' required onChange={this.handleChange} /><br />
                            <div className="pwd_and_btn">
                                <Link to="/FortgotPassword" >Forgot Password?</Link>
                                <button type="button" onClick={this.handleSubmit} className='btn'>
                                    Login
                                </button>
                            </div>
                            <div className='haveAccount'>
                                <b>New User?</b> <Link to='/Signup' >Signup</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login;