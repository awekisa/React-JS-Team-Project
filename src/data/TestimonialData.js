import Data from './Data'
const baseUrl = 'testimonials'

class TestimonialData {
  static create (testimonial) {
    return Data.post(`${baseUrl}/add`, testimonial, true)
  }
  static listAdminTestimonials () {
    return Data.get(`${baseUrl}/all`, true)
  }
  static listApprovedTestimonials () {
    return Data.get(`${baseUrl}/all-approved`, true)
  }
  static edit (testimonial, testimonialId) {
    return Data.post(`${baseUrl}/edit/${testimonialId}`, testimonial, true)
  }
  static delete (testimonialId) {
    return Data.post(`${baseUrl}/delete/${testimonialId}`, true)
  }
}

export default TestimonialData
