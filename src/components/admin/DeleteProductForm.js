import React from 'react'
import Input from '../common/Input'

const DeleteProductForm = (props) => (
  <form>
    <div>{props.error}</div>
    <Input
      name='title'
      placeholder='Title'
      value={props.title}
      onChange={props.onChange}
      disabled={props.disabled}
    />
    <Input
      name='image'
      placeholder='Image'
      value={props.image}
      onChange={props.onChange}
      disabled={props.disabled}
    />
    <Input
      name='description'
      placeholder='Description'
      value={props.description}
      onChange={props.onChange}
      disabled={props.disabled}
    />
    <Input
      name='price'
      placeholder='Price'
      value={props.price}
      onChange={props.onChange}
      disabled={props.disabled}
    />
    <select>
      <option value={props.category}>{props.category}</option>
    </select>
    <input type='submit' onClick={props.onSave} />
  </form>
)

export default DeleteProductForm
