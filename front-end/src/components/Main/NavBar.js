import React from 'react';
import { api_url } from '../config';
import {
    Link
} from "react-router-dom";
import { connect } from "react-redux";


class NavBar extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            loggeIn: false
        }
    }

    handleLogout = async () => {
        //     try {
        //         const result = await fetch(`${api_url}/logout?user_name=${sessionStorage.getItem('username')}`, {
        //             method: 'get',
        //             mode: 'no-cors',
        //             headers: {
        //                 "Accept": 'application/json',
        //                 'Content-type': 'application/json'
        //             },
        //         });
        //         sessionStorage.setItem('username', '');
        //         sessionStorage.setItem('loggedIn', false);
        //         this.props.history.push({
        //             pathname: '/',
        //             fromSearch: true,
        //             state: JSON.parse(result)
        //         });
        //     } catch (e) {
        //         console.log(e)
        //     }
    }

    render() {
        const loggedIn = JSON.parse(sessionStorage.getItem('loggedin'))
        return (
            <div className='menuItems'>
                <ul>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    {!loggedIn &&
                        <>
                            <li>
                                <Link to='/Login'>Login</Link>
                            </li>
                            <li>
                                <Link to='/Signup'>Signup</Link>
                            </li>
                        </>
                    }
                    {loggedIn &&
                        <>
                            <li>
                                <Link to='/Profile'>Profile</Link>
                            </li>
                            <li>
                                <Link to='/CreatePost'>Add Post</Link>
                            </li>
                            <li>
                                <Link onClick={this.handleLogout}>logout</Link>
                            </li>
                        </>
                    }
                </ul>

            </div>
        )
    }

}

export const mapStateToProps = (state) => ({
    loggedIn: state.MainReducer.loggedIn,
});
export default connect(mapStateToProps)(NavBar);