import React, { Component } from 'react'
import Input from '../common/Input'

class EditProductForm extends Component {
  render() {
    return(
    <form>
      <div>{this.props.error}</div>
      <Input
        name='title'
        placeholder='Title'
        value={this.props.product.title}
        onChange={this.props.onChange}
      />
     <Input
        name='image'
        type= 'url'
        placeholder='Image'
        value={this.props.product.image}
        onChange={this.props.onChange}
      />
      <Input
        name='description'
        placeholder='Description'
        value={this.props.product.description}
        onChange={this.props.onChange}
      />
      <div>
      <label htmlFor='type'>Category</label>
        <select name='type' value={this.props.product.category} onChange={this.props.onSelectChange}>
          {this.props.categories}
        </select>
      </div>
      <Input
        name='price'
        type='number'
        placeholder='Price'
        value={this.props.product.price}
        onChange={this.props.onChange}
      />
      <input type='submit' onClick={this.props.onSave} />  
    </form>
    )
  }
}

export default EditProductForm