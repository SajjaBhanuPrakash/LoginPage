import React, { Component } from 'react';
import './home.css';
import InterviewInfo from '../InterviewInfo/InterviewInfo';
import { api_url } from "../config";
import { withRouter } from 'react-router';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
// import {browserHistory} from 'react-router-dom'

// const myData = [{ company: 'Infosys', name: 'Bhavya', experience: `Round- 1 Coding Round\nThe Coding round was held on the HackerEarth platform on 30th March 2020. It comprises 3 questions that vary in difficulty level. The time allotted to solve these questions is 3 hrs. I solved 1.5 questions and received invitation for 2nd round.\nRound-2: Coding Round\nThis Coding round was held on the same HackerEarth platform on 31st May 2020. It also comprises  3 questions but the level of the  questions increases. In this round, you won’t able to see the number of test cases your code has passed while submitting . Based on the performance one can be offered System Engineer Role (SE) , Systems Engineer Specialist Role (SES) or Power Programmer Role (PP).  \nI solved 1.5 questions and received a Pre-Placement\nInterview call for Systems Engineer Specialist role.\nRound-3: Interview:\nDue to the ongoing pandemic my Interview was held virtually on 27th September 2020 on Infosys Meridian platform and it lasted for around  25 minutes. I was asked to show my college id before starting the interview .\nInterviewer: Tell me something about yourself.\nMe: Answered.\nInterviewer:  What are your favourite subjects in Computer Science & Engineering?\nMe: DS,JAVA,OS,DBMS,OOPS, Software Engineering\nInterviewer:  What is DS and its types?\nMe:  Answered.\nInterviewer: What is Stack and why is it called LIFO?\nMe: Explained.\nInterviewer: What are the applications of Stack ?\nMe: Answered.\nInterviewer: Which operations can be performed on Stack?\nMe: Explained.

// Interviewer: What is linked list , its types and what are its applications?

// Me: Answered.

// Interviewer: What are the differences between Array and Linked List ?

// Me: Explained.

// Interviewer: What is Queue, its types  and why it is called FIFO?

// Me: Explained.

// Interviewer: Which operations can be performed on Queue ?

// Me: Explained.

// Interviewer: What are the applications of Queue?

// Me: Answered.

// Interviewer: How  can we  implement a stack  using queue?

// Me: Explained.

// You can refer to this link for better understanding https://www.geeksforgeeks.org/implement-stack-using-queue/.

// Interviewer: What tree is DS? What are the differences between binary tree and binary search tree?

// Me: explained.

// You can refer to this link https://www.geeksforgeeks.org/difference-between-binary-tree-and-binary-search-tree/

// Interviewer: Do you know what is  AVL tree?

// Me: yes, and explained him.

// Interviewer: What is SDLC and what are its basic stages?

// Me:  SDLC (Software Development Life Cycle) is the process of developing software through business needs, analysis, design, implementation and Release and maintenance. It has 6 phases: Planning And Requirement Analysis, Defining Requirements, Designing Architecture,  Developing Product, Product Testing and Integration ,Deployment and Maintenance Of Product.

// Interviewer: What are the different models of SDLC?

// Me: Waterfall model, Agile model, Iterative model, Spiral model etc.

// Interviewer: Explain Waterfall model.

// Me: Explained.

// Interviewer: What is OS?

// Me: Answered.

// Interviewer: As a computer science engineer name a software which is very essential in real life?

// Me: OS and explained.

// Interviewer: Tell me about your extracurricular activities.

// Me: Answered.

// Interviewer: Do you have any plans for higher studies?

// Me: I said not now as I want to explore myself in the corporate world and after 3-4 years I will think of it.

// Interviewer: Are you comfortable with travelling and stay to different locations?

// Me: yes

// Interviewer: what is the meaning of your name?

// Me: My name is Aishwarya and it means wealth.

// Interviewer: Do you have any question for me?

// Me: Thank you for giving me this opportunity. I would like to know what attributes does someone need to have in order to be really successful in this position.

//  I received my Selection Letter from Infosys for SES role after 2 months .

// I prepared for my interview from this link:  https://discuss.codechef.com/t/preparation-for-se-ses-pp-interview-hack-with-infy-and-infytq/70917

// Tips:

