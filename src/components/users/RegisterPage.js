import React, { Component } from 'react'
import RegisterForm from './RegisterForm'
import FormHelpers from '../common/FormHelpers'
import userActions from '../../actions/UserActions'
import userStore from '../../stores/UserStore'
import toastr from 'toastr'

 class RegisterPage extends Component {
    constructor(props){
        super (props)

        this.state = {
            user: {
                username: 'gosho',
                password: '123456',
                confirmPassword: '123456',
                firstName: 'Georgi',
                lastName: 'Stanoev',
                company: 'fdgd'
            },
            error: ''
        }

        this.handleUserRegistration = this.handleUserRegistration.bind(this)

        userStore.on(
            userStore.eventTypes.USER_REGISTERED,
            this.handleUserRegistration
        )
    }

    componentWillUnmount () {
        userStore.removeListener (
            userStore.eventTypes.USER_REGISTERED, this.handleUserRegistration
        )
    }

    handleUserChange (event) {
        FormHelpers.handleFormChange.bind(this)(event, 'user')
    }

    handleUserForm (event) {
        event.preventDefault()
        if (!this.validateUser()){
            return
        }
        userActions.register(this.state.user)
    }

    handleUserRegistration (data) {
        if (!data.success) {
            let firstError = FormHelpers.getFirstError(data)
          
            this.setState({
                error: firstError
            })
        }
        else {
            toastr.success(data.message)
            this.props.history.push('/users/login')

        }
    }

    validateUser () {
        const user = this.state.user
        let formIsValid = true
        let error = ''
        if (user.password !== user.confirmPassword) {
            error = 'Passwords do not match'
            formIsValid = false
        }

        if (error) {
            this.setState({error})
        }

        return formIsValid
    }

     render () {
         return (
             <div>
                <h1>Register</h1>
                <RegisterForm 
                user = {this.state.user}
                error = {this.state.error}
                onChange = {this.handleUserChange.bind(this)}
                onSave = {this.handleUserForm.bind(this)}
                 />
            </div>
         )
     }
 }

 export default RegisterPage