import React, { Component } from 'react'
import './InterviewInfo.css'
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
// import ThumbDownAltIcon from '@material-ui/icons/ThumbDownAlt';
import ChatBubbleOutlineRoundedIcon from '@material-ui/icons/ChatBubbleOutlineRounded';
import CloseIcon from '@material-ui/icons/Close';
import { api_url } from "../config";
import axios from 'axios';

class InterviewInfo extends Component {

    constructor(props) {
        super(props)

        this.state = {
            displayComments: false,
            comment_msg: '',
            isLiked: false,
            postData: null,
            comments: [],
            isLoading: true
        }
    }
    handleCommentsOpen = (post_id) => {
        this.setState(
            {
                displayComments: true
            }
        )
    }
    handleCommentsClose = () => {
        this.setState(
            {
                displayComments: false
            }
        )
    }

    handlePostData = (post_id) => {
        axios.get(`${api_url}/post/get_single_post?post_id=${post_id}`)
            .then(res => {
                // alert('data fetched');
                this.setState({
                    postData: res.data[0],
                    isLoading: false
                })
            }).catch(err => {
                alert('failed to fetch data');
            });

    }

    handleCommentData = (post_id) => {
        fetch(`${api_url}/post/get_comments_for_post?post_id=${post_id}`, {
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
            alert('comments fetched');
            this.setState({
                comments: res
            })
        }).catch(err => {
            alert('failed to fetch comments');
        });
    }

