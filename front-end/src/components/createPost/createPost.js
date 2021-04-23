import React, { Component } from 'react';
import './createPost.css';
class CreatePost extends Component {
    render() {
        return (
            <div className='holder'>
                <div className='row content'>
                    <p className='h2'>Create New Post</p>
                    <div className=''>
                        <input type='text' placeholder='Company Name' />
                        <input type='text' placeholder='Package' />
                    </div>
                    <label for='experience' className='h4'>Experience</label><br />
                    <textarea rows='10' cols='50' name='experience' className='exp' placeholder='Write your experience here..' />
                    <button type='button' onClick={this.handleSubmit} className='btn '>Create</button>
                    {/* <input type='text' placeholder='Company Name' />    */}
                </div>
            </div>
        )
    }
}

export default CreatePost;
