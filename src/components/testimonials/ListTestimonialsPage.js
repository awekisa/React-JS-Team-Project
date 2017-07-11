import React, { Component } from 'react'
import Auth from '../users/Auth'
import testimonialStore from '../../stores/TestimonialStore'
import testimonialActions from '../../actions/TestimonialActions'
import queryString from 'query-string'

class ListTestimonialsPage extends Component {
    constructor(props){
        super(props)

        let query = queryString.parse(this.props.location.search)
        const page = parseInt(query.page, 10) || 1
        
        this.state = {
            testimonials: [
                    {
                    text: 'Naj-dobrata firma vashta e'
                }
            ],
            page: page
        }

        this.handleTestimonialsFetching = this.handleTestimonialsFetching.bind(this)
        
        testimonialStore.on(testimonialStore.eventTypes.TESTIMONIALS_FETCHED, this.handleTestimonialsFetching)
    }

    handleTestimonialsFetching(data) {
        this.setState({
            testimonials: data
        })
    }

    render() {
        return(
            <div>
                <h1>Buyers Testimonials</h1>
            </div>
        )
    }
}

export default  ListTestimonialsPage