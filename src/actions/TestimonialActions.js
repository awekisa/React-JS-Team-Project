import dispatcher from '../dispatcher'

const testimonialActions = {
    types: {
        CREATE_TESTIMONIAL: ' CREATE_TESTIMONIAL',
        LIST_ADMIN_TESTIMONIALS: 'LIST_ADMIN_TESTIMONIALS',
        LIST_APPROVED_TESTIMONIALS: 'LIST_APPROVED_TESTIMONIALS'
    },
    create(testimonial){
        dispatcher.dispatch({
            type: this.types.CREATE_TESTIMONIAL,
            testimonial
        })
    },
    listAdminTestimonials(testimonials){
        dispatcher.dispatch({
            type: this.types.LIST_ADMIN_TESTIMONIALS,
            testimonials
        })
    },
    listApprovedTestimonials(testimonials){
        dispatcher.dispatch({
            type: this.types.LIST_APPROVED_TESTIMONIALS,
            testimonials
        })
    }
}

export default testimonialActions