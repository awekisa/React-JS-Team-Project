import React, {Component} from 'react'
import Input from '../common/Input'

class DeleteTestimonialForm extends Component {
  render () {
    let buttonText = (this.props.approved === 'false') ? 'Disapproved' : 'Approved'
    return (
      <form>
        <div>{this.props.error}</div>
        <textarea name='text' onChange={this.props.onChange} disabled={this.props.disabled} value={this.props.text} />
        <Input
          name='fullName'
          value={this.props.fullName}
          onChange={this.props.onChange}
          disabled={this.props.disabled}
        />
        <Input
          name='company'
          value={this.props.company}
          disabled={this.props.disabled}
        />
        <p name='approved'>{buttonText}</p>
        <input type='submit' onClick={this.props.onSave} value='Delete' />
      </form>
    )
  }
}

export default DeleteTestimonialForm
