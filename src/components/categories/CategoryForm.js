import React from 'react'
import Input from '../common/Input'

const CategoryForm = (props) => (
  <form>
    <div>{props.error}</div>
    <Input
      name='name'
      placeholder='Name'
      value={props.category.name}
      onChange={props.onChange}
    />
    <input type='submit' onClick={props.onSave} />
  </form>
)

export default CategoryForm
