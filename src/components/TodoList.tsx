import React from 'react'
import { Todo } from '../model'

import SingleComponent from './SingleComponent'

interface Props {
  todos: Todo[]
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

const TodoList = ({ todos, setTodos }: Props) => {
  return (
    <ul>
      {todos.map((t) => (
        <SingleComponent
          key={t.id}
          todo={t}
          todos={todos}
          setTodos={setTodos}
        />
      ))}
    </ul>
  )
}

export default TodoList
