import React from 'react'
import Input from '../common/Input'

const LoginForm = (props) => (
     <form>
        <div>{props.error}</div>
        <Input 
            type = 'username'
            name = 'username'
            placeholder='Username'
            value ={props.user.username}
            onChange={props.onChange} />
            <br />
        <Input 
            type = 'password'
            name = 'password'
            placeholder='Password'
            value ={props.user.password}
            onChange={props.onChange} />    
            <br />
         <input type='submit' onClick={props.onSave} />   
    </form>
)

export default LoginForm