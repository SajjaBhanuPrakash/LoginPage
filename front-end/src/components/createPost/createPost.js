import React, { Component } from 'react';
import './createPost.css';
class CreatePost extends Component {

    constructor(props) {
        super(props)

        this.state = {
            companyName : '',
            role: "",
            package : '',
            experience : ""
        }

        this.handleSubmit = this.handleSubmit.bind(this);

    }
    async handleSubmit() {
        try {
            const result = await fetch('/new_post', {
                method: 'post',
                mode: 'no-cors',
                headers: {
                    "Accept" : 'application/json',
                    'Content-type' : 'application/json'
                },
                body: JSON.stringify({
                    companyName: this.state.companyName,
                    role: this.state.role,
                    package: this.state.package,
                    experience: this.state.experience
                })
            });

            this.props.history.push('/')

        } catch(e) {
            console.log(e)
        }
    }

    handleCancel = () => {
        this.props.history.goBack(-1)
    }


    handleChange = (event) => {
        this.setState({
            [event.target.name]  : event.target.value
        })
    }
    render() {
        return (
            <div className='holder p-1'>
                <div className='row content'>
                    <p className='h2'>Create New Post</p>
                    <div className='inputfields'>
                        <input type='text' name='companyName' placeholder='Company Name' onChange={this.handleChange}/>
                        <input type='text' name='role' placeholder='Role' onChange={this.handleChange}/>
                        <input type='text' name='package' placeholder='Package' onChange={this.handleChange}/>
                    </div>
                    <label for='experience' className='h4'>Experience</label><br />
                    <textarea rows='10' cols='50' name='experience' className='exp hideScroll' placeholder='Write your experience here..' onChange={this.handleChange}/>
                    <div className="text-center">
                        <button type='button' onClick={this.handleSubmit} className='btn'>Create</button>
                        <button type='button' onClick={this.handleCancel} className='btn'>Cancel</button>
                    </div>
                    {/* <input type='text' placeholder='Company Name' />    */}
                </div>
            </div>
        )
    }
}

export default CreatePost;
