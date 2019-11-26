import axios from 'axios'
import cookies from 'universal-cookie'

const cookie = new cookies ()

export const onLoginUser = (user,pass) => {
    return (dispatch) => {
        axios.get(
            'http://localhost:3003/users',
            {
                params: {
                    username: user,
                    password: pass
                }
            }
        ).then (res => {
            if(res.data.length > 0){
                const {id, username} = res.data[0]
                dispatch (
                    {
                        type: "LOGIN_SUCCESS",
                        payload: {id, username}
                    }
                )
                cookie.set('userName', {username,id}, {path: '/'})
            } else {
                console.log('Username or Password Incorrect')
            }
        })
    }
}

export const keepLogin = (objUser) => {

    return {
        type: 'LOGIN_SUCCESS',
        payload: {
            id: objUser.id,
            username: objUser.username
        }
    }

}
export const onLogoutUser = () => {
    cookie.remove('userName')
    return {
        type: 'LOGOUT_SUCCESS'
    }
}



