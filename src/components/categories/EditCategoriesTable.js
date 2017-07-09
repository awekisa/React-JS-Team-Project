import React, { Component } from 'react'
import TableRow from './TableRow'

class EditCategoriesTable extends Component {
  render () {
    let categories = <tr><td width='100%'>'No categories available'</td></tr>
    if (this.props.categories.length > 0) {
      categories = this.props.categories.map((category, index) => {
        return <TableRow
          key={index}
          categoryId={category._id}
          name={category.name}
          date={category.date} />
      })
    }

    return (
      <div>
        <div className='container itemsEdit'>
          <div className='row'>
            <div className='col-md-12 col-md-offset-1'>
              <div className='panel panel-default panel-table'>
                <div className='panel-heading'>
                  <div className='row'>
                    <div className=''>
                      <h3 className='panel-title'>Manage categories</h3>
                    </div>
                  </div>
                </div>
                <div className='panel-body col-md-10'>
                  <table className='table table-striped table-bordered table-list'>
                    <thead>
                      <tr>
                        <th width='10%'>Id</th>
                        <th width='10%'>Name</th>
                        <th width='10%'>Date</th>
                        <th width='5%'>Edit</th>
                        <th width='5%'>Delete</th>
                      </tr>
                    </thead>
                    <tbody>
                      {categories}
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

export default EditCategoriesTable
