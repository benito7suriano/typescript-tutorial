import React from 'react'
import { Todo } from '../model'

import SingleComponent from './SingleComponent'

interface Props {
  todos: Todo[]
  editTodos: React.Dispatch<any>
}

const TodoList = ({ todos, editTodos }: Props) => {
  return (
    <div className='container'>
      <div className='todos'>
        <span className='todos__heading'>Active Tasks</span>
        {todos.map((t) => (
          <SingleComponent
            key={t.id}
            todo={t}
            todos={todos}
            editTodos={editTodos}
          />
        ))}
      </div>
      <div className='todos remove'>
        <span className='todos__heading'>Completed Tasks</span>
        {todos.map((t) => (
          <SingleComponent
            key={t.id}
            todo={t}
            todos={todos}
            editTodos={editTodos}
          />
        ))}
      </div>
    </div>
  )
}

export default TodoList
