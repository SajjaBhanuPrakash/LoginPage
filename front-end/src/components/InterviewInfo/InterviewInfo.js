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
    handleCommentsOpen = () => {
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
                console.log(res.data);
                this.setState({
                    postData: res.data[0],
                    isLoading: false
                })
            }).catch(err => {
                alert('failed to fetch data');
            });

    }

    handleCommentData = (post_id) => {
        axios.get(`${api_url}/post/get_comments_for_post?post_id=${post_id}`)
            .then(res => {
                console.log(res.data);
                this.setState({
                    comments: res.data
                })
            }).catch(err => {
                alert('failed to fetch comments');
            });
    }

    handleAddComment = (event, post_id) => {
        axios.post(`${api_url}/post/add_comment_to_post`, JSON.stringify({
            post_id: post_id,
            comment: event.target.value,
            author: JSON.parse(sessionStorage.getItem('username'))
        })).then(res => {
            console.log('comment added successfully');
            this.handleCommentData(this.state.postData.post_id)
        }).then(res => {
            this.handlePostData(this.state.postData.post_id)
        }).catch(err => {
            console.log('Failed to add comment');
        });
    }

    handleLikes = (post_id) => {
        if (this.state.postData?.liked_by.includes(JSON.parse(sessionStorage.getItem('username')))) {
            axios.get(`${api_url}/post/dislike_post?user_name=${JSON.parse(sessionStorage.getItem('username'))}&post_id=${post_id}`)
                .then(res => {
                    console.log('disliked successfully');
                    this.handlePostData(post_id);
                }).catch(err => {
                    console.log('Failed to like');
                });
        } else {
            axios.get(`${api_url}/post/like_post?user_name=${JSON.parse(sessionStorage.getItem('username'))}&post_id=${post_id}`)
                .then(res => {
                    console.log('liked successfully')
                    this.handlePostData(post_id)
                }).catch(err => {
                    console.log('Failed to like');
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
            return (
                <div className="row">
                    <div className="col-12 text-center mt-5">
                        <div class="spinner-border text-warning" role="status">
                            <span class="sr-only"></span>
                        </div>
                    </div>
                </div>
            )
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
                                <span><ThumbUpIcon className={this.state.postData?.liked_by.includes(JSON.parse(sessionStorage.getItem('username')))?'activeThumbup':'thumbUp'} onClick={() => this.handleLikes(postData.post_id)} style={{ cursor: 'pointer' }} />
                                    {postData.likes}
                                </span>
                                <span><ChatBubbleOutlineRoundedIcon className='commentButton' onClick={() => this.handleCommentsOpen()} style={{ cursor: 'pointer' }} />
                                    {postData.comments}
                                </span>
                            </div>
                        </div>
                    </div>
                    {
                        this.state.displayComments
                        &&
                        <div className='comment-holder'>
                            <div className='closeIcon'>
                                <CloseIcon onClick={this.handleCommentsClose} style={{ cursor: 'pointer' }} />
                            </div>
                            <div className='allComments hideScroll'>
                                {
                                    postData.comments > 0 ?
                                        this.state.comments.map(comment => {
                                            return (
                                                <div className='comment'>
                                                    <span className='comment-owner'>{comment.userName}:</span>
                                                    <span className='comment-message'>{comment.message}</span>
                                                </div>
                                            )
                                        })
                                        :
                                        <div className='allComments'>
                                            <div className='whenNoData'>No Comments for this Post yet</div>
                                        </div>
                                }
                            </div>
                            {
                                JSON.parse(sessionStorage.getItem('loggedin')) === true &&
                                <div className='comment-footer'>
                                    <textarea rows='1' cols='20' name='comment_msg' placeholder='Add your comment..' className='addComment hideScroll' />
                                    <button type='button' onClick={(event) => this.handleAddComment(event, postData.post_id)} className='postComment'>Post</button>
                                </div>
                            }
                        </div>
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


// fetch(`${api_url}/post/get_comments_for_post?post_id=${post_id}`, {
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
    //     alert('comments fetched');
    //     this.setState({
    //         comments: res
    //     })
    // }).catch(err => {
    //     alert('failed to fetch comments');
    // });