import Data from './Data'
const baseUrl = 'testimonials'

class TestimonialData {
    static create (testimonial){
        console.log('hehre')
        return Data.post(`${baseUrl}/add`, testimonial, true)
    }

    static listAdminTestimonials () {
        return Data.get(`${baseUrl}/all`, true)
    }

    static listApprovedTestimonials(){
        return Data.get(`${baseUrl}/all-approved`)
    }

    static edit(testimonial, testimonialId){
        return Data.post(`${baseUrl}/edit/${testimonialId}`)
    }
}

export default TestimonialData