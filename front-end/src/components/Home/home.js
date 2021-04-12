import React, { Component } from 'react';
import './home.css'
import InterviewInfo from '../InterviewInfo/InterviewInfo'
// import {browserHistory} from 'react-router-dom'

const myData = [{ company: 'Infosys', name: 'myname', experience: 'nsmzhzxjbsgdhzgmnjak,bchjdsnnsmzhzxjbsgdhzgmnjak,bchjdsnnsmzhzxjbsgdhzgmnjak,bchjdsnnsmzhzxjbsgdhzgmnjak,bchjdsnnsmzhzxjbsgdhzgmnjak,bchjdsnnsmzhzxjbsgdhzgmnjak,bchjdsnnsmzhzxjbsgdhzgmnjak,bchjdsnnsmzhzxjbsgdhzgmnjak,bchjdsnnsmzhzxjbsgdhzgmnjak,bchjdsnnsmzhzxjbsgdhzgmnjak,bchjdsnnsmzhzxjbsgdhzgmnjak,bchjdsnnsmzhzxjbsgdhzgmnjak,bchjdsnnsmzhzxjbsgdhzgmnjak,bchjdsn', id: 1 },
{company: 'Infosys', name: 'myname', experience: 'nsmzhzxjbsgdhzgmnjak,bchjdsnnsmzhzxjbsgdhzgmnjak,bchjdsnnsmzhzxjbsgdhzgmnjak,bchjdsnnsmzhzxjbsgdhzgmnjak,bchjdsnnsmzhzxjbsgdhzgmnjak,bchjdsnnsmzhzxjbsgdhzgmnjak,bchjdsnnsmzhzxjbsgdhzgmnjak,bchjdsnnsmzhzxjbsgdhzgmnjak,bchjdsnnsmzhzxjbsgdhzgmnjak,bchjdsnnsmzhzxjbsgdhzgmnjak,bchjdsnnsmzhzxjbsgdhzgmnjak,bchjdsnnsmzhzxjbsgdhzgmnjak,bchjdsnnsmzhzxjbsgdhzgmnjak,bchjdsn', id: 2 },
{ company: 'Infosys', name: 'myname', experience: 'nsmzhzxjbsgdhzgmnjak,bchjdsnnsmzhzxjbsgdhzgmnjak,bchjdsnnsmzhzxjbsgdhzgmnjak,bchjdsnnsmzhzxjbsgdhzgmnjak,bchjdsnnsmzhzxjbsgdhzgmnjak,bchjdsnnsmzhzxjbsgdhzgmnjak,bchjdsnnsmzhzxjbsgdhzgmnjak,bchjdsnnsmzhzxjbsgdhzgmnjak,bchjdsnnsmzhzxjbsgdhzgmnjak,bchjdsnnsmzhzxjbsgdhzgmnjak,bchjdsnnsmzhzxjbsgdhzgmnjak,bchjdsnnsmzhzxjbsgdhzgmnjak,bchjdsnnsmzhzxjbsgdhzgmnjak,bchjdsn', id: 3 },
{ company: 'Infosys', name: 'myname', experience: 'nsmzhzxjbsgdhzgmnjak,bchjdsnnsmzhzxjbsgdhzgmnjak,bchjdsnnsmzhzxjbsgdhzgmnjak,bchjdsnnsmzhzxjbsgdhzgmnjak,bchjdsnnsmzhzxjbsgdhzgmnjak,bchjdsnnsmzhzxjbsgdhzgmnjak,bchjdsnnsmzhzxjbsgdhzgmnjak,bchjdsnnsmzhzxjbsgdhzgmnjak,bchjdsnnsmzhzxjbsgdhzgmnjak,bchjdsnnsmzhzxjbsgdhzgmnjak,bchjdsnnsmzhzxjbsgdhzgmnjak,bchjdsnnsmzhzxjbsgdhzgmnjak,bchjdsnnsmzhzxjbsgdhzgmnjak,bchjdsn', id: 4 },
{ company: 'Infosys', name: 'myname', experience: 'nsmzhzxjbsgdhzgmnjak,bchjdsnnsmzhzxjbsgdhzgmnjak,bchjdsnnsmzhzxjbsgdhzgmnjak,bchjdsnnsmzhzxjbsgdhzgmnjak,bchjdsnnsmzhzxjbsgdhzgmnjak,bchjdsnnsmzhzxjbsgdhzgmnjak,bchjdsnnsmzhzxjbsgdhzgmnjak,bchjdsnnsmzhzxjbsgdhzgmnjak,bchjdsnnsmzhzxjbsgdhzgmnjak,bchjdsnnsmzhzxjbsgdhzgmnjak,bchjdsnnsmzhzxjbsgdhzgmnjak,bchjdsnnsmzhzxjbsgdhzgmnjak,bchjdsnnsmzhzxjbsgdhzgmnjak,bchjdsn', id: 5 },
]

class Home extends Component {
    constructor(props) {
        super(props)
        // this.state = {
        //     displayModal: false
        // }
    }
    onNavigateExperience(userId) {
        this.props.history.push("/InterviewInfo/" + userId);
        // console.log('kshdjsgh')
        // this.setState({
        //     displayModal: true
        // })
    }
    render() {
        return (
            <div className='home'>
                <div className='row'>

                    {myData.map(item => {
                        return (
                            <div className='col-lg-6'>
                                <div onClick={() => this.onNavigateExperience(item.id)} className='button '>
                                    <div>
                                        <span>{item.company} | @{item.name}</span>
                                        <p>
                                            {`${item.experience.substring(0,50)}...`}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                    )}

                </div>
                {/* {this.state.displayModal && <InterviewInfo />} */}

            </div>
        )
    }
}
export default Home;
