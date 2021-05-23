import React, { Component } from 'react';
import './showPosts.css'
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbDownAltIcon from '@material-ui/icons/ThumbDownAlt';
import ChatBubbleOutlineRoundedIcon from '@material-ui/icons/ChatBubbleOutlineRounded';
// import CloseIcon from '@material-ui/icons/Close';


const posts = [{role:'role',name: 'xyz', company: 'Company', package: '3.6', experience: "hdgtf dfgjhds bchgf ekszj gfyx jhv bsdhiw auytef ghadv sjzhc lyuc sge js ghbnd ahak duzyg xvsdbna jhyuzc fxgh vdam,b hdliagSC Yukhvj bd,j akwhhu dli" },
{role:'role',name: 'xyz', company: 'Company', package: '3.6', experience: "hdg tfd fgjhd sbch gfeksz jgfyxj hvbsdh iwauyte fghad vsjzhc lyuc sge jsghbnd ahakdu zygxv sdbnaj hyuzc fxghvd am,bh dliagSC Yukh vjbd, jakwh hudli " },
{role:'role',name: 'xyz', company: 'Company', package: '3.6', experience: "hdg tfdf gjhd s bchgf eksz jgfyxj hvbsd hiwauy tefg hadvs jzh clyu csge jsghbn dahakd uzyg xv sdbna jhyuzcfx ghvdam, bhdli agSC Yukhv jbd, jakwh hudli" },
{role:'role',name: 'xyz', company: 'Company', package: '3.6', experience: "hdg tfdfgjh dsbchgf ekszjgfyxj hvbsdhiwau ytefghad vsjzhcl yucsge jsghbn daha kduzyg xvsdbnaj h yuzcfxghv dam,bh dliagSC Yukhv jbd,ja  kwhh udli" },
{role:'role',name: 'xyz', company: 'Company', package: '3.6', experience: "hdgtf  d fgjhdsb chgfek szjgf yxjhv bsdhi w auyte fg hadvsjzhc lyucsge js ghbnd ahakduzygxv sdbn ajhyuzcf xghvdam, bhdlia gSCYukhv jbd,ja kwhh udli" }]



class ShowPosts extends Component {
    render() {
        return (
            <div className='holder p-0'>
                <div className='row hideScroll'>
                    {posts.map(post => {
                        return (
                            <div className='interview-post pt-0 col-sm-12 col-md-12 col-lg-6'>
                                <div>
                                    <p className='company'>{post.company}</p>

                                    <label for='role' className='h4'>Role: </label>
                                    <span className='role' name='role'>{post.role}</span><br/>

                                    <label for='package' className="h4">Package:</label>
                                    <span className="package" name="package">{post.package}</span><br />

                                    <label for='experience' className='h4'>Experience : </label>
                                    <p className='experience' name='experience'>
                                        {post.experience}
                                    </p>

                                </div>
                                <div className='post-footer'>
                                    <div className='Icons'>
                                        <span className='m-3'><ThumbUpIcon className='thumbUp' onClick={this.handleLikes} />likes</span>
                                        <span className='m-3'><ChatBubbleOutlineRoundedIcon className='commentButton' onClick={this.handleCommentsOpen} />commentCount</span>
                                    </div>
                                </div>
                            </div>
                        )
                    })}

                </div>
            </div>
        )
    }
}

export default ShowPosts;
