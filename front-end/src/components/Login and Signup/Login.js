import React, { Component } from 'react';
import "./Login_and_signup.css";
import { Link } from "react-router-dom"
import Logo from '../Logo/Logo';
import { api_url } from '../config';
import * as Actions from '../../ActionCreator';
import { connect } from "react-redux";



const validEmailRegex = RegExp(
    /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i

);

class Login extends Component {
    constructor(props) {
        super(props)

        this.state = {
            email: '',
            password: '',
            errors: {
                email: { hasError: true, message: '' },
                password: { hasError: true, message: '' }
            }
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleChange = (event) => {
        event.preventDefault();
        const { name, value } = event.target;
        let errors = this.state.errors;

        switch (name) {
            case 'email':
                if (validEmailRegex.test(value)) {
                    errors.email.message = '';
                    errors.email.hasError = false;
                } else {
                    errors.email.message = 'Email is not valid!';
                    errors.email.hasError = true;
                }
                break;
            case 'password':
                if (value.length < 8) {
                    errors.password.message = 'Password is too short!';
                    errors.password.hasError = true;
                } else {
                    errors.password.message = '';
                    errors.password.hasError = false;
                }
                break;
            default:
                break;
        }
        this.setState({
            errors,
            [name]: value
        })

        // console.log(this.state)

    }

    validateForm = errors => {
        const temp = Object.values(errors);
        const valid = !temp.some(val => val.hasError);
        return valid;
    };

    async handleSubmit() {
        if (this.validateForm(this.state.errors)) {
            const data = { user_name: this.state.email, password: this.state.password }
            this.props.loginAPI(data);
            // try {
            //     const result = await fetch(`${api_url}/login?user_name = ${this.state.email} & password=${this.state.password}`, {
            //         method: 'get',
            //         mode: 'no-cors',
            //         headers: {
            //             "Accept": 'application/json',
            //             'Content-type': 'application/json'
            //         }
            //     });
            //     sessionStorage.setItem('username',this.state.email);
            //     sessionStorage.setItem('loggedin',true);
            //     this.props.history.push('/');
            // } catch (e) {
            //     console.log(e)
            // }
        }
    }
    render() {
        const { errors } = this.state;
        return (
            <div className='row login_signup'>
                <div className='col-sm-4 col-md-6 logo'>
                    {/* <img src={logo} alt="interview pic" /> */}
                    <Logo />
                </div>
                <div className='col-sm-8 col-md-6'>

                    <div className='container fillForm'>
                        <div className="card">
                            <p>Login to your Account</p>
                            <input type='email' name="email" placeholder="Email.." required onChange={this.handleChange} />
                            <span className="error">{errors.email.message}</span>
                            <br />

                            <input type='password' name='password' placeholder='Password..' required onChange={this.handleChange} />
                            <span className="error">{errors.password.message}</span>
                            <br />

                            <div className="pwd_and_btn">
                                <Link to="/ForgotPassword" >Forgot Password?</Link>
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

export const mapDispatchToProps = (dispatch, ownProps) => ({
    loginAPI: (msg) => {
        dispatch(Actions.loginAPI(msg, ownProps));
    },
})

export default connect(null, mapDispatchToProps)(Login);