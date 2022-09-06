import React, { useRef } from 'react'
import { Todo } from '../model'
import './styles.css'

interface Props {
  todo: string
  setTodo: React.Dispatch<React.SetStateAction<string>>
  handleSubmit: (e: React.FormEvent) => void
  todos: Todo[]
}

// equally valid:
// const InputField:React.FC<Props> = ({todo, setTodo}) => ()
const InputField = ({ todo, setTodo, handleSubmit, todos }: Props) => {
  const inputRef = useRef<HTMLInputElement>(null)

  return (
    <form
      className='input'
      onSubmit={(e) => {
        handleSubmit(e)
        inputRef.current?.blur()
      }}>
      <input
        ref={inputRef}
        type='input'
        name='task'
        placeholder='enter a task'
        className='input__box'
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button type='submit' className='input__submit'>
        add
      </button>
    </form>
  )
}

export default InputField
