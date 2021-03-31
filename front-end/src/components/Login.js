import React, { Component } from 'react';
import "./Login.css";
import interview_pic from "../assets/images/interview-pic.png";

class Login extends Component {
    render() {
        return (
            <div className='row login'>
                <div className='col-md-7'>
                    {/* <img src={interview_pic} alt="interview pic" height={'100%'} width={'100%'}/> */}
                    <div className='container'>
                        <div className="card">
                            <p>Login to your Account</p>
                            <input type='email' placeholder="Email.." required /><br />
                            {/* <input type='text' placeholder="Reg.No.." required /><br /> */}
                            <input type='password' placeholder='Password' required /><br />
                            <div className="pwd">
                                <a href="#" >Forgot Password?</a>
                                <button type="submit" className='btn'>Login</button>
                            </div>
                            
                        </div>
                    </div>
                </div>
                <div className=' col-md-5'>
                </div>
            </div>
        )
    }
}

export default Login;