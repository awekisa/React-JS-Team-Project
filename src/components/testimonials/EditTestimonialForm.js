import React, {Component} from 'react'
import Input from '../common/Input'

class EditTestimonialForm extends Component {
  constructor (props) {
    super(props)

    this.state = {
      approved: this.props.approved
    }
  }

  componentDidMount () {
    let approved = true
    if (this.props.approved === 'false') {
      approved = false
    }
    this.setState({
      approved: approved
    })
  }

  buttonClicked (event) {
    event.preventDefault()
    this.setState({
      approved: !this.state.approved
    })
    this.props.changedState()
  }

  render () {
    let buttonText = (this.state.approved) ? 'Disapprove' : 'Approve'
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
        <input type='button' name='approved' onClick={this.buttonClicked.bind(this)} value={buttonText} />
        <br />
        <input type='submit' onClick={this.props.onSave} value='Edit' />
      </form>
    )
  }
}

export default EditTestimonialForm
