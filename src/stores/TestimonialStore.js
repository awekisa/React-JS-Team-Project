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

    handleAction(action) {
        switch(action.type){
            case TestimonialActions.types.CREATE_TESTIMONIAL: {
                this.create(action.testimonial)
                break
            }
            default: break
        }
    }
}

let testimonialStore = new TestimonialStore()

testimonialStore.eventTypes = {
    TESTIMONIAL_CREATED: 'TESTIMONIAL_CREATED'
}

dispatcher.register(testimonialStore.handleAction.bind(testimonialStore))

export default testimonialStore