// Prepare your Resume well enough as they mainly ask questions from it.
// Have a strong grip on core CS subjects like  OOPS,DBMS,OS.
// Don’t panic before preparing.
// If you get any coding question to solve, apart from coding you try to tell each and every line to the interviewer  it reflects your logical ability.`,likes:0, id: 1, comments: [{ userName: 'Abcd', message: 'comment comment comment comment comment comment comment comment' },
// { userName: 'efgh', message: 'comment comment comment comment comment comment comment comment' },
// { userName: 'ijkl', message: 'comment comment comment comment comment comment comment comment' },
// { userName: 'mnop', message: 'comment comment comment comment comment comment comment comment' },
// { userName: 'qrst', message: 'comment comment comment comment comment comment comment comment' },
// { userName: 'uvwx', message: 'comment comment comment comment comment comment comment comment' },
// { userName: 'yzab', message: 'comment comment comment comment comment comment comment comment' },
// { userName: 'yzab', message: 'comment comment comment comment comment comment comment comment' },
// ] },
// { company: 'Tcs', name: 'Niveditha', experience: 'Round 1: I attempted the NQT test on 29th October 2020. The total duration of the test was 120 mins. The test consisted of the following 3 sections:\nNumerical Ability (26 questions – 40 mins)\nReasoning Ability (30 questions – 50 mins)\nVerbal Ability (24 questions – 30 mins)\nThe IT Programming NQT was scheduled for 21st February. This test consisted of :\n10 Programming MCQs (15 mins)\n2 coding questions (45 mins)\nI received a mail regarding the invite to an interview on 18th Nov 2020 stating that the interview was being scheduled on 19th Nov 2020.\nRound 2: It was a virtual interview. There were three-panel members, One for TR+MR+HR.\nHR Questions:\nAre you willing to relocate\nAre you comfortable with shifts\nMy percentage in 10th, 12th, and B.Tech degree.\nTR Questions:\nIntroduction and all the subjects that I have learned during my B.Tech journey.\nMy favorite coding language and subject.\nWhat is the difference between overloading and overriding? as I have chosen C++\nQuestions related to my projects. \nDBMS-related simple queries.\nWhat is normalization? Have can you do it?\nMR questions:\nCompetitors of TCS\nWhat I know about TCS?\nA situation in which I have to lead a group\nA situation in which I have failed to meet the deadline on time.\nMy hobbies apart from technical.\nHow I manage work and life?\nIf I have to do night shifts how I will handle, or I will be able to do it or not?\nIf I have to do overwork how I will manage my personal and professional life\nWhat about the company I have done an internship in?\nWhy TCS?\nIf you got an offer from any other company what you will do?\nWhy I am a suitable fit?\nNote: Be honest and only mention the information which you know of, in your resume. If you don’t know any answer, do not try to bluff or beat around the bush. Admit it that you are not very\nfamiliar or that you can not remember at the moment. Read about the latest trends in technology. All the very best!\nThe result was declared, and I got short-listed for the Ninja offer!',likes:1, id: 2,comments: [{ userName: 'Abcd', message: 'comment comment comment comment comment comment comment comment' },
// { userName: 'efgh', message: 'comment comment comment comment comment comment comment comment' },
// { userName: 'ijkl', message: 'comment comment comment comment comment comment comment comment' },
// { userName: 'mnop', message: 'comment comment comment comment comment comment comment comment' },
// { userName: 'qrst', message: 'comment comment comment comment comment comment comment comment' },
// { userName: 'uvwx', message: 'comment comment comment comment comment comment comment comment' },
// { userName: 'yzab', message: 'comment comment comment comment comment comment comment comment' },
// { userName: 'yzab', message: 'comment comment comment comment comment comment comment comment' },
// ] },
// { company: 'Cisco', name: 'Shashi', experience: 'Online:\n5 Programming Questions (easy to medium difficulty)\nTechnical Round 1:\nCheck whether an array has duplicates\nWrote code on notepad using sets (n + extra memory)\nAsked to do code review\nSuggested using sort (nlogn + no extra memory if quicksort)\nFind result set from a list of strings where each string represents last names of CISCO employees and the condition to add is the last name shouldn’t contain initials\nMultithreading questions – including mutex and semaphores\nHashMap internals and TreeMap\nTechnical Round 2:\nFind the first pair of elements that add up to a given sum in an array\nWrote code on notepad. (used sets)\nQuestions on REST\nQuestions on how we can make the best use of third party tools and integrate them with our system\nThread related programming type of questions\nCheck whether 2 rectangles are overlapping.\nManagerial HR:\nUsual questions like why would you join, what will you do in this situation, the technical problem faced and how you were able to solve, how will you bring up a new feature over an existing one.',likes:2, id: 3,comments: [{ userName: 'Abcd', message: 'comment comment comment comment comment comment comment comment' },
// { userName: 'efgh', message: 'comment comment comment comment comment comment comment comment' },
// { userName: 'ijkl', message: 'comment comment comment comment comment comment comment comment' },
// { userName: 'mnop', message: 'comment comment comment comment comment comment comment comment' },
// { userName: 'qrst', message: 'comment comment comment comment comment comment comment comment' },
// { userName: 'uvwx', message: 'comment comment comment comment comment comment comment comment' },
// { userName: 'yzab', message: 'comment comment comment comment comment comment comment comment' },
// { userName: 'yzab', message: 'comment comment comment comment comment comment comment comment' },
// ] },
// { company: 'Amazon', name: 'Samson', experience: "I recently got a chance to interview with Amazon. I had three rounds. \nRound 1: It started with my introduction and then the interviewer quickly jumped to the coding part. I was asked two questions. \nThe first question was finding sliding window maximum. https://www.geeksforgeeks.org/sliding-window-maximum-maximum-of-all-subarrays-of-size-k/\nThe second one was to find the distance between two nodes of the Binary tree. https://www.geeksforgeeks.org/find-distance-between-two-nodes-of-a-binary-tree/\nThen the interviewer slightly modified the question – what if the node structure of that binary tree defines – value, parent. Given the two nodes. Find the distance between them.\nRound 2: This round was also a technical round wherein I was asked two coding problems.\nhttps://www.geeksforgeeks.org/k-largestor-smallest-elements-in-an-array/\nhttps://www.geeksforgeeks.org/find-excel-column-name-given-number/\nRound 3: This was the last round. We had a discussion related to my internships and projects. Then he asked me a couple of behavioral questions.\nThen he asked me DP problem. https://www.geeksforgeeks.org/longest-increasing-subsequence-dp-3/\nThe interviewers were very friendly. Overall the level was medium. One needs to be very calm during solving the problems. Be very clear about the time and space complexities and always speak while you are thinking. Discuss your solution with the interviewer and then only move onto writing the code. Always ask your interviewer if you are stuck or if you have any doubts. \nVerdict: Selected\nGeeksforGeeks is a great place to learn Data structures and Algorithms, which is the most important part of the interviews.\nAll the best!",likes:3, id: 4,
// comments: [{ userName: 'Abcd', message: 'comment comment comment comment comment comment comment comment' },
// { userName: 'efgh', message: 'comment comment comment comment comment comment comment comment' },
// { userName: 'ijkl', message: 'comment comment comment comment comment comment comment comment' },
// { userName: 'mnop', message: 'comment comment comment comment comment comment comment comment' },
// { userName: 'qrst', message: 'comment comment comment comment comment comment comment comment' },
// { userName: 'uvwx', message: 'comment comment comment comment comment comment comment comment' },
// { userName: 'yzab', message: 'comment comment comment comment comment comment comment comment' },
// { userName: 'yzab', message: 'comment comment comment comment comment comment comment comment' },
// ] },
// { company: 'Infosys', name: 'Abcd', experience: 'nsm zh zxjbsgdh zgmnjak,b chjdsnnsm zhzxjbsg dhzgmnja k,bchjd snns mzhzxj bsgdhzg mnjak, bchjdsnns  mzhzxjbs gdhzgmnja k,bchjd snnsmzhzxj bsgdhzgmn jak,bch jdsnnsmzh zxjbsg dhzgmnj ak,bchjdsn nsmzhzxjbsg dhzgmn jak,bchjdsnn smzhzxjbsgd hzgmnjak,bchj dsnnsmzh zxjbsg dhzgmnjak, bchjdsnnsmzhz xjbsgd hzgmnjak,bc hjdsnnsmzhzxj bsgdhzgmnjak ,bchjdsnnsmz hzxjbsgdh zgmn jak,bch j dsn nsmzh zxjbsg dhzgmn jak,bch jdsn',likes:4, id: 5, comments: [{ userName: 'Abcd', message: 'comment comment comment comment comment comment comment comment' },
// { userName: 'efgh', message: 'comment comment comment comment comment comment comment comment' },
// { userName: 'ijkl', message: 'comment comment comment comment comment comment comment comment' },
// { userName: 'mnop', message: 'comment comment comment comment comment comment comment comment' },
// { userName: 'qrst', message: 'comment comment comment comment comment comment comment comment' },
// { userName: 'uvwx', message: 'comment comment comment comment comment comment comment comment' },
// { userName: 'yzab', message: 'comment comment comment comment comment comment comment comment' },
// { userName: 'yzab', message: 'comment comment comment comment comment comment comment comment' },
// ] },
// ]

