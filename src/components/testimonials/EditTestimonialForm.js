import React, {Component} from 'react'
import Input from '../common/Input'

class TestimonialForm extends Component {
  constructor (props) {
    super(props)

    this.state = {
      approved: this.props.approved
    }
  }

  buttonClicked (event) {
    event.preventDefault()
    this.setState({
      approved: !this.state.approved
    })
  }

  render () {
    let buttonText = (this.state.approved) ? 'Disapprove' : 'Approve'
    let button = <button onClick={this.buttonClicked.bind(this)}>{buttonText}</button>
    return (
      <form>
        <div>{this.props.error}</div>
        <textarea name='text' onChange={this.props.onChange} disabled={this.props.disabled} >{this.props.text}
        </textarea>
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
        {button}
        <br />
        <input type='submit' onClick={this.props.onSave} />
      </form>
    )
  }
}

export default TestimonialForm
