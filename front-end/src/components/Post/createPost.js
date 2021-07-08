import React, { Component } from 'react';
import './createPost.css';
import { api_url } from '../config';

class CreatePost extends Component {

    constructor(props) {
        super(props)

        this.state = {
            companyName: '',
            role: '',
            package: '',
            experience: '',
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

        // if (value.length > 0) {
        //     errors.name.message = '';
        //     errors.name.hasError = false;
        // } else {
        //     errors.name.message = 'Fill this field';
        //     errors.name.hasError = true;
        // }
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
                    errors.companyName.message = '';
                    errors.companyName.hasError = false;
                } else {
                    errors.companyName.message = 'Fill this field';
                    errors.companyName.hasError = true;
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
                    errors.experience.message = '';
                    errors.experience.hasError = false;
                } else {
                    errors.experience.message = 'Fill this field';
                    errors.experience.hasError = true;
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

    async handleSubmit() {
        try {
            if (this.validateForm(this.state.errors)) {
                const result = await fetch(`${api_url}/posts/create_post`, {
                    method: 'post',
                    mode: 'no-cors',
                    headers: {
                        'Accept': 'application/json',
                        'Content-type': 'application/json'
                    },
                    body: JSON.stringify({
                        // author: 'bhavya',
                        role: this.state.role,
                        company_name: this.state.companyName,
                        post_description: this.state.experience,
                        package: this.state.package,
                    })
                });

                this.props.history.push('/')
            }

        } catch (e) {
            console.log(e)
        }
    }

    // async componentDidMount() {
    //     try {
    //         const result = await fetch(`${api_url}/posts/get_single_post?post_id=${post_id}`, {
    //             method: 'get',
    //             mode: 'no-cors',
    //             headers: {
    //                 "Accept": 'application/json',
    //                 'Content-type': 'application/json'
    //             },
    //         }).then(data => JSON.parse(data));
    //         this.setState({
    //             companyName: result.companyName,
    //             role: result.role,
    //             package: result.package,
    //             experience: result.experience,
    //         })
    //     } catch (e) {
    //         console.log(e)
    //     }
    // }

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
