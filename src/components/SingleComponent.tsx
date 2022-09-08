import React from 'react'
import { AiFillEdit, AiFillDelete } from 'react-icons/ai'
import { MdDone } from 'react-icons/md'

import { Todo } from '../model'

interface Props {
  todo: Todo
  todos: Todo[]
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

const SingleComponent = ({ todo, todos, setTodos }: Props) => {
  const handleDone = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo,
      ),
    )
  }

  const handleDelete = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  return (
    <form className='todos__single'>
      {todo.isDone ? (
        <s className='todos__single--text'>{todo.todo}</s>
      ) : (
        <span className='todos__single--text'>{todo.todo}</span>
      )}

      <div className='todos__single--icons'>
        <div className='icon'>
          <AiFillEdit />
        </div>
        <div className='icon' onClick={() => handleDelete(todo.id)}>
          <AiFillDelete />
        </div>
        <div className='icon' onClick={() => handleDone(todo.id)}>
          <MdDone />
        </div>
      </div>
    </form>
  )
}

export default SingleComponent
