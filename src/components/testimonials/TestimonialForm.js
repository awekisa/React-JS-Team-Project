import React from 'react'
import Input from '../common/Input'

const TestimonialForm = (props) => {
  let buttonText = (this.props.approved) ? 'Disapprove' : 'Approve'
  let button = <button onClick={props.onChange}>{buttonText}</button>
  return (
    <form>
      <div>{props.error}</div>
      <textarea name='text' onChange={props.onChange} disabled={props.disabled} >{props.text}
      </textarea>
      <Input
        name='fullName'
        value={props.fullName}
        onChange={props.onChange}
        disabled={props.disabled}
      />
      <Input
        name='company'
        value={props.company}
        onChange={props.onChange}
        disabled={props.disabled}
      />
      {button}
      <input type='submit' onClick={props.onSave} />
    </form>
  )
}

export default TestimonialForm
