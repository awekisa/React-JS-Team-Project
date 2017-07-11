import dispatcher from '../dispatcher'

const testimonialActions = {
    types: {
        CREATE_TESTIMONIAL: ' CREATE_TESTIMONIAL',
        LIST_TESTIMONIALS: 'LIST_TESTIMONIALS'
    },
    create(testimonial){
        dispatcher.dispatch({
            type: this.types.CREATE_TESTIMONIAL,
            testimonial
        })
    }
}

export default testimonialActions