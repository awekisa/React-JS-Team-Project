import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import EditCategoryPage from './EditCategoryPage'
import DeleteCategoryPage from './DeleteCategoryPage'

class TableRow extends Component {
  editCategory (event) {
    event.preventDefault()
    ReactDOM.render(
      <EditCategoryPage
        history={this.props.history}
        categoryId={this.props.categoryId}
        name={this.props.name} />,
      document.getElementsByClassName('content-holder')[0]
    )
  }

  deleteCategory (event) {
    event.preventDefault()
    ReactDOM.render(
      <DeleteCategoryPage
        history={this.props.history}
        categoryId={this.props.categoryId}
        name={this.props.name} />,
      document.getElementsByClassName('content-holder')[0]
    )
  }

  render () {
    return (
      <tr key={this.props.categoryId}>
        <td className='hidden-xs'>{this.props.categoryId}</td>
        <td>{this.props.name}</td>
        <td>{this.props.date.toLocaleString()}</td>
        <td>
          <a className='btn btn-default glyphicon glyphicon-edit' name={this.props.categoryId} onClick={this.editCategory.bind(this)} />
        </td>
        <td>
          <a className='btn btn-danger glyphicon glyphicon-trash' name={this.props.categoryId} onClick={this.deleteCategory.bind(this)} />
        </td>
      </tr>
    )
  }
}

export default TableRow
