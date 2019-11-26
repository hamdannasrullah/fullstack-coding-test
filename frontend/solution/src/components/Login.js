import React, { Component } from "react";
import { Link, Redirect } from 'react-router-dom'
import {connect} from 'react-redux'
import cookies from 'universal-cookie'

import { onLoginUser } from '../actions'

const cookie = new cookies ()

class Login extends Component {

    onButtonClick = () => {

            var user = this.username.value 
            var pass = this.password.value

            this.props.onLoginUser(user, pass)
            }

    render () {
        
        if (this.props.user.username == ''){

            return (
                    <div>
                        <div className='mt-5 row'>
                            <div className='col-sm-3 mx-auto card'>
                                <div className='card-body'>
                                    <div className='border-bottom border-secondary card-title'>
                                        <h1>Login</h1>
                                    </div>
                                        <div className='card-title'>
                                            <h4>Username</h4>
                                        </div>

                                        <form className='input-group'>
                                            <input className='form-control'type='text'
                                            ref={(input) => {this.username=input}}
                                            />
                                        </form>

                                        <div className='card-title'>
                                            <h4>Password</h4>
                                        </div>
                                        
                                        <form className='input-group'>
                                            <input className='form-control'type='password'
                                            ref={(input) => {this.password=input}}
                                            />
                                        </form><p></p>
        
                                        <button onClick={this.onButtonClick} className='btn btn-success'>Login</button>
                                        <p>Create Account? <Link to="http://localhost:3003/register">Register</Link></p>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }

            return <Redirect to='/'/>
            
            }

    }

    const mapStateToProps = state => {
        return {
            user: state.auth
        }
    }

export default connect (mapStateToProps, {onLoginUser}) (Login)