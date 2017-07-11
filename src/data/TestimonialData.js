import Data from './Data'
const baseUrl = 'testimonials'

class TestimonialData {
    static create (testimonial){
        return Data.post(`${baseUrl}/create`, testimonial, true)
    }
}

export default TestimonialData