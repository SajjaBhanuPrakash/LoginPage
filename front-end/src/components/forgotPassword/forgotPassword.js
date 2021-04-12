import React, { Component } from 'react'
import './forgotPassword.css'
class ForgotPassword extends Component {

    // handleSubmit = () => {
    //     this.props.history.push("/Login");
    // }

    render() {
        return (
            <div className='ForgotPwd-holder'>
                <div className='row ForgotPwd'>
                    <p>
                        Forgot Password
                    </p>
                    <input type='email' placeholder='Email' />
                    <input type='text' placeholder='OTP' /> 
                    <button type='button' onClick={this.handleSubmit} className='btn'>Submit</button>
                </div>
            </div>
        )
    }
}

export default ForgotPassword;