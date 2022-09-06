import React from 'react'
import './styles.css'

interface Props {
  todo: string
  setTodo: React.Dispatch<React.SetStateAction<string>>
  handleSubmit: (e: React.FormEvent) => void
}

// equally valid:
// const InputField:React.FC<Props> = ({todo, setTodo}) => ()
const InputField = ({ todo, setTodo, handleSubmit }: Props) => (
  <form className='input' onSubmit={handleSubmit}>
    <input
      type='input'
      name='task'
      id='task'
      placeholder='enter a task'
      className='input__box'
      onChange={(e) => setTodo(e.target.value)}
    />
    <button type='submit' className='input__submit'>
      add
    </button>
  </form>
)

export default InputField