class Home extends Component {
    constructor(props) {
        super(props)

        this.state = {
            myData: [],
        }
    }
    onNavigateExperience(post_id) {
        console.log(post_id);
        this.props.history.push({
            pathname: `/InterviewInfo/${post_id}`,
        });
    }
    async componentDidMount() {
        if (this.props.location?.fromSearch) {
            this.setState({
                myData: this.props.location.state,
            })
            console.log('1')
        }
        else if (JSON.parse(sessionStorage.getItem('loggedin'))) {
            try {
                const posts = await fetch(`${api_url}/posts/get_user_interested_posts?user_name=${JSON.parse(sessionStorage.getItem('username'))}`, {
                    method: 'get',
                    mode: 'no-cors',
                    headers: {
                        "Accept": 'application/json',
                        'Content-type': 'application/json'
                    },
                });
                console.log('2')
                this.setState({
                    // myData: JSON.parse(posts)
                    myData: [{
                        post_id: 1, company: 'Amazon', name: 'Samson', experience: "I recently got a chance to interview with Amazon. I had three rounds. \nRound 1: It started with my introduction and then the interviewer quickly jumped to the coding part. I was asked two questions. \nThe first question was finding sliding window maximum. https://www.geeksforgeeks.org/sliding-window-maximum-maximum-of-all-subarrays-of-size-k/\nThe second one was to find the distance between two nodes of the Binary tree. https://www.geeksforgeeks.org/find-distance-between-two-nodes-of-a-binary-tree/\nThen the interviewer slightly modified the question – what if the node structure of that binary tree defines – value, parent. Given the two nodes. Find the distance between them.\nRound 2: This round was also a technical round wherein I was asked two coding problems.\nhttps://www.geeksforgeeks.org/k-largestor-smallest-elements-in-an-array/\nhttps://www.geeksforgeeks.org/find-excel-column-name-given-number/\nRound 3: This was the last round. We had a discussion related to my internships and projects. Then he asked me a couple of behavioral questions.\nThen he asked me DP problem. https://www.geeksforgeeks.org/longest-increasing-subsequence-dp-3/\nThe interviewers were very friendly. Overall the level was medium. One needs to be very calm during solving the problems. Be very clear about the time and space complexities and always speak while you are thinking. Discuss your solution with the interviewer and then only move onto writing the code. Always ask your interviewer if you are stuck or if you have any doubts. \nVerdict: Selected\nGeeksforGeeks is a great place to learn Data structures and Algorithms, which is the most important part of the interviews.\nAll the best!", likes: 3, id: 4,
                    },]
                })
            } catch (e) {
                console.log(e)
            }
        } else if (this.props.fromProfile) {
            this.setState({
                myData: this.props.postsData
            })
            console.log('3')
        } else {

            try {
                const result = await fetch(`${api_url}/posts/get_all_posts`, {
                    method: 'get',
                    mode: 'no-cors',
                    headers: {
                        "Accept": 'application/json',
                        'Content-type': 'application/json'
                    },
                });
                console.log('4')
                this.setState({
                    // myData: JSON.parse(result)
                    myData: [{
                        post_id: 1, company: 'Amazon', name: 'Samson', experience: "I recently got a chance to interview with Amazon. I had three rounds. \nRound 1: It started with my introduction and then the interviewer quickly jumped to the coding part. I was asked two questions. \nThe first question was finding sliding window maximum. https://www.geeksforgeeks.org/sliding-window-maximum-maximum-of-all-subarrays-of-size-k/\nThe second one was to find the distance between two nodes of the Binary tree. https://www.geeksforgeeks.org/find-distance-between-two-nodes-of-a-binary-tree/\nThen the interviewer slightly modified the question – what if the node structure of that binary tree defines – value, parent. Given the two nodes. Find the distance between them.\nRound 2: This round was also a technical round wherein I was asked two coding problems.\nhttps://www.geeksforgeeks.org/k-largestor-smallest-elements-in-an-array/\nhttps://www.geeksforgeeks.org/find-excel-column-name-given-number/\nRound 3: This was the last round. We had a discussion related to my internships and projects. Then he asked me a couple of behavioral questions.\nThen he asked me DP problem. https://www.geeksforgeeks.org/longest-increasing-subsequence-dp-3/\nThe interviewers were very friendly. Overall the level was medium. One needs to be very calm during solving the problems. Be very clear about the time and space complexities and always speak while you are thinking. Discuss your solution with the interviewer and then only move onto writing the code. Always ask your interviewer if you are stuck or if you have any doubts. \nVerdict: Selected\nGeeksforGeeks is a great place to learn Data structures and Algorithms, which is the most important part of the interviews.\nAll the best!", likes: 3, id: 4,
                    },
                    {
                        post_id: 2, company: 'Infosys', name: 'Abcd', experience: 'nsm zh zxjbsgdh zgmnjak,b chjdsnnsm zhzxjbsg dhzgmnja k,bchjd snns mzhzxj bsgdhzg mnjak, bchjdsnns  mzhzxjbs gdhzgmnja k,bchjd snnsmzhzxj bsgdhzgmn jak,bch jdsnnsmzh zxjbsg dhzgmnj ak,bchjdsn nsmzhzxjbsg dhzgmn jak,bchjdsnn smzhzxjbsgd hzgmnjak,bchj dsnnsmzh zxjbsg dhzgmnjak, bchjdsnnsmzhz xjbsgd hzgmnjak,bc hjdsnnsmzhzxj bsgdhzgmnjak ,bchjdsnnsmz hzxjbsgdh zgmn jak,bch j dsn nsmzh zxjbsg dhzgmn jak,bch jdsn', likes: 4, id: 5,
                    }
                    ]
                })

            } catch (e) {
                console.log(e);
            }
        }
    }
    handleDeletePost = async (post_id) => {
        try {
            const result = await fetch(`${api_url}/posts/delete_post?post_id=${post_id}`, {
                method: 'get',
                mode: 'no-cors',
                headers: {
                    "Accept": 'application/json',
                    'Content-type': 'application/json'
                },
            });
            this.props.history.push('/Profile');
        } catch (e) {
            console.log(e)
        }
    }
    handleUpdatePost = (post_id) => {
        this.props.history.push({
            pathname: '/CreatePost',
            onUpdatePost: true,
            state: post_id 
        })
    }
    render() {
        return (
            <div className='home hideScroll'>
                <div className='row '>
                    {/*{this.state.myData.map(item => { */}
                    {this.state.myData && this.state.myData.length > 0 ? this.state.myData.map(item => {
                        return (
                            <div className=''>
                                <div  className='button'>
                                    <div>
                                        <div className='d-flex justify-content-between'>
                                            <div>
                                                <span style={{ fontSize: 30, fontWeight: 'bold' }}>{item.company} | </span>
                                                <span style={{ fontSize: 20, fontWeight: 'bold' }}>@{item.name}</span>
                                            </div>
                                            {this.props.fromProfile &&
                                                <div>
                                                    <span style={{margin: 20}}><DeleteIcon style={{cursor: 'pointer'}} onClick={() => this.handleDeletePost(item.post_id)}/></span>
                                                    <span ><EditIcon style={{cursor: 'pointer'}} onClick={() => this.handleUpdatePost(item.post_id)}/></span>
                                                </div>
                                            }
                                        </div>
                                        <p onClick={() => this.onNavigateExperience(item.post_id)} style={{ fontSize: 20, padding: 10, margin: 0, cursor:'pointer' }}>
                                            {`${item.experience.substring(0, 100)}...`}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                    ) : <div className='whenNoData'>No posts available </div>}

                </div>
            </div>
        )
    }
}
export default withRouter(Home);
