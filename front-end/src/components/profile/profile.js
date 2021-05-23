import React, { Component } from 'react';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import './profile.css'
import ShowPosts from './showPosts';

const profile = { uname: "name", branch: 'branch', regno: '17l31a0500', email: 'email@gmail.com' }

class Profile extends Component {

    constructor(props) {
        super(props)
    }



    render() {
        return (
            <div className='profile-page hideScroll'>
                <div className='profile-holder mb-3'>
                    <div className='profile'>
                        <AccountCircleIcon style={{ fontSize: 150, color: "rgb(255, 255, 200)" }} />
                        <br />
                        <button type='button' className='btn'>Update</button>
                    </div>
                    <div className='details'>
                        <table border='0' style={{ width: '400px' }}>
                            <tr>
                                <th>Name:</th>
                                <td>{profile.uname}</td>
                            </tr>
                            <tr>
                                <th>Email:</th>
                                <td>{profile.email}</td>
                            </tr>
                            <tr>
                                <th>Branch:</th>
                                <td>{profile.branch}</td>
                            </tr>
                            <tr>
                                <th>Reg.No:</th>
                                <td>{profile.regno}</td>
                            </tr>
                        </table>
                    </div>
                </div>
                <div>
                    <ShowPosts />
                </div>
            </div>
        )
    }
}

export default Profile;