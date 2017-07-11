import React, { Component } from 'react'
import TestimonialForm from './TestimonialForm'
import testimonialActions from '../../actions/TestimonialActions'
import testimonialStore from '../../stores/TestimonialStore'
import toastr from 'toastr'
import ReactDOM from 'react-dom'
import ListTestimonialsPage from './ListTestimonialsPage'

class EditTestimonialPage extends Component {
  constructor (props) {
    super(props)

    this.state = {
      approved: this.props.approved,
      error: ''
    }

    this.handleTestimonialEdited = this.handleTestimonialEdited.bind(this)

    testimonialStore.on(
      testimonialStore.eventTypes.TESTIMONIAL_EDITED,
      this.handleTestimonialEdited
    )
  }

  componentDidMount () {
    this.setState({approved: this.props.approved})
  }

  componentWillUnmount () {
    testimonialStore.removeListener(
      testimonialStore.eventTypes.TESTIMONIAL_EDITED,
      this.handleTestimonialEdited
    )
  }

  handleTestimonialEdited (data) {
    toastr.success('Testimonial edited.')
    ReactDOM.render(
      <ListTestimonialsPage history={this.props.history} />,
        document.getElementsByClassName('content-holder')[0]
      )
  }

  handleTestimonialChange (event) {
    this.setState({ approved: !this.state.approved })
  }

  handleTestimonialForm (event) {
    event.preventDefault()
    testimonialActions.edit(this.props.testimonialId, this.state.approved)
  }

  render () {
    return (
      <div>
        <h1>Edit Testimonial</h1>
        <TestimonialForm
          approved={this.state.approved}
          text={this.props.text}
          fullName={this.props.fullName}
          company={this.props.company}
          date={this.props.date}
          disabled='disabled'
          error={this.state.error}
          onChange={this.handleCategoryChange.bind(this)}
          onSave={this.handleCategoryForm.bind(this)}
        />
      </div>
    )
  }
}

export default EditTestimonialPage