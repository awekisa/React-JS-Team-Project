import React from 'react'

const Input = (props) => {
  let type = props.type || 'text'
  let disabled = props.disabled || ''

  return (
    <div>
      <label htmlFor={props.name}>{props.placeholder}</label>
      <input
        type={type}
        name={props.name}
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onChange}
        disabled={disabled} />
    </div>
  )
}

export default Input
