import React, { Component } from 'react'
import TableRow from './TableRow'

class EditProductTable extends Component {
  render () {
    let products = <tr><td colSpan='8'>No products available</td></tr>
    if (this.props.products.length > 0) {
      products = this.props.products.map((product, index) => {
        return <TableRow
          history={this.props.history}
          key={index}
          productId={product._id}
          title={product.title}
          image={product.image}
          description={product.description}
          price={product.price}
          category={product.category}
          editProduct={this.props.editProduct} />
      })
    }

    return (
       <div>
          <div className="container itemsEdit">
              <div className="row">
                  <div className="col-md-12 col-md-offset-1">
                      <div className="panel panel-default panel-table">
                          <div className="panel-heading">
                              <div className="row">
                                  <div className="">
                                      <h3 className="panel-title">Manage products</h3>
                                  </div>
                              </div>
                          </div>
                          <div className="panel-body col-md-10">
                              <table className="table table-striped table-bordered table-list">
                                  <thead>
                                  <tr>
                                      <th width="10%">Id</th>
                                      <th width="20%">Title</th>
                                      <th width="10%">Image</th>
                                      <th width="20%">Description</th>
                                      <th width="5%">Price</th>
                                      <th width="5%">Category</th>
                                      <th width="5%">Edit</th>
                                      <th width="5%">Delete</th>
                                  </tr>
                                  </thead>
                                  <tbody>
                                  {products}
                                  </tbody>
                              </table>

                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    )
  }
}

export default EditProductTable