    handleAddComment = (event, post_id) => {
        fetch(`${api_url}/post/add_comment_to_post`, {
            method: 'post',
            mode: 'no-cors',
            headers: {
                "Accept": 'application/json',
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                post_id: post_id,
                comment: event.target.value,
                author: JSON.parse(sessionStorage.getItem('username'))
            })
        }).then(res => {
            console.log(res);
            if (!res.ok) {
                throw new Error('Network response was not ok');
            } else {
                alert('comment added successfully');
                this.handleCommentData(this.state.postData.post_id)
            }
        }).catch(err => {
            alert('Failed to add comment');
        });
    }

    handleLikes = (post_id) => {
        if (!this.state.myData?.liked_by(JSON.parse(sessionStorage.getItem('username')))) {
            axios.post(`${api_url}/post/like_post`, JSON.stringify({
                user_name: JSON.parse(sessionStorage.getItem('username')),
                post_id: post_id
            })).then(res => {
                alert('liked successfully')
                this.handlePostData(post_id)
            }).catch(err => {
                alert('Failed to like');
            });
        } else {
            axios.post(`${api_url}/post/like_post`, JSON.stringify({
                user_name: JSON.parse(sessionStorage.getItem('username')),
                post_id: post_id
            })).then(res => {
                alert('disliked successfully');
                this.handlePostData(post_id);
            }).catch(err => {
                alert('Failed to like');
            });
        }
    }

    componentDidMount() {
        const post_id = this.props.match?.params?.post_id
        this.handlePostData(post_id)
    }
    render() {
        const postData = this.state.postData;
        if (this.state.isLoading) {
            return <h5>Loading...</h5>
        }
        if (postData) {
            return (
                <div className="post-holder">
                    <div className='post'>
                        <div className='post-header'>
                            <div className='post-company'>
                                <span>{postData.company_name}</span>
                            </div>
                            <div className="post-owner">
                                <span>-@{postData.author}</span>
                            </div>
                        </div>
                        <div className='post-content hideScroll'>
                            <p>
                                {postData.post_description}
                            </p>
                        </div>
                        <div className='post-footer'>
                            <div className='icons'>
                                <span><ThumbUpIcon className='thumbUp' onClick={() => this.handleLikes(postData.post_id)} /> {postData.likes}</span>
                                <span><ChatBubbleOutlineRoundedIcon className='commentButton' onClick={() => this.handleCommentsOpen(postData.post_id)} /> {postData.comments}</span>
                            </div>
                        </div>
                    </div>
                    {
                        this.state.displayComments
                        &&
                        (
                            postData.comments > 0 ?
                                <div className='comment-holder'>
                                    <div className='closeIcon'>
                                        <CloseIcon onClick={this.handleCommentsClose} />
                                    </div>
                                    <div className='allComments hideScroll'>
                                        {
                                            this.state.comments?.length > 0 &&
                                            this.state.comments.map(comment => {
                                                return (
                                                    <div className='comment'>
                                                        <span className='comment-owner'>{comment.userName}:</span>
                                                        <span className='comment-message'>{comment.message}</span>
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                    <div className='comment-footer'>
                                        <textarea rows='1' cols='20' name='comment_msg' placeholder='Add your comment..' className='addComment hideScroll' />
                                        <button type='button' onClick={(event) => this.handleAddComment(event, postData.post_id)} className='postComment'>Post</button>
                                    </div>
                                </div>
                                :
                                <div className='allComments'>
                                    <div className='whenNoData'>No Comments for this Post yet</div>
                                    <div className='comment-footer'>
                                        <textarea rows='1' cols='20' name='comment_msg' placeholder='Add your comment..' className='addComment hideScroll' />
                                        <button type='button' onClick={(event) => this.handleAddComment(event, postData.post_id)} className='postComment'>Post</button>
                                    </div>
                                </div>
                        )
                    }
                </div>
            )
        }
        else {
            return null;
        }
    }
}

export default InterviewInfo;




// this.setState({
//     // comments: JSON.parse(comments_result)
//     comments: [{ userName: 'Abcd', message: 'comment comment comment comment comment comment comment comment' },
//     { userName: 'efgh', message: 'comment comment comment comment comment comment comment comment' },
//     { userName: 'ijkl', message: 'comment comment comment comment comment comment comment comment' },
//     { userName: 'mnop', message: 'comment comment comment comment comment comment comment comment' },
//     { userName: 'qrst', message: 'comment comment comment comment comment comment comment comment' },
//     { userName: 'uvwx', message: 'comment comment comment comment comment comment comment comment' },
//     { userName: 'yzab', message: 'comment comment comment comment comment comment comment comment' },
//     { userName: 'yzab', message: 'comment comment comment comment comment comment comment comment' },
//     { userName: 'efgh', message: 'comment comment comment comment comment comment comment comment' },
//     ],
// })

// this.setState({
//     // postData : JSON.parse(post_result)
//     // comments: JSON.parse(comments_result),
//     postData: {
//         post_id: 1, company: 'Amazon', name: 'Samson', experience: "I recently got a chance to interview with Amazon. I had three rounds. \nRound 1: It started with my introduction and then the interviewer quickly jumped to the coding part. I was asked two questions. \nThe first question was finding sliding window maximum. https://www.geeksforgeeks.org/sliding-window-maximum-maximum-of-all-subarrays-of-size-k/\nThe second one was to find the distance between two nodes of the Binary tree. https://www.geeksforgeeks.org/find-distance-between-two-nodes-of-a-binary-tree/\nThen the interviewer slightly modified the question – what if the node structure of that binary tree defines – value, parent. Given the two nodes. Find the distance between them.\nRound 2: This round was also a technical round wherein I was asked two coding problems.\nhttps://www.geeksforgeeks.org/k-largestor-smallest-elements-in-an-array/\nhttps://www.geeksforgeeks.org/find-excel-column-name-given-number/\nRound 3: This was the last round. We had a discussion related to my internships and projects. Then he asked me a couple of behavioral questions.\nThen he asked me DP problem. https://www.geeksforgeeks.org/longest-increasing-subsequence-dp-3/\nThe interviewers were very friendly. Overall the level was medium. One needs to be very calm during solving the problems. Be very clear about the time and space complexities and always speak while you are thinking. Discuss your solution with the interviewer and then only move onto writing the code. Always ask your interviewer if you are stuck or if you have any doubts. \nVerdict: Selected\nGeeksforGeeks is a great place to learn Data structures and Algorithms, which is the most important part of the interviews.\nAll the best!", likes: 3, id: 4,
//     },
//     comments: [{ userName: 'Abcd', message: 'comment comment comment comment comment comment comment comment' },
//     { userName: 'efgh', message: 'comment comment comment comment comment comment comment comment' },
//     { userName: 'ijkl', message: 'comment comment comment comment comment comment comment comment' },
//     { userName: 'mnop', message: 'comment comment comment comment comment comment comment comment' },
//     { userName: 'qrst', message: 'comment comment comment comment comment comment comment comment' },
//     { userName: 'uvwx', message: 'comment comment comment comment comment comment comment comment' },
//     { userName: 'yzab', message: 'comment comment comment comment comment comment comment comment' },
//     { userName: 'yzab', message: 'comment comment comment comment comment comment comment comment' },
//     ],
// })





// fetch(`${api_url}/post/get_single_post?post_id=${post_id}`, {
        //     method: 'get',
        //     mode: 'no-cors',
        //     headers: {
        //         "Accept": 'application/json',
        //         'Content-type': 'application/json'
        //     },
        // }).then(res => {
        //     console.log(res);
        //     if (!res.ok) {
        //         throw new Error('Network response was not ok');
        //     } else {
        //         return res.json();
        //     }
        // }).then(res => {
        //     alert('data fetched');
        //     this.setState({
        //         postData: res
        //     })
        // }).catch(err => {
        //     alert('failed to fetch data');
        // });




// fetch(`${api_url}/post/like_post`, {
            //     method: 'post',
            //     mode: 'no-cors',
            //     headers: {
            //         "Accept": 'application/json',
            //         'Content-type': 'application/json'
            //     },
            //     body: JSON.stringify({
            //         user_name: JSON.parse(sessionStorage.getItem('username')),
            //         post_id: post_id
            //     })
            // }).then(res => {
            //     console.log(res);
            //     if (!res.ok) {
            //         throw new Error('Network response was not ok');
            //     } else {
            //         alert('liked successfully')
            //         this.handlePostData(post_id)
            //     }
            // }).catch(err => {
            //     alert('Failed to like');
            // });



            // fetch(`${api_url}/post/like_post`, {
            //     method: 'post',
            //     mode: 'no-cors',
            //     headers: {
            //         "Accept": 'application/json',
            //         'Content-type': 'application/json'
            //     },
            //     body: JSON.stringify({
            //         user_name: JSON.parse(sessionStorage.getItem('username')),
            //         post_id: post_id
            //     })
            // }).then(res => {
            //     console.log(res);
            //     if (!res.ok) {
            //         throw new Error('Network response was not ok');
            //     } else {
            //         alert('disliked successfully');
            //         this.handlePostData(post_id);
            //     }
            // }).catch(err => {
            //     alert('Failed to like');
            // });