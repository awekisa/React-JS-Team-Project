import React, { Component } from 'react'
import EditTestimonialsTable from './EditTestimonialsTable'
import testimonialActions from '../../actions/TestimonialActions'
import testimonialStore from '../../stores/TestimonialStore'

class ListTestimonialsPage extends Component {
  constructor (props) {
    super(props)

    const page = 1

    this.state = {
      testimonials: [],
      page: page
    }

    this.handleTestimonialsFetching = this.handleTestimonialsFetching.bind(this)

    testimonialStore.on(testimonialStore.eventTypes.ADMIN_TESTIMONIALS_FETCHED, this.handleTestimonialsFetching)
  }

  handleTestimonialsFetching (data) {
    this.setState({
      testimonials: data
    })
  }

  componentWillUnmount () {
    testimonialStore.removeListener(testimonialStore.eventTypes.ADMIN_TESTIMONIALS_FETCHED, this.handleTestimonialsFetching)
  }

  componentDidMount () {
    testimonialActions.listAdminTestimonials(this.state.page)
  }

  render () {
    return (
      <EditTestimonialsTable
        history={this.props.history}
        testimonials={this.state.testimonials} />
    )
  }
}

export default ListTestimonialsPage
