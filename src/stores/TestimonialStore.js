import { EventEmitter } from 'events'
import dispatcher from '../dispatcher'
import TestimonialData from '../data/TestimonialData'
import TestimonialActions from '../actions/TestimonialActions'

class TestimonialStore extends EventEmitter {

    create(testimonial){
        TestimonialData
            .create(testimonial)
            .then(data=>this.emit(this.eventTypes.TESTIMONIAL_CREATED, data))
    }

    listAdminTestimonials(testimonials){
        TestimonialData
            .listAdminTestimonials(testimonials)
            .then(testimonials => this.emit(
                this.eventTypes.ADMIN_TESTIMONIALS_FETCHED, testimonials
            ))
    }

    listApprovedTestimonials(testimonials){
        TestimonialData
            .listApprovedTestimonials(testimonials)
            .then(testimonials => this.emit(this.eventTypes.APPROVED_TESTIMONIALS_FETCHED, testimonials))
    }

    edit(testimonial, testimonialId){
        TestimonialData
            .edit(testimonial, testimonialId)
            .then(data => this.emit(this.eventTypes.TESTIMONIAL_EDITED, testimonial, testimonialId))
    }

    delete(testimonialId){
        TestimonialData
            .delete(testimonialId)
            then(() => {
                this.eventTypes.TESTIMONIAL_DELETED
            })
    }

    handleAction(action) {
        switch(action.type){
            case TestimonialActions.types.CREATE_TESTIMONIAL: {
                this.create(action.testimonial)
                break
            }
            case
            TestimonialActions.types.LIST_ADMIN_TESTIMONIALS: {
                this.listAdminTestimonials(action.testimonials)
            }
            case
            TestimonialActions.types.LIST_APPROVED_TESTIMONIALS: {
                this.listApprovedTestimonials(action.testimonials)
            }
            case
            TestimonialActions.types.EDIT: {
                this.edit(action.testimonial, action.testimonialId)
            }
            case TestimonialActions.types.DELETE: {
                this.delete(action.testimonialId)
            }
            default: break
        }
    }
}

let testimonialStore = new TestimonialStore()

testimonialStore.eventTypes = {
    TESTIMONIAL_CREATED: 'TESTIMONIAL_CREATED',
    ADMIN_TESTIMONIALS_FETCHED: 'ADMIN_TESTIMONIALS_FETCHED',
    APPROVED_TESTIMONIALS_FETCHED: 'APPROVED_TESTIMONIALS_FETHCED',
    TESTIMONIAL_EDITED: 'TESTIMONIAL_EDITED' ,
    TESTIMONIAL_DELETED: 'TESTIMONIAL_DELETED'
}

dispatcher.register(testimonialStore.handleAction.bind(testimonialStore))

export default testimonialStore