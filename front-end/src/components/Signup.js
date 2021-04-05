import React, { Component } from 'react';
import "./Login_and_signup.css";
import {Link} from "react-router-dom"
class Signup extends Component {
    constructor(props) {
        super(props)

        this.state = {
            email: '',
            password: '',
            regno: '',
            uname:'',
            conf_pwd : '',
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
                <div className='col-md-6 logo'>
                    <div className='logo_content'>
                        <h1>J</h1>
                        <dl>
                            <dt className='text-center'> <span>Jobify</span> </dt>
                            <dd> Make Students Placement Ready </dd>
                        </dl>
                    </div>
                </div>
                <div className='col-md-6'>

                    <div className='container fillForm'>
                        <div className="card">
                            <p>Sign up for ur career</p>
                            <input type='email' name="email" placeholder="Email.." required onChange={this.handleChange} /><br />
                            <input type='text' name='regno' placeholder='Reg.No' required onChange={this.handleChange} /><br />
                            <input type='name' name='uname' placeholder='Name' required onChange={this.handleChange} /><br />
                            <input type='password' name='password' placeholder='Password' required onChange={this.handleChange} /><br />
                            <input type='password' name='conf_pwd' placeholder='Conform Password' required onChange={this.handleChange} /><br />
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