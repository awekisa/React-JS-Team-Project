import React, { Component } from 'react'
import DeleteTestimonialForm from './DeleteTesimonialForm'
import testimonialActions from '../../actions/TestimonialActions'
import testimonialStore from '../../stores/TestimonialStore'
import toastr from 'toastr'
import ReactDOM from 'react-dom'
import ListTestimonialsPage from './ListTestimonialsPage'

class DeleteTestimonialPage extends Component {
  constructor (props) {
    super(props)

    this.handleTestimonialDeleted = this.handleTestimonialDeleted.bind(this)

    testimonialStore.on(
      testimonialStore.eventTypes.TESTIMONIAL_DELETED,
      this.handleTestimonialDeleted
    )
  }

  componentWillUnmount () {
    testimonialStore.removeListener(
      testimonialStore.eventTypes.TESTIMONIAL_DELETED,
      this.handleTestimonialDeleted
    )
  }

  handleTestimonialDeleted (data) {
    toastr.success('Testimonial deleted.')
    ReactDOM.render(
      <ListTestimonialsPage history={this.props.history} />,
        document.getElementsByClassName('content-holder')[0]
      )
  }

  handleTestimonialForm (event) {
    event.preventDefault()
    testimonialActions.delete(this.props.testimonialId)
  }

  render () {
    return (
      <div>
        <h1>Delete Testimonial</h1>
        <DeleteTestimonialForm
          approved={this.props.approved}
          text={this.props.text}
          fullName={this.props.fullName}
          company={this.props.company}
          date={this.props.date}
          disabled='disabled'
          error={this.props.error}
          onSave={this.handleTestimonialForm.bind(this)}
        />
      </div>
    )
  }
}

export default DeleteTestimonialPage
