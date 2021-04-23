import React, { Component } from 'react'
import VpnKeyIcon from '@material-ui/icons/VpnKey'
import './Password.css'
class ResetPassword extends Component {

    handleSubmit = () => {
        this.props.history.push("/ChangePassword")
    }

    handleCancel = () => {
        this.props.history.push("/Login")
    }

    render() {
        return (
            <div className='holder'>
                <div className='row content'>
                    <div className='text-center'><VpnKeyIcon style={{ color: 'rgb(218,43,25)', fontSize: 100 }}/></div>
                    <p className='h1'>Reset Password</p>
                    <span className='h5 mb-5 text-center'>Enter the OTP that is sent to your Mail</span>
                    <div className='text-center'>
                        <input className='text-center' type='text' placeholder='OTP' required/>
                        <br/>
                        <button type='button' onClick={this.handleSubmit} className='btn'>Submit</button>
                        <button type='button' onClick={this.handleCancel} className='btn'>Cancel</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default ResetPassword;