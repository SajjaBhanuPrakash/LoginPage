import React, { Component } from 'react';
import './createPost.css';
import { api_url } from '../config';

class CreatePost extends Component {

    constructor(props) {
        super(props)

        this.state = {
            company_name: '',
            role: '',
            package: '',
            post_description: '',
            errors: {
                role: { hasError: true, message: '' },
                package: { hasError: true, message: '' },
                companyName: { hasError: true, message: '' },
                experience: { hasError: true, message: '' }
            }
        }

        this.handleSubmit = this.handleSubmit.bind(this);

    }


    handleCancel = () => {
        this.props.history.goBack(-1)
    }


    handleChange = (event) => {
        event.preventDefault();
        const { name, value } = event.target;
        let errors = this.state.errors;
        switch (name) {
            case 'role':
                if (value.length > 0) {
                    errors.role.message = '';
                    errors.role.hasError = false;
                } else {
                    errors.role.message = 'Fill this field';
                    errors.role.hasError = true;
                }
                break;
            case 'companyName':
                if (value.length > 0) {
                    errors.company_name.message = '';
                    errors.company_name.hasError = false;
                } else {
                    errors.company_name.message = 'Fill this field';
                    errors.company_name.hasError = true;
                }
                break;
            case 'package':
                if (value.length > 0) {
                    errors.package.message = '';
                    errors.package.hasError = false;
                } else {
                    errors.package.message = 'Fill this field';
                    errors.package.hasError = true;
                }
                break;
            case 'experience':
                if (value.length > 0) {
                    errors.post_description.message = '';
                    errors.post_description.hasError = false;
                } else {
                    errors.post_description.message = 'Fill this field';
                    errors.post_description.hasError = true;
                }
                break;
            default:
                break;
        }
        this.setState({
            errors,
            [name]: value
        })
    }

    validateForm = errors => {
        const temp = Object.values(errors);
        const valid = !temp.some(val => val.hasError);
        return valid;
    };

    async handleUpdate() {
        if (this.validateForm(this.state.errors)) {
            fetch(`${api_url}/post/update_post`, {
                method: 'post',
                mode: 'no-cors',
                headers: {
                    'Accept': 'application/json',
                    'Content-type': 'application/json'
                },
                body: JSON.stringify({
                    author: JSON.parse(sessionStorage.getItem('username')),
                    role: this.state.role,
                    company_name: this.state.companyName,
                    post_description: this.state.experience,
                    package: this.state.package,
                })
            }).then(res => {
                console.log(res)
                if (!res.ok) {
                    throw new Error('Network response was not ok');
                } else {
                    this.props.history.push('/Profile')
                    alert('post updated successfully')
                }
            }).catch(err => {
                console.log(err);
                alert('Failed to update post')
            });
        }
    }

    handleSubmit() {
        if (this.validateForm(this.state.errors)) {
            fetch(`${api_url}/post/create_post`, {
                method: 'post',
                mode: 'no-cors',
                headers: {
                    'Accept': 'application/json',
                    'Content-type': 'application/json'
                },
                body: JSON.stringify({
                    author: JSON.parse(sessionStorage.getItem('username')),
                    role: this.state.role,
                    company_name: this.state.companyName,
                    post_description: this.state.experience,
                    package: this.state.package,
                })
            }).then(res => {
                console.log(res)
                if (!res.ok) {
                    throw new Error('Network response was not ok');
                } else {
                    this.props.history.push('/Profile')
                    alert('post created successfully')
                }
            }).catch(err => {
                console.log(err);
                alert('Failed to create post')
            });
        }
    }

    handleGetPostData = (post_id) => {
        fetch(`${api_url}/post/get_single_post?post_id=${post_id}`, {
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
            this.setState({
                company_name : res.company_name,
                role: res.role,
                package: res.package,
                post_description: res.post_description,
            })
        }).catch(err => {
            console.log(err);
            alert('Failed to create post')
        });
    }

    componentDidMount() {
        const post_id = this.props.params?.match?.post_id;
        if (this.props.location?.onUpdatePost) {
            this.handleGetPostData(post_id)
        }
    }

    render() {
        const { errors } = this.state;
        return (
            <div className='holder p-1'>
                <div className='row content'>
                    <p className='h2'>Create New Post</p>
                    <div className='inputfields'>
                        <input type='text' name='companyName' placeholder='Company Name' value={this.state.companyName} onChange={this.handleChange} />
                        <span className="error">{errors.companyName.message}</span>
                        <input type='text' name='role' placeholder='Role' value={this.state.role} onChange={this.handleChange} />
                        <span className="error">{errors.role.message}</span>
                        <input type='text' name='package' placeholder='Package' value={this.state.package} onChange={this.handleChange} />
                        <span className="error">{errors.package.message}</span>
                    </div>
                    <label for='experience' className='h4'>Experience</label><br />
                    <textarea rows='10' cols='50' name='experience' className='exp hideScroll' value={this.state.experience} placeholder='Write your experience here..' onChange={this.handleChange} />
                    <span className="error">{errors.experience.message}</span>
                    <div className="text-center">
                        {this.props.location?.onUpdatePost ?
                            <button type='button' onClick={() => this.handleUpdate(this.props.params?.match?.post_id)} className='btn'>Update</button>
                            :
                            <button type='button' onClick={this.handleSubmit} className='btn'>Create</button>
                        }
                        <button type='button' onClick={this.handleCancel} className='btn'>Cancel</button>
                    </div>
                    {/* <input type='text' placeholder='Company Name' />    */}
                </div>
            </div>
        )
    }
}

export default CreatePost;
