import React, { Component } from 'react'
import axios from '../config/axios';
import axios from 'axios';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

class Home extends Component {
    state = {
        tasks: []
    }

    addTask = (userid) => {
        const description = this.task.value

        axios.post (
            'http://localhost:3003/tasks/' + userid,
            {
                description 
            }
        ).then ( () => {

            this.getTasks()
        })
    }
    changeTask = (taskid) => {
        axios.patch(
            `http://localhost:3003/tasks/${this.props.userid}/${taskid}`
        ).then(() => {
            this.getTasks()
        })

    }

    getTasks = () => {
            axios.get (
                'http://localhost:3003/tasks/' + this.props.userid
            ).then(res => {
                this.setState({tasks: res.data})
            })
        }
        componentDidMount(){
            this.getTasks()
        }
    
        renderTasks = () => {
            return this.state.tasks.map(task => {
                if(!task.completed){
                    return (
                        <li className='list-group-item d-flex justify-content-between'>
                            <span>{task.description}</span>
                            <span>
                                <button 
                                    className='btn btn-outline-primary'
                                    onClick={() => {this.changeTask(task._id)}}
                                >
                                    Done
                                </button>
                            </span>
                        </li>
                    )
                }
    
                return (
                    <li className='list-group-item d-flex justify-content-between bg-warning'>
                        <span>{task.description}</span>
                        <span>
                        <button 
                            className='btn btn-outline-primary'
                            onClick={() => {this.changeTask(task._id)}}
                        >
                            Not Done
                        </button>
                        </span>
                    </li>
                )
            })
        }
    
        render() {
            if(this.props.userid){
                return (
                    <div className="container">
                            <h1 className="display-4 text-center animated bounce delay-1s">List Tasks</h1>
                            <form className="form-group mt-5">
                                <input type="text" className="form-control" placeholder="What do you want to do?" ref={input => this.task = input}/>
                            </form>
                            <button type="submit" className="btn btn-block btn-primary mt-3" onClick={() => this.addTask(this.props.userid)}>Enter Task!</button>
                        
                            <ul className="list-group list-group-flush mb-5">
                                {this.renderTasks()}
                            </ul>
                            </div>
                )
            }
            return <Redirect to='http://localhost:3003/login'/>
            
        }
    }
    
    const mapToProps = state => {
        return {
            userid: state.auth.id
        }
    }
    
    export default connect(mapToProps)(Home)