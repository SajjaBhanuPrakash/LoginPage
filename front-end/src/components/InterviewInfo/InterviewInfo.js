import React, { Component } from 'react'
import './InterviewInfo.css'
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
// import ThumbDownAltIcon from '@material-ui/icons/ThumbDownAlt';
import ChatBubbleOutlineRoundedIcon from '@material-ui/icons/ChatBubbleOutlineRounded';
import CloseIcon from '@material-ui/icons/Close';
import { api_url } from "../config";

class InterviewInfo extends Component {

    constructor(props) {
        super(props)

        this.state = {
            displayComments: false,
            comment_msg: '',
            isLiked: false,
            postData: null,
            comments: []
        }
        // this.handleAddComment = this.handleAddComment.bind(this);
        // this.handleLikes = this.handleLikes.bind(this);
        // console.log(this.props)      
    }
    handleCommentsOpen = async (post_id) => {
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

    async componentDidMount() {
        const post_id = this.props.match?.params?.post_id
        // console.log(post_id)
        try {
            const post_result = await fetch(`${api_url}/posts/get_single_post?post_id=${post_id}`, {
                method: 'get',
                mode: 'no-cors',
                headers: {
                    "Accept": 'application/json',
                    'Content-type': 'application/json'
                },
            });
            const comments_result = await fetch(`${api_url}/posts/get_comments_for_post?post_id=${post_id}`, {
                method: 'get',
                mode: 'no-cors',
                headers: {
                    "Accept": 'application/json',
                    'Content-type': 'application/json'
                },
            });
            this.setState({
                // postData : JSON.parse(post_result)
                // comments: JSON.parse(comments_result),
                postData: {
                    post_id: 1, company: 'Amazon', name: 'Samson', experience: "I recently got a chance to interview with Amazon. I had three rounds. \nRound 1: It started with my introduction and then the interviewer quickly jumped to the coding part. I was asked two questions. \nThe first question was finding sliding window maximum. https://www.geeksforgeeks.org/sliding-window-maximum-maximum-of-all-subarrays-of-size-k/\nThe second one was to find the distance between two nodes of the Binary tree. https://www.geeksforgeeks.org/find-distance-between-two-nodes-of-a-binary-tree/\nThen the interviewer slightly modified the question – what if the node structure of that binary tree defines – value, parent. Given the two nodes. Find the distance between them.\nRound 2: This round was also a technical round wherein I was asked two coding problems.\nhttps://www.geeksforgeeks.org/k-largestor-smallest-elements-in-an-array/\nhttps://www.geeksforgeeks.org/find-excel-column-name-given-number/\nRound 3: This was the last round. We had a discussion related to my internships and projects. Then he asked me a couple of behavioral questions.\nThen he asked me DP problem. https://www.geeksforgeeks.org/longest-increasing-subsequence-dp-3/\nThe interviewers were very friendly. Overall the level was medium. One needs to be very calm during solving the problems. Be very clear about the time and space complexities and always speak while you are thinking. Discuss your solution with the interviewer and then only move onto writing the code. Always ask your interviewer if you are stuck or if you have any doubts. \nVerdict: Selected\nGeeksforGeeks is a great place to learn Data structures and Algorithms, which is the most important part of the interviews.\nAll the best!", likes: 3, id: 4,
                },
                comments : [{ userName: 'Abcd', message: 'comment comment comment comment comment comment comment comment' },
                    { userName: 'efgh', message: 'comment comment comment comment comment comment comment comment' },
                    { userName: 'ijkl', message: 'comment comment comment comment comment comment comment comment' },
                    { userName: 'mnop', message: 'comment comment comment comment comment comment comment comment' },
                    { userName: 'qrst', message: 'comment comment comment comment comment comment comment comment' },
                    { userName: 'uvwx', message: 'comment comment comment comment comment comment comment comment' },
                    { userName: 'yzab', message: 'comment comment comment comment comment comment comment comment' },
                    { userName: 'yzab', message: 'comment comment comment comment comment comment comment comment' },
                    ],
            })
        } catch (e) {
            console.log(e)
        }
    }

    handleAddComment = async (event,post_id) => {
        try {
            const result = await fetch(`${api_url}/posts/add_comment_to_post`, {
                method: 'post',
                mode: 'no-cors',
                headers: {
                    "Accept": 'application/json',
                    'Content-type': 'application/json'
                },
                body: JSON.stringify({
                    post_id: post_id,
                    comment: event.target.value,
                    author : JSON.parse(sessionStorage.getItem('username'))
                })
            });

            const comments_result = await fetch(`${api_url}/posts/get_comments_for_post?post_id=${post_id}`, {
                method: 'get',
                mode: 'no-cors',
                headers: {
                    "Accept": 'application/json',
                    'Content-type': 'application/json'
                },
            });

            this.setState ({
                // comments: JSON.parse(comments_result)
                comments : [{ userName: 'Abcd', message: 'comment comment comment comment comment comment comment comment' },
                    { userName: 'efgh', message: 'comment comment comment comment comment comment comment comment' },
                    { userName: 'ijkl', message: 'comment comment comment comment comment comment comment comment' },
                    { userName: 'mnop', message: 'comment comment comment comment comment comment comment comment' },
                    { userName: 'qrst', message: 'comment comment comment comment comment comment comment comment' },
                    { userName: 'uvwx', message: 'comment comment comment comment comment comment comment comment' },
                    { userName: 'yzab', message: 'comment comment comment comment comment comment comment comment' },
                    { userName: 'yzab', message: 'comment comment comment comment comment comment comment comment' },
                    { userName: 'efgh', message: 'comment comment comment comment comment comment comment comment' },
                    ], 
            })

        } catch (e) {
            console.log(e)
        }
    }

    handleLikes = async (post_id) => {
        try {
            // &user_name=${}
            const result = await fetch(`${api_url}/posts/like_post?post_id=${post_id}`, {
                method: 'post',
                mode: 'no-cors',
                headers: {
                    "Accept": 'application/json',
                    'Content-type': 'application/json'
                }
            })
        } catch (e) {
            console.log(e)
        }

    }
    render() {
        const postData = this.state.postData;
        if (postData) {
            return (
                <div className="post-holder">
                    <div className='post'>
                        <div className='post-header'>
                            <div className='post-company'>
                                <span>{postData.company}</span>
                            </div>
                            <div className="post-owner">
                                <span>-@{postData.name}</span>
                            </div>
                        </div>
                        <div className='post-content hideScroll'>
                            <p>
                                {postData.experience}
                            </p>
                        </div>
                        <div className='post-footer'>
                            <div className='icons'>
                                <span><ThumbUpIcon className='thumbUp' onClick={()=> this.handleLikes(postData.post_id)} /> {postData.likes}</span>
                                <span><ChatBubbleOutlineRoundedIcon className='commentButton' onClick={() => this.handleCommentsOpen(postData.post_id)} /> {this.state.comments && this.state.comments.length}</span>
                            </div>
                        </div>
                    </div>
                    {
                        this.state.displayComments
                        &&
                        <div className='comment-holder'>
                            <div className='closeIcon'>
                                <CloseIcon onClick={this.handleCommentsClose} />
                            </div>
                            <div className='allComments hideScroll'>
                                {
                                    this.state.comments?.length>0 &&
                                    this.state.comments.map(comment => {
                                        return (
                                            <div className='comment'>
                                                <span className='comment-owner'>{comment.userName}:</span>
                                                <span className='comment-message'>{comment.message}</span>
                                            </div>
                                        )
                                    }
                                    )
                                }
                            </div>
                            <div className='comment-footer'>
                                <textarea rows='1' cols='20' name='comment_msg' placeholder='Add your comment..' className='addComment hideScroll' />
                                <button type='button' onClick={(event) => this.handleAddComment(event,postData.post_id)} className='postComment'>Post</button>
                            </div>
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






















// import React, { Component } from 'react';
// import { withStyles } from '@material-ui/core/styles';
// import Modal from '@material-ui/core/Modal';
// import Backdrop from '@material-ui/core/Backdrop';
// import Fade from '@material-ui/core/Fade';

// const styles = theme => ({
//     modal: {
//         display: 'flex',
//         alignItems: 'center',
//         justifyContent: 'center',
//     },
//     paper: {
//         backgroundColor: theme.palette.background.paper,
//         border: '2px solid #000',
//         boxShadow: theme.shadows[5],
//         padding: theme.spacing(2, 4, 3),
//     },
// });

// //const useStyles = makeStyles((theme) => ({
// //     modal: {
// //         display: 'flex',
// //         alignItems: 'center',
// //         justifyContent: 'center',
// //     },
// //     paper: {
// //         backgroundColor: theme.palette.background.paper,
// //         border: '2px solid #000',
// //         boxShadow: theme.shadows[5],
// //         padding: theme.spacing(2, 4, 3),
// //     },
// // }));


// class InterviewInfo extends Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             open: true
//         }
//     }

//     handleOpen = () => {
//         this.setState({
//             open: true
//         })
//     };

//     handleClose = () => {
//         this.setState({
//             open: false
//         })
//     };
//     render() {
//         // const classes = this.usestyles();
//         const { classes, userId } = this.props;
//         console.log('m,sbdvhhfhsbkjzkg')
//         const userId = this.props.match.params.userId

//         return (
//             <div>
//                 {/* <button type="button" onClick={this.handleOpen}>
//                     react-transition-group
//                 </button> */}
//                 <Modal
//                     aria-labelledby="transition-modal-title"
//                     aria-describedby="transition-modal-description"
//                     className={classes.modal}
//                     open={this.state.open}
//                     onClose={this.handleClose}
//                     closeAfterTransition
//                     BackdropComponent={Backdrop}
//                     BackdropProps={{
//                         timeout: 500,
//                     }}
//                 >
//                     <Fade in={this.state.open}>
//                         <div className={classes.paper}>
//                             {/* <h2 id="transition-modal-title">Transition modal</h2>
//                             <p id="transition-modal-description">react-transition-group animates me.</p> */}
//                             user:{userId}
//                         </div>
//                     </Fade>
//                 </Modal>
//             </div>
//         )
//     }
// }

