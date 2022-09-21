import React from 'react'
import { Todo } from '../model'

import SingleComponent from './SingleComponent'

interface Props {
  todos: Todo[]
  editTodos: React.Dispatch<any>
}

const TodoList = ({ todos, editTodos }: Props) => {
  return (
    <ul>
      {todos.map((t) => (
        <SingleComponent
          key={t.id}
          todo={t}
          todos={todos}
          editTodos={editTodos}
        />
      ))}
    </ul>
  )
}

export default TodoList
