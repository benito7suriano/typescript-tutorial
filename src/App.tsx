import React, { useState } from 'react'
import './App.css'
import InputField from './components/InputField'
import TodoList from './components/TodoList'
import { Todo } from './model'

import { TodosState } from './context/Context'

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>('')
  const [todos, setTodos] = useState<Todo[]>([])

  const { hello } = TodosState()

  console.log(hello)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (todo) {
      //TODO: dispatch action to update todo's
    }
    setTodo('')
  }

  return (
    <div className='App'>
      <span className='heading'>taskify</span>
      <InputField
        todo={todo}
        setTodo={setTodo}
        todos={todos}
        handleSubmit={handleSubmit}
      />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  )
}

export default App
