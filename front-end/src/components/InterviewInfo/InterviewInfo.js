import React, { Component } from 'react'
import './InterviewInfo.css'
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
// import ThumbDownAltIcon from '@material-ui/icons/ThumbDownAlt';
import ChatBubbleOutlineRoundedIcon from '@material-ui/icons/ChatBubbleOutlineRounded';
import CloseIcon from '@material-ui/icons/Close';

// import {
//     useParams
// } from "react-router-dom";
let item;
// const post={companyName:"Infosys", userName: "Bhavya",likes: 3, experience:"nsdbg agsj ngsjabs gdsahgj hgdshag gdsyg hgsdyg hgsdyg gsyg hgsy hgxyudegw hgdhsg hdgshfuytf esfdh dewfydw gefhddbsgd sdhgew dewhgew ehgrh wehgr hgew uw hgrh wgrn ygejrh hgfej ",commentCount: 0 }
class InterviewInfo extends Component {

    constructor(props) {
        super(props)

        this.state = {
            displayComments: false,
            comment_msg: '',
            isLiked: false,
        }
        this.handleAddComment = this.handleAddComment.bind(this);
        this.handleLikes = this.handleLikes.bind(this);
        // console.log(this.props)      
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
    async handleAddComment(event) {
        // console.log("hello")
        this.setState(
            {
                comment_msg: event.target.value
            }
        )

        try {
            const result = await fetch('/add_comment', {
                method: 'post',
                mode: 'no-cors',
                headers: {
                    "Accept": 'application/json',
                    'Content-type': 'application/json'
                },
                body: JSON.stringify({
                    comment_msg: this.state.comment_msg
                })
            });

        } catch (e) {
            console.log(e)
        }
    }

    async handleLikes(prevState) {
        if (!this.state.isLiked) {
            this.setState({
                isLiked: !prevState.isLiked,
            })
        }

        try {
            const result = await fetch('/add_comment', {
                method: 'post',
                mode: 'no-cors',
                headers: {
                    "Accept": 'application/json',
                    'Content-type': 'application/json'
                },
                body: JSON.stringify({
                    likes: item.likes + 1
                })
            });

        } catch (e) {
            console.log(e)
        }

    }

    // componentDidMount() {
    //     console.log(item)
    // }
    render() {
        // const userId = this.props.match.params.userId
        item = this.props.location.state;
        console.log(item)
        if (item) {
            return (
                <div className="post-holder">
                    <div className='post'>
                        <div className='post-header'>
                            <div className='post-company'>
                                <span>{item.company}</span>
                            </div>
                            <div className="post-owner">
                                <span>-@{item.name}</span>
                            </div>
                        </div>
                        <div className='post-content hideScroll'>
                            <p>
                                {item.experience}
                            </p>
                        </div>
                        <div className='post-footer'>
                            <div className='icons'>
                                <span><ThumbUpIcon className='thumbUp' onClick={this.handleLikes} /> {item.likes}</span>
                                <span><ChatBubbleOutlineRoundedIcon className='commentButton' onClick={this.handleCommentsOpen} /> {item.comments && item.comments.length}</span>
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
                                    item.comments &&
                                    item.comments.map(comment => {
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
                                <button type='button' onClick={this.handleAddComment} className='postComment'>Post</button>
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


















//  function InterviewInfo() {
//     // We can use the `useParams` hook here to access
//     // the dynamic pieces of the URL.
//     let { userId } = useParams();

//     return (
//       <div>
//         <h3>ID: {userId}</h3>
//       </div>
//     );
//   }























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

