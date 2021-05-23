import React, { Component } from 'react';
import "./Login_and_signup.css";
import { Link } from "react-router-dom"
import Logo from '../Logo/Logo';
class Signup extends Component {
    constructor(props) {
        super(props)

        this.state = {
            email: '',
            password: '',
            regno: '',
            uname: '',
            branch: '',
            conf_pwd: '',
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    async handleSubmit() {
        try {
            const result = await fetch('/signup', {
                method: 'post',
                mode: 'no-cors',
                headers: {
                    "Accept": 'application/json',
                    'Content-type': 'application/json'
                },
                body: JSON.stringify({
                    email: this.state.email,
                    password: this.state.password,
                    regno: this.state.regno,
                    uname: this.state.uname,
                    branch: this.state.branch,
                    conf_pwd: this.state.conf_pwd
                })    
            });

            this.props.history.push('/CreatePost')
        } catch (e) {
            console.log(e)
        }

        
        // event.preventDefault()
        // console.log(this.state)
    }
    render() {
        return (
            <div className='row login_signup'>
                <div className='col-md-6 logo'>
                    <Logo />
                </div>
                <div className='col-md-6'>

                    <div className='container fillForm'>
                        <div className="card">
                            <p>Sign up for your career</p>
                            <input type='email' name="email" placeholder="Email" required onChange={this.handleChange} /><br />
                            <input type='text' name='regno' placeholder='Reg.No' required onChange={this.handleChange} /><br />
                            <input type='text' name='uname' placeholder='Name' required onChange={this.handleChange} /><br />
                            <input type='text' name='branch' placeholder='Branch' required onChange={this.handleChange} /><br />
                            <input type='password' name='password' placeholder='Password' required onChange={this.handleChange} /><br />
                            <input type='password' name='conf_pwd' placeholder='Confirm Password' required onChange={this.handleChange} /><br />
                            <div className="pwd_and_btn">
                                <button type="button" onClick={this.handleSubmit} className='btn'>
                                    Signup
                                </button>
                            </div>
                            <div className='haveAccount'>
                                <b>Already have an Account?</b><Link to='/Login' >Login</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Signup;