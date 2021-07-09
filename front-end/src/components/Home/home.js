import React, { Component } from 'react';
import './home.css';
import InterviewInfo from '../InterviewInfo/InterviewInfo';
import { api_url } from "../config";
import { withRouter } from 'react-router';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import axios from 'axios';

class Home extends Component {
    constructor(props) {
        super(props)

        this.state = {
            myData: [],
        }
    }
    onNavigateExperience(post_id) {
        console.log(post_id);
        this.props.history.push({
            pathname: `/InterviewInfo/${post_id}`,
        });
    }
    componentDidMount() {
        if (this.props.location?.fromSearch) {
            this.setState({
                myData: this.props.location.state,
            });
            alert('from Search')
        }
        else if (JSON.parse(sessionStorage.getItem('loggedin'))) {
            axios.get(`${api_url}/post/get_user_interested_posts?user_name=${JSON.parse(sessionStorage.getItem('username'))}`)
                .then(res => {
                    alert('after Logged in successfully');
                    this.setState({
                        myData: res.data
                    })
                }).catch(err => {
                    alert('Failed to get data on login');
                });
        } else if (this.props.fromProfile) {
            this.setState({
                myData: this.props.postsData
            });
            alert('from profile');
        } else {
            axios.get(`${api_url}/post/get_all_posts`)
                .then(res => {
                    // alert('before login');
                    console.log(res)
                    this.setState({
                        myData: res.data
                    })
                }).catch(err => {
                    alert('Failed to get before login');
                });
        }
    }
    handleDeletePost = (post_id) => {
        // const r = confirm('Are you sure? Delete the post');
        // if (r == true) {}
        alert('are you sure');
        fetch(`${api_url}/post/delete_post?post_id=${post_id}`, {
            method: 'get',
            mode: 'no-cors',
            headers: {
                "Accept": 'application/json',
                'Content-type': 'application/json'
            },
        }).then(res => {
            console.log(res);
            if (!res.ok) {
                throw new Error('Network response was not ok');
            } else {
                return res.json();
            }
        }).then(res => {
            this.props.history.push('/Profile');
        }).catch(err => {
            alert('Failed to delete Post');
        });
    }
    handleUpdatePost = (post_id) => {
        this.props.history.push({
            pathname: '/CreatePost',
            onUpdatePost: true,
            state: post_id
        })
    }
    render() {
        return (
            <div className='home hideScroll'>
                <div className='row '>
                    {this.state.myData && this.state.myData.length > 0 ? this.state.myData.map(item => {
                        return (
                            <div className=''>
                                <div className='button'>
                                    <div>
                                        <div className='d-flex justify-content-between'>
                                            <div>
                                                <span style={{ fontSize: 30, fontWeight: 'bold' }}>{item.company_name} | </span>
                                                <span style={{ fontSize: 20, fontWeight: 'bold' }}>@{item.author}</span>
                                            </div>
                                            {this.props.fromProfile &&
                                                <div>
                                                    <span style={{ margin: 20 }}><DeleteIcon style={{ cursor: 'pointer' }} onClick={() => this.handleDeletePost(item.post_id)} /></span>
                                                    <span ><EditIcon style={{ cursor: 'pointer' }} onClick={() => this.handleUpdatePost(item.post_id)} /></span>
                                                </div>
                                            }
                                        </div>
                                        <p onClick={() => this.onNavigateExperience(item.post_id)} style={{ fontSize: 20, padding: 10, margin: 0, cursor: 'pointer' }}>
                                            {`${item.post_description.substring(0, 100)}...`}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                    ) : <div className='whenNoData'>No posts available </div>}

                </div>
            </div>
        )
    }
}
export default withRouter(Home);

// myData: [{post_id: 1, company: 'Amazon', name: 'Samson', experience: "I recently got a chance to interview with Amazon. I had three rounds. \nRound 1: It started with my introduction and then the interviewer quickly jumped to the coding part. I was asked two questions. \nThe first question was finding sliding window maximum. https://www.geeksforgeeks.org/sliding-window-maximum-maximum-of-all-subarrays-of-size-k/\nThe second one was to find the distance between two nodes of the Binary tree. https://www.geeksforgeeks.org/find-distance-between-two-nodes-of-a-binary-tree/\nThen the interviewer slightly modified the question – what if the node structure of that binary tree defines – value, parent. Given the two nodes. Find the distance between them.\nRound 2: This round was also a technical round wherein I was asked two coding problems.\nhttps://www.geeksforgeeks.org/k-largestor-smallest-elements-in-an-array/\nhttps://www.geeksforgeeks.org/find-excel-column-name-given-number/\nRound 3: This was the last round. We had a discussion related to my internships and projects. Then he asked me a couple of behavioral questions.\nThen he asked me DP problem. https://www.geeksforgeeks.org/longest-increasing-subsequence-dp-3/\nThe interviewers were very friendly. Overall the level was medium. One needs to be very calm during solving the problems. Be very clear about the time and space complexities and always speak while you are thinking. Discuss your solution with the interviewer and then only move onto writing the code. Always ask your interviewer if you are stuck or if you have any doubts. \nVerdict: Selected\nGeeksforGeeks is a great place to learn Data structures and Algorithms, which is the most important part of the interviews.\nAll the best!", likes: 3, id: 4,}]
//myData: [{
//     post_id: 1, company: 'Amazon', name: 'Samson', experience: "I recently got a chance to interview with Amazon. I had three rounds. \nRound 1: It started with my introduction and then the interviewer quickly jumped to the coding part. I was asked two questions. \nThe first question was finding sliding window maximum. https://www.geeksforgeeks.org/sliding-window-maximum-maximum-of-all-subarrays-of-size-k/\nThe second one was to find the distance between two nodes of the Binary tree. https://www.geeksforgeeks.org/find-distance-between-two-nodes-of-a-binary-tree/\nThen the interviewer slightly modified the question – what if the node structure of that binary tree defines – value, parent. Given the two nodes. Find the distance between them.\nRound 2: This round was also a technical round wherein I was asked two coding problems.\nhttps://www.geeksforgeeks.org/k-largestor-smallest-elements-in-an-array/\nhttps://www.geeksforgeeks.org/find-excel-column-name-given-number/\nRound 3: This was the last round. We had a discussion related to my internships and projects. Then he asked me a couple of behavioral questions.\nThen he asked me DP problem. https://www.geeksforgeeks.org/longest-increasing-subsequence-dp-3/\nThe interviewers were very friendly. Overall the level was medium. One needs to be very calm during solving the problems. Be very clear about the time and space complexities and always speak while you are thinking. Discuss your solution with the interviewer and then only move onto writing the code. Always ask your interviewer if you are stuck or if you have any doubts. \nVerdict: Selected\nGeeksforGeeks is a great place to learn Data structures and Algorithms, which is the most important part of the interviews.\nAll the best!", likes: 3, id: 4,
// },
// {
//     post_id: 2, company: 'Infosys', name: 'Abcd', experience: 'nsm zh zxjbsgdh zgmnjak,b chjdsnnsm zhzxjbsg dhzgmnja k,bchjd snns mzhzxj bsgdhzg mnjak, bchjdsnns  mzhzxjbs gdhzgmnja k,bchjd snnsmzhzxj bsgdhzgmn jak,bch jdsnnsmzh zxjbsg dhzgmnj ak,bchjdsn nsmzhzxjbsg dhzgmn jak,bchjdsnn smzhzxjbsgd hzgmnjak,bchj dsnnsmzh zxjbsg dhzgmnjak, bchjdsnnsmzhz xjbsgd hzgmnjak,bc hjdsnnsmzhzxj bsgdhzgmnjak ,bchjdsnnsmz hzxjbsgdh zgmn jak,bch j dsn nsmzh zxjbsg dhzgmn jak,bch jdsn', likes: 4, id: 5,
// }
// ]






            // fetch(`${api_url}/post/get_user_interested_posts?user_name=${JSON.parse(sessionStorage.getItem('username'))}`, {
            //     method: 'get',
            //     mode: 'no-cors',
            //     headers: {
            //         "Accept": 'application/json',
            //         'Content-type': 'application/json'
            //     },
            // })
            // .then(res => {
            //     console.log(res);
            //     if (!res.ok) {
            //         throw new Error('Network response was not ok');
            //     } else {
            //     return res.json();
            //     }
            // }).then(res => {
            //     alert('after Logged in successfully');
            //     this.setState({
            //         myData: res
            //     })
            // }).catch(err => {
            //     alert('Failed to get data on login');
            // });




            // fetch(`${api_url}/post/get_all_posts?`, {
            //     method: 'get',
            //     mode: 'no-cors',
            //     headers: {
            //         "Accept": 'application/json',
            //         'Content-type': 'application/json'
            //     },
            // }).then(res => {
            //     console.log(res)
            //     if (!res.ok) {
            //         throw new Error('Network response was not ok');
            //     } else {
            //         return res.json();
            //     }
            // }).then(res => {
            //     console.log('from home', res);
            //     alert('after Logged in successfully');
            //     this.setState({
            //         myData: res
            //     })
            // }).catch(err => {
            //     // alert('Failed to get data before login');
            // });