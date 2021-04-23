import React, { Component } from 'react'
import './Password.css'
import EmailSharpIcon from '@material-ui/icons/EmailSharp';
// import { yellow } from '@material-ui/core/colors';
class ForgotPassword extends Component {

    handleSubmit = () => {
        this.props.history.push("/ResetPassword");
    }

    handleCancel = () => {
        this.props.history.push("/Login")
    }
    render() {
        return (
            <div className='holder'>
                <div className='row content'>
                    {/* <p>
                        Forgot Password
                    </p>
                    <input type='email' placeholder='Email' />
                    <input type='text' placeholder='OTP' /> 
                    <button type='button' onClick={this.handleSubmit} className='btn'>Submit</button> */}
                    <div className="text-center"><EmailSharpIcon style={{ color: 'rgb(218,43,25)', fontSize: 80 }} /></div>
                    <p className='h1'>Forgot Your Password?</p>
                    <span className='h5 mb-5 text-center'>No worries! Enter Your Email and we will send you a reset</span>

                    <div className="text-center">
                        <input type='email' placeholder='Enter your Email here...' />
                        <br />
                        <button type='button' onClick={this.handleSubmit} className='btn '>Submit</button>
                        <button type='button' onClick={this.handleCancel} className='btn'>Cancel</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default ForgotPassword;

// rgb(255,134,88)