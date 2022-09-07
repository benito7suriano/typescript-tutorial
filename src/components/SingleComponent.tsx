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
  return (
    <form className='todos__single'>
      <span className='todos__single--text'>{todo.todo}</span>
      <div className='todos__single--icons'>
        <div className='icon'>
          <AiFillEdit />
        </div>
        <div className='icon'>
          <AiFillDelete />
        </div>
        <div className='icon'>
          <MdDone />
        </div>
      </div>
    </form>
  )
}

export default SingleComponent
