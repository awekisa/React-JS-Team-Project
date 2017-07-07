import React from 'react'
import Input from '../common/Input'

const PetCommentForm = (props) => (
  <form>
      <div>{props.error}</div>
      <Input
        name='comment'
        placeholder='Comment'
        onChange={props.onChange}
      />
      <input type='submit' onClick={props.onSave} />  
  </form>
)

export default PetCommentForm