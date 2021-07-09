import React, { Component } from 'react';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import './profile.css';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ChatBubbleOutlineRoundedIcon from '@material-ui/icons/ChatBubbleOutlineRounded';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { api_url } from '../config';
import Home from '../Home/home';

class Profile extends Component {

    constructor(props) {
        super(props)
        this.state = {
            data: {
                userData: null,
                posts: [],
            }
        }
    }


    componentDidMount() {
        fetch(`${api_url}/users/get_user?user_name=${JSON.parse(sessionStorage.getItem('username'))}`, {
            method: 'get',
            mode: 'no-cors',
            headers: {
                "Accept": 'application/json',
                'Content-type': 'application/json'
            },
        }).then(res => {
            console.log(res)
            if (!res.ok) {
                throw new Error('Network response was not ok');
            } else {
                return res.json()
            }
        }).then(res => {
            console.log(res)
            this.setState({
                data: res
            })
        }).catch(err => {
            console.log(err);
            alert('Failed to create post')
        });

        // this.setState({
        //     // data: JSON.parse(result)
        //     data:
        //     {
        //         user_data: { company: 'company', uname: 'name', regno: '17l31a0500', email: 'email@gmail.com' },
        //         user_posts: [{ post_id: 1, role: 'role', name: 'xyz', company: 'Company', package: '3.6', experience: "hdgtf dfgjhds bchgf ekszj gfyx jhv bsdhiw auytef ghadv sjzhc lyuc sge js ghbnd ahak duzyg xvsdbna jhyuzc fxgh vdam,b hdliagSC Yukhvj bd,j akwhhu dli" },
        //         { post_id: 2, role: 'role', name: 'xyz', company: 'Company', package: '3.6', experience: "hdg tfd fgjhd sbch gfeksz jgfyxj hvbsdh iwauyte fghad vsjzhc lyuc sge jsghbnd ahakdu zygxv sdbnaj hyuzc fxghvd am,bh dliagSC Yukh vjbd, jakwh hudli " },
        //         ]

        //     }
        // })
    }
    render() {
        // const userData = this.state.data?.user_data ? this.state.data.user_data : null;
        // console.log(userData)

        // const posts = this.state.data?.user_posts ? this.state.data.user_posts : [];
        // console.log(posts)
        // if (userData) {
        //     return (
        //         <div className='profile-page hideScroll'>
        //             <div className='profile-holder mb-3'>
        //                 <div className='profile'>
        //                     <AccountCircleIcon style={{ fontSize: 150, color: "rgb(255, 255, 200)" }} />
        //                     <br />
        //                     <button type='button' className='btn' onclick={this.handleUpdateProfile}>Update</button>
        //                 </div>
        //                 <div className='details'>
        //                     <table border='0' style={{ width: '400px' }}>
        //                         <tr>
        //                             <th>Name:</th>
        //                             <td>{userData.user_name}</td>
        //                         </tr>
        //                         <tr>
        //                             <th>Email:</th>
        //                             <td>{userData.email}</td>
        //                         </tr>
        //                         <tr>
        //                             <th>Company:</th>
        //                             <td>{userData.current_company}</td>
        //                         </tr>
        //                         <tr>
        //                             <th>Reg.No:</th>
        //                             <td>{userData.regno}</td>
        //                         </tr>
        //                     </table>
        //                 </div>
        //             </div>
        //             {/* for posts */}
        //             {posts &&
        //                 <Home fromProfile={true} postsData={posts} />
        //             }
        //         </div>
        //     )
        // } else {
        //     return null;
        // }
        // }
        return null;
    }
}

export default Profile;

{/* <div className='holder p-0'>
    <div className='row hideScroll'>
        {posts.length > 0 && posts.map(post => {
            return (
                <div className='interview-post pt-0 col-sm-12 col-md-12 col-lg-6'>
                    <div>
                        <button onClick={this.handleMoreOptionsIcon}><MoreVertIcon /></button>
                        {
                            this.state.displayMoreOptions &&
                            <div >
                                <table>
                                    <tr>
                                        <td><button onclick={() => this.handleUpdatePost()}>update</button></td>
                                    </tr>
                                    <tr>
                                        <td><button onclick={this.handleDeletePost}>delete</button></td>
                                    </tr>
                                    <tr>
                                        <td><button onclick={this.handleMoreOptionsIcon}>close</button></td>
                                    </tr>
                                </table>
                            </div>
                        }
                        <p className='company'>{post.company}</p>

                        <label for='role' className='h4'>Role: </label>
                        <span className='role' name='role'>{post.role}</span><br />

                        <label for='package' className="h4">Package:</label>
                        <span className="package" name="package">{post.package}</span><br />

                        <label for='experience' className='h4'>Experience : </label>
                        <p className='experience' name='experience'>
                            {post.experience}
                        </p>

                    </div>
                    <div className='post-footer'>
                        <div className='Icons'>
                            <span className='m-3'><ThumbUpIcon className='thumbUp' />{post.likes}</span>
                            {/* <span className='m-3'><ChatBubbleOutlineRoundedIcon className='commentButton' />{post}</span> */}
//                         </div>
//                     </div>
//                 </div>
//             )
//         })}

//     </div>
// </div> 