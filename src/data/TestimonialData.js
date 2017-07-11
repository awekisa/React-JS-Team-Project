import Data from './Data'
const baseUrl = 'testimonials'

class TestimonialData {
    static create (testimonial){
        console.log('V kreate na data')
        return Data.post(`${baseUrl}/add`, testimonial, true)
    }
}

export default TestimonialData