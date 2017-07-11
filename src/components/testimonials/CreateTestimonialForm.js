import React from 'react'
import Input from '../common/Input'

const CreateTestimonialForm = (props) => (
    <div>
         <form>
              <textarea name onChange={props.onChange}
              placeholder = 'Type here...'></textarea>
              <br/>
              <br/>
              <input type='submit' onClick={props.onClick}/>
         </form>
    </div>
)

export default CreateTestimonialForm