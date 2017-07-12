import React, { Component } from 'react'
import FormHelpers from '../common/FormHelpers'
import Auth from '../users/Auth'
import toastr from 'toastr'
import ReactDOM from 'react-dom'
import testimonialStore from '../../stores/TestimonialStore'
import testimonialActions from '../../actions/TestimonialActions'
import CreateTestimonialForm from './CreateTestimonialForm'
import ListApprovedTestimonialsPage from './ListApprovedTestimonialsPage'

class CreateTestimonialsPage extends Component {
    constructor (props){
    super(props)
        this.state = {
            testimonial: {
                text: '',
                fullName: '' ,
                company: '',
                date: ''
            },
            error: ''
        }
       this.handleTestimonialCreation = this.handleTestimonialCreation.bind(this)

       testimonialStore.on(
           testimonialStore.eventTypes.TESTIMONIAL_CREATED,
           this.handleTestimonialCreation
       )
    }

      componentWillMount () {
    if (!Auth.isUserAuthenticated()) {
      this.props.history.push('/users/login')
    }
  }

    componentWillUnmount () {
    testimonialStore.removeListener(
      testimonialStore.eventTypes.TESTIMONIAL_CREATED,
      this.handleTestimonialCreation
    )
  }

    handleTestimonialCreation (data) {
         if (!data.success) {
      let firstError = FormHelpers.getFirstError(data)

      this.setState({
        error: firstError
      })
    } else {
      toastr.success(data.message)
      this.setState({
        testimonial: {
          text: ''
        },
        error: ''
      })
     }
    }

    handleTestimonialChange(event){
        const testimonialText = event.target.value
        this.setState({
            testimonial: {
                text: testimonialText,
            }
        })
    }

    handleTestimonialForm(event){
         event.preventDefault()
         testimonialActions.create(this.state.testimonial)
    }

    render(){
        return (
            <div>
             <h2>Write your testimonial here:</h2>
             <CreateTestimonialForm 
             onChange={this.handleTestimonialChange.bind(this)}
             onClick={this.handleTestimonialForm.bind(this)}
             />
           </div> 
        )
    }
}

export default CreateTestimonialsPage