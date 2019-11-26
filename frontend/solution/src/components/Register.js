import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'


class Register extends Component {

    onButtonClick = () => {
        const user = this.username.value
        const newemail = this.email.value
        const pass = this.password.value

        axios.get(
            'http://localhost:3003/users/', 
        {
            params: {
                username: user
            }
        }
        ).then(res => {

            if(res.data.length > 0) {
                console.log('Username sudah digunakan')
            } else {

        axios.get(
            'http://localhost:3003/users',
            {
                params: {
                    email: newemail
                }
            }
        ).then( res => {

            if(res.data.length > 0) {
                console.log('Email sudah digunakan')
            } else {

        axios.post('http://localhost:3003/users', 
            {
                username:user,
                email:newemail,
                password:pass
            }
        ).then((res) => {
            console.log('Data Berhasil Diinput');
            console.log(res);
            }
        ).catch((err) => {
            console.log('Gagal Post Data');
            console.log(err);
            }
        )
            }
        })
            }
        }).catch( (err) => {
            console.log('Gagal request');
        })
    }


    render () {
        return (
            <div>
                <div className='mt-5 row'></div>
                    <div className='col-sm-3 mx-auto card'>
                        <div className='card-body'>
                            <div className='border-bottom border-secondary card-title'>
                                <h1>Register</h1>
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
                                    <h4>Email</h4>
                                </div>
                                <form className='input-group'>
                                    <input className='form-control'type='email'
                                    ref={(input) => {this.email=input}} 
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
                                <button onClick={this.onButtonClick} className='btn btn-success'>Click for Register</button>
                                <p>Have an Account? <Link to="/http://localhost:3003/login">Login Here</Link></p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Register