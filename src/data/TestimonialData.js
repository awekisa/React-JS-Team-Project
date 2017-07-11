 import Data from './Data'
const baseUrl = 'testimonials'

class TestimonialData {
    static create (testimonial){
        return Data.post(`${baseUrl}/add`, testimonial, true)
    }

    static listAdminTestimonials () {
        return Data.get(`${baseUrl}/all`)
    }

    static listApprovedTestimonials(){
        return Data.get(`${baseUrl}/all-approved`)
    }
}

export default TestimonialData