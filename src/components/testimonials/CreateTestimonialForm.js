import React from 'react'
import Input from '../common/Input'

const TestimonialForm = (props) => (
    <div>
         <form>
              <textarea name onChange={props.handleTestimonialChange}
              placeholder = 'Type here...'></textarea>
              <br/>
              <br/>
              <input type='submit' onClick={props.handleTestimonialForm}/>
         </form>
    </div>
)

export default TestimonialForm