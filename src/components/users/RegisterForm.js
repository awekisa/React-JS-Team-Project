import React from 'react'
import Input from '../common/Input'

const RegisterForm = (props) => (
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
        <Input 
            type = 'password'
            name = 'confirmPassword'
            placeholder='Confirm Password'
            value ={props.user.confirmPassword}
            onChange={props.onChange} />   
         <br/>
        <Input 
            type = 'text'
            name = 'firstName'
            placeholder='First Name'
            value ={props.user.firstName}
            onChange={props.onChange} />
            <br />
         <Input 
            type = 'text'
            name = 'lastName'
            placeholder='Last Name'
            value ={props.user.lastName}
            onChange={props.onChange} />
            <br />
         <Input 
            type = 'text'
            name = 'company'
            placeholder='Company'
            value ={props.user.company}
            onChange={props.onChange} />
            <br />
         <input type='submit' onClick={props.onSave} />   
    </form>
)

export default RegisterForm