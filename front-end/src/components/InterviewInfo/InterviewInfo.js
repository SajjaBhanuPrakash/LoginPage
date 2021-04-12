import React, { Component } from 'react'
import './InterviewInfo.css'
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbDownAltIcon from '@material-ui/icons/ThumbDownAlt';
import ChatBubbleOutlineRoundedIcon from '@material-ui/icons/ChatBubbleOutlineRounded';
import CloseIcon from '@material-ui/icons/Close';

// import {
//     useParams
// } from "react-router-dom";
const comments = [{ userName: 'vinitha', message: 'comment comment comment comment comment comment comment comment' },
{ userName: 'vinitha', message: 'comment comment comment comment comment comment comment comment' },
{ userName: 'vinitha', message: 'comment comment comment comment comment comment comment comment' },
{ userName: 'vinitha', message: 'comment comment comment comment comment comment comment comment' },
{ userName: 'vinitha', message: 'comment comment comment comment comment comment comment comment' },
{ userName: 'vinitha', message: 'comment comment comment comment comment comment comment comment' },
{ userName: 'vinitha', message: 'comment comment comment comment comment comment comment comment' },
]

let likes = 0
let dislikes = 0
let commentCount = 0 
class InterviewInfo extends Component {

    constructor(props) {
        super(props)
        {
            this.state = {
                displayComments: false,
                comment_msg: '',
                isLiked: false,
                isDisliked: false,
            }
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
    handleAddComment = (event) => {
        // console.log("hello")
        commentCount += 1;
        this.setState(
            {
                comment_msg: event.target.value
            }
        )
    }

    handleLikes = (prevState) => {
        if(!this.state.isDisliked && !this.state.isLiked){
            likes += 1;
            this.setState({
                isLiked: !prevState.isLiked,
            })

        }
    }

    handleDisLikes = (prevState) => {
        if(!this.state.isDisliked && !this.state.isLiked){
            dislikes += 1;
            this.setState({
                isDisliked: !prevState.isDisliked,
            })
        }
    }
    render() {
        const userId = this.props.match.params.userId
        return (
            <div className="post-holder">
                <div className='post'>
                    <div className='post-header'>
                        <div className='post-company'>
                            <span>INFOSYS</span>
                        </div>
                        <div className="post-owner">
                            <span>-@Bhavya</span>
                        </div>
                    </div>
                    <div className='post-content hideScroll'>
                        <p>
                            hdgtfdfgjhdsbchgfekszjgfyxjhvbsdhiwauytefghadvsjzhclyucsge
                            jsghbndahakduzygxvsdbnajhyuzcfxghvdam,bhdliagSCYukhvjbd,jakwhhudli
                            bsnjdxhskgvbsjzckhiugydkahwvbjkdsiljzcyugdshvbkqljsadliczuyghdzsavbjHSK
                            AHJSDKZLUCIXGYSHDVBDYISTGUSJEWIUYFDGSH
                            khsdbjfskwaityefgvbjdkhlzfysufzhoiazhuidshdbvxhyksgseygduzvhyxgdufkj
                            sbxnzchvhdsj,cgSJZGcuyfafwryhjhdsuydvbchblxvkidjegufsydgsxjvhlifdhsgyuefdjgvbj,udh
                            ckjxbjhxgdshvkhbhjvdj,xj cbnjhb
                            hdgtfdfgjhdsbchgfekszjgfyxjhvbsdhiwauytefghadvsjzhclyucsge
                            jsghbndahakduzygxvsdbnajhyuzcfxghvdam,bhdliagSCYukhvjbd,jakwhhudli
                            bsnjdxhskgvbsjzckhiugydkahwvbjkdsiljzcyugdshvbkqljsadliczuyghdzsavbjHSK
                            AHJSDKZLUCIXGYSHDVBDYISTGUSJEWIUYFDGSH
                            khsdbjfskwaityefgvbjdkhlzfysufzhoiazhuidshdbvxhyksgseygduzvhyxgdufkj
                            sbxnzchvhdsj,cgSJZGcuyfafwryhjhdsuydvbchblxvkidjegufsydgsxjvhlifdhsgyuefdjgvbj,udh
                            ckjxbjhxgdshvkhbhjvdj,xj cbnjhb
                            hdgtfdfgjhdsbchgfekszjgfyxjhvbsdhiwauytefghadvsjzhclyucsge
                            jsghbndahakduzygxvsdbnajhyuzcfxghvdam,bhdliagSCYukhvjbd,jakwhhudli
                            bsnjdxhskgvbsjzckhiugydkahwvbjkdsiljzcyugdshvbkqljsadliczuyghdzsavbjHSK
                            AHJSDKZLUCIXGYSHDVBDYISTGUSJEWIUYFDGSH
                            khsdbjfskwaityefgvbjdkhlzfysufzhoiazhuidshdbvxhyksgseygduzvhyxgdufkj
                            sbxnzchvhdsj,cgSJZGcuyfafwryhjhdsuydvbchblxvkidjegufsydgsxjvhlifdhsgyuefdjgvbj,udh
                            ckjxbjhxgdshvkhbhjvdj,xj cbnjhb
                            hdgtfdfgjhdsbchgfekszjgfyxjhvbsdhiwauytefghadvsjzhclyucsge
                            jsghbndahakduzygxvsdbnajhyuzcfxghvdam,bhdliagSCYukhvjbd,jakwhhudli
                            bsnjdxhskgvbsjzckhiugydkahwvbjkdsiljzcyugdshvbkqljsadliczuyghdzsavbjHSK
                            AHJSDKZLUCIXGYSHDVBDYISTGUSJEWIUYFDGSH
                            khsdbjfskwaityefgvbjdkhlzfysufzhoiazhuidshdbvxhyksgseygduzvhyxgdufkj
                            sbxnzchvhdsj,cgSJZGcuyfafwryhjhdsuydvbchblxvkidjegufsydgsxjvhlifdhsgyuefdjgvbj,udh
                            ckjxbjhxgdshvkhbhjvdj,xj cbnjhb
                        </p>
                    </div>
                    {/* <hr className='mt-0 text-dark'/> */}
                    <div className='post-footer'>
                        <div className='icons'>
                            <div>
                                <span className='m-3'><ThumbUpIcon className='thumbUp' onClick={this.handleLikes}/>{likes}</span>
                                <span><ThumbDownAltIcon className='thumbDown' onClick={this.handleDisLikes}/>{dislikes}</span>
                            </div>
                            <span><ChatBubbleOutlineRoundedIcon className='commentButton' onClick={this.handleCommentsOpen} />{commentCount}</span>
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
                                    comments.map(comment => {
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

