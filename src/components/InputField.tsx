import React from 'react'
import './styles.css'

const InputField = () => (
  <form className='input'>
    <input
      type='input'
      name='task'
      id='task'
      placeholder='enter a task'
      className='input__box'
    />
    <button type='submit' className='input__submit'>
      add
    </button>
  </form>
)

export default InputField
