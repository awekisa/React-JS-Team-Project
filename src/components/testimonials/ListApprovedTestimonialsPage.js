import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import EditTestimonialsTable from './EditTestimonialsTable'
import testimonialActions from '../../actions/TestimonialActions'
import testimonialStore from '../../stores/TestimonialStore'

class ListApprovedTestimonialsPage extends Component{
    constructor(props) {
        super (props)

        const page = 1

        this.state = {
            testimonials: [],
            page: page
        }

        testimonialStore.on(testimonialStore.eventTypes.APPROVED_TESTIMONIALS_FETCHED, this.handleTestimonialsFetching.bind(this))
    }

    handleTestimonialsFetching (data) {
    this.setState({
      testimonials: data
    })
  }

  componentDidMount() {
      testimonialActions.listApprovedTestimonials(this.state.page)
  }

  componentWillUnmount() {
      testimonialStore.removeListener(testimonialStore.eventTypes.APPROVED_TESTIMONIALS_FETCHED, this.handleTestimonialsFetching)
  }

  render() {
      let testimonialsFetched = this.state.testimonials
      let testimonialsToPrint = testimonialsFetched.map(testimonial => {
          console.log(testimonial)
          return (
              <div className='testimonial-container' key={testimonial._id}>
                <br/>
                <p className='testimonial-text'>{testimonial.text}</p>  
                <p className='testimonial-fullName'> -- By {testimonial.fullName} from {testimonial.company}</p>
                <p className='testimonial-date' >Written on {testimonial.date}</p>
              </div>
          )
      })
      return (
          <div className='all-testimonials-wrapper'>
              <h1>Here is what our buyers say for us!</h1>
              {testimonialsToPrint}
              <hr/>
              <Link to='/testimonials/create'>Write your testimonial here!</Link>
          </div>
      )
  }
}

export default ListApprovedTestimonialsPage

