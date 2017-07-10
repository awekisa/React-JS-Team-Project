import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import EditProductItem from './EditProductItem'
import DeleteProductPage from './DeleteProductPage'

class TableRow extends Component {
  editProduct (event) {
    event.preventDefault()
    ReactDOM.render(
      <EditProductItem
        history={this.props.history}
        productId={this.props.productId}
        name={this.props.name} />,
      document.getElementsByClassName('content-holder')[0]
    )
  }

  deleteProduct (event) {
    event.preventDefault()
    console.log(this.props)
    ReactDOM.render(
      <DeleteProductPage
        history={this.props.history}
        productId={this.props.productId}
        title={this.props.title}
        image={this.props.image}
        description={this.props.description}
        price={this.props.price}
        category={this.props.category} />,
      document.getElementsByClassName('content-holder')[0]
    )
  }

  render () {
    return (
      <tr key={this.props.productId}>
        <td className='hidden-xs'>{this.props.productId}</td>
        <td>{this.props.title}</td>
        <td>{this.props.image}</td>
        <td>{this.props.description}</td>
        <td>{this.props.price}</td>
        <td>{this.props.category}</td>
        <td>
          <a className='btn btn-default glyphicon glyphicon-edit' name={this.props.productId} onClick={this.props.editProduct}></a>
        </td>
        <td>
          <a className='btn btn-danger glyphicon glyphicon-trash'
            name={this.props.productId}
            onClick={this.deleteProduct.bind(this)}>
          </a>
        </td>
      </tr>
    )
  }
}

export default TableRow
