import React, { Component } from 'react'
import TableRow from './TableRow'

class EditTestimonialsTable extends Component {
  render () {
    let testimonials = <tr><td colSpan="8">No testimonials available</td></tr>
    if (this.props.testimonials.length > 0) {
      testimonials = this.props.testimonials.map((testimonial, index) => {
        return <TableRow
          history={this.props.history}
          key={index}
          testimonialId={testimonial._id}
          approved={testimonial.approved}
          text={testimonial.text}
          fullName={testimonial.fullName}
          company={testimonial.company}
          date={testimonial.date} />
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
                      <h3 className='panel-title'>Manage testimonials</h3>
                    </div>
                  </div>
                </div>
                <div className='panel-body col-md-10'>
                  <table className='table table-striped table-bordered table-list'>
                    <thead>
                      <tr>
                        <th width='10%'>Id</th>
                        <th width='10%'>Approved</th>
                        <th width='10%'>Text</th>
                        <th width='10%'>Full Name</th>
                        <th width='10%'>Company</th>
                        <th width='10%'>Date</th>
                        <th width='5%'>Edit</th>
                        <th width='5%'>Delete</th>
                      </tr>
                    </thead>
                    <tbody>
                      {testimonials}
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

export default EditTestimonialsTable
