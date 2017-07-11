import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import EditTestimonialPage from './EditTestimonialPage'
import DeleteTestimonialPage from './DeleteTestimonialPage'

class TableRow extends Component {
  editTestimonial (event) {
    event.preventDefault()
    ReactDOM.render(
      <EditTestimonialPage
        history={this.props.history}
        testimonialId={this.props.categoryId}
        text={this.props.text}
        fullName={this.props.fullName}
        company={this.props.fullName}
        date={this.props.date} />,
      document.getElementsByClassName('content-holder')[0]
    )
  }

  deleteTestimonial (event) {
    event.preventDefault()
    ReactDOM.render(
      <DeleteTestimonialPage
        history={this.props.history}
        testimonialId={this.props.categoryId}
        text={this.props.text}
        fullName={this.props.fullName}
        company={this.props.fullName}
        date={this.props.date} />,
      document.getElementsByClassName('content-holder')[0]
    )
  }

  render () {
    return (
      <tr key={this.props.testimonialId}>
        <td className='hidden-xs'>{this.props.testimonialId}</td>
        <td>{this.props.text}</td>
        <td>{this.props.fullName}</td>
        <td>{this.props.company}</td>
        <td>{this.props.date.toLocaleString()}</td>
        <td>
          <a className='btn btn-default glyphicon glyphicon-edit' name={this.props.testimonialId} onClick={this.editTestimonial.bind(this)} />
        </td>
        <td>
          <a className='btn btn-danger glyphicon glyphicon-trash' name={this.props.testimonialId} onClick={this.deleteTestionial.bind(this)} />
        </td>
      </tr>
    )
  }
}

export default TableRow
