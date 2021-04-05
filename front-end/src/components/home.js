import React, { Component } from 'react';
const myData = [{ name: 'myname', experience: 'nsmzhzxjbsgdhzgmnjak,bchjdsn' },
{ name: 'myname', experience: 'nsmzhzxjbsgdhzgmnjak,bchjdsn' },
{ name: 'myname', experience: 'nsmzhzxjbsgdhzgmnjak,bchjdsn' },
{ name: 'myname', experience: 'nsmzhzxjbsgdhzgmnjak,bchjdsn' },
{ name: 'myname', experience: 'nsmzhzxjbsgdhzgmnjak,bchjdsn' },
{ name: 'myname', experience: 'nsmzhzxjbsgdhzgmnjak,bchjdsn' },
{ name: 'myname', experience: 'nsmzhzxjbsgdhzgmnjak,bchjdsn' },
{ name: 'myname', experience: 'nsmzhzxjbsgdhzgmnjak,bchjdsn' },
{ name: 'myname', experience: 'nsmzhzxjbsgdhzgmnjak,bchjdsn' },
{ name: 'myname', experience: 'nsmzhzxjbsgdhzgmnjak,bchjdsn' },
{ name: 'myname', experience: 'nsmzhzxjbsgdhzgmnjak,bchjdsn' },
{ name: 'myname', experience: 'nsmzhzxjbsgdhzgmnjak,bchjdsn' },
{ name: 'myname', experience: 'nsmzhzxjbsgdhzgmnjak,bchjdsn' },
{ name: 'myname', experience: 'nsmzhzxjbsgdhzgmnjak,bchjdsn' },
{ name: 'myname', experience: 'nsmzhzxjbsgdhzgmnjak,bchjdsn' },
{ name: 'myname', experience: 'nsmzhzxjbsgdhzgmnjak,bchjdsn' },
{ name: 'myname', experience: 'nsmzhzxjbsgdhzgmnjak,bchjdsn' },
{ name: 'myname', experience: 'nsmzhzxjbsgdhzgmnjak,bchjdsn' },
{ name: 'myname', experience: 'nsmzhzxjbsgdhzgmnjak,bchjdsn' },
{ name: 'myname', experience: 'nsmzhzxjbsgdhzgmnjak,bchjdsn' },
{ name: 'myname', experience: 'nsmzhzxjbsgdhzgmnjak,bchjdsn' },
{ name: 'myname', experience: 'nsmzhzxjbsgdhzgmnjak,bchjdsn' },
{ name: 'myname', experience: 'nsmzhzxjbsgdhzgmnjak,bchjdsn' },
{ name: 'myname', experience: 'nsmzhzxjbsgdhzgmnjak,bchjdsn' },
{ name: 'myname', experience: 'nsmzhzxjbsgdhzgmnjak,bchjdsn' },
{ name: 'myname', experience: 'nsmzhzxjbsgdhzgmnjak,bchjdsn' },
{ name: 'myname', experience: 'nsmzhzxjbsgdhzgmnjak,bchjdsn' },
{ name: 'myname', experience: 'nsmzhzxjbsgdhzgmnjak,bchjdsn' },
{ name: 'myname', experience: 'nsmzhzxjbsgdhzgmnjak,bchjdsn' },
{ name: 'myname', experience: 'nsmzhzxjbsgdhzgmnjak,bchjdsn' },
{ name: 'myname', experience: 'nsmzhzxjbsgdhzgmnjak,bchjdsn' },
{ name: 'myname', experience: 'nsmzhzxjbsgdhzgmnjak,bchjdsn' },
{ name: 'myname', experience: 'nsmzhzxjbsgdhzgmnjak,bchjdsn' },
{ name: 'myname', experience: 'nsmzhzxjbsgdhzgmnjak,bchjdsn' },
{ name: 'myname', experience: 'nsmzhzxjbsgdhzgmnjak,bchjdsn' },
{ name: 'myname', experience: 'nsmzhzxjbsgdhzgmnjak,bchjdsn' },
{ name: 'myname', experience: 'nsmzhzxjbsgdhzgmnjak,bchjdsn' },
{ name: 'myname', experience: 'nsmzhzxjbsgdhzgmnjak,bchjdsn' },
{ name: 'myname', experience: 'nsmzhzxjbsgdhzgmnjak,bchjdsn' },
{ name: 'myname', experience: 'nsmzhzxjbsgdhzgmnjak,bchjdsn' },
{ name: 'myname', experience: 'nsmzhzxjbsgdhzgmnjak,bchjdsn' },
{ name: 'myname', experience: 'nsmzhzxjbsgdhzgmnjak,bchjdsn' },
{ name: 'myname', experience: 'nsmzhzxjbsgdhzgmnjak,bchjdsn' },
{ name: 'myname', experience: 'nsmzhzxjbsgdhzgmnjak,bchjdsn' },
{ name: 'myname', experience: 'nsmzhzxjbsgdhzgmnjak,bchjdsn' },
{ name: 'myname', experience: 'nsmzhzxjbsgdhzgmnjak,bchjdsn' },
{ name: 'myname', experience: 'nsmzhzxjbsgdhzgmnjak,bchjdsn' },
{ name: 'myname', experience: 'nsmzhzxjbsgdhzgmnjak,bchjdsn' },
{ name: 'myname', experience: 'nsmzhzxjbsgdhzgmnjak,bchjdsn' },
{ name: 'myname', experience: 'nsmzhzxjbsgdhzgmnjak,bchjdsn' },
{ name: 'myname', experience: 'nsmzhzxjbsgdhzgmnjak,bchjdsn' }
]
class Home extends Component {
    render() {
        return (
            <div className='Interview_exp'>
                <div className='row'>

                    {myData.map(i => {
                        return (
                            <div className='col-lg-4 col-md-6 col-sm-12 '>
                                <div className='container'>
                                    <div className="card">
                                        <label>Name: </label> {i.name}<br/>
                                        <label>Experience: </label> {i.experience}
                                    </div>
                                </div>
                            </div>
                        )
                    }
                    )}

                </div>
            </div>
        )
    }
}
export default Home;
