import dispatcher from '../dispatcher'

const testimonialActions = {
    types: {
        CREATE_TESTIMONIAL: ' CREATE_TESTIMONIAL',
        LIST_ADMIN_TESTIMONIALS: 'LIST_ADMIN_TESTIMONIALS',
        LIST_APPROVED_TESTIMONIALS: 'LIST_APPROVED_TESTIMONIALS',
        EDIT:'EDIT',
        DELETE:'DELETE'
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
    },
    edit(testimonial, testimonialId){
        dispatcher.dispatch({
            type: this.types.EDIT,
            testimonial,
            testimonialId
        })
    }
}

export default testimonialActions