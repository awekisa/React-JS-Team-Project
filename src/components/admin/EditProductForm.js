import React from 'react'
import Input from '../common/Input'

const EditProductForm = (props) => (
  <form>
      <div>{props.error}</div>
      <Input
        name='title'
        placeholder='Title'
        value={props.product.title}
        onChange={props.onChange}
      />
     <Input
        name='image'
        type= 'url'
        placeholder='Image'
        value={props.product.image}
        onChange={props.onChange}
      />
      <Input
        name='description'
        placeholder='Description'
        value={props.product.description}
        onChange={props.onChange}
      />
      <div>
      <label htmlFor='type'>Category</label>
        <select name='type' value={props.product.category} onChange={props.onSelectChange}>
          {props.categories}
        </select>
      </div>
      <Input
        name='price'
        type='number'
        placeholder='Price'
        value={props.product.price}
        onChange={props.onChange}
      />
      <input type='submit' onClick={props.onSave} />  
  </form>
)

export default EditProductForm