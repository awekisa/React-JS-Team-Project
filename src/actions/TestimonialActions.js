import dispatcher from '../dispatcher'

const testimonialActions = {
  types: {
    CREATE_TESTIMONIAL: ' CREATE_TESTIMONIAL',
    LIST_ADMIN_TESTIMONIALS: 'LIST_ADMIN_TESTIMONIALS',
    LIST_APPROVED_TESTIMONIALS: 'LIST_APPROVED_TESTIMONIALS',
    EDIT_TESTIMONIAL: 'EDIT_TESTIMONIAL',
    DELETE_TESTIMONIAL: 'DELETE_TESTIMONIAL'
  },
  create (testimonial) {
    dispatcher.dispatch({
      type: this.types.CREATE_TESTIMONIAL,
      testimonial
    })
  },
  listAdminTestimonials (testimonials) {
    dispatcher.dispatch({
      type: this.types.LIST_ADMIN_TESTIMONIALS,
      testimonials
    })
  },
  listApprovedTestimonials (testimonials) {
    dispatcher.dispatch({
      type: this.types.LIST_APPROVED_TESTIMONIALS,
      testimonials
    })
  },
  edit (testimonial, testimonialId) {
    dispatcher.dispatch({
      type: this.types.EDIT_TESTIMONIAL,
      testimonial,
      testimonialId
    })
  },
  delete (testimonialId) {
    dispatcher.dispatch({
      type: this.types.DELETE_TESTIMONIAL,
      testimonialId
    })
  }
}

export default testimonialActions
