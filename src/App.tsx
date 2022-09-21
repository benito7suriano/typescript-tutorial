import React, { useState } from 'react'
import './App.css'
import InputField from './components/InputField'
import TodoList from './components/TodoList'
import { Todo } from './model'

import { TodosState } from './context/Context'

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>('')
  // const [todos, setTodos] = useState<Todo[]>([])

  const { state, dispatch } = TodosState()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (todo) {
      //TODO: dispatch action to update todo's
      dispatch({
        type: 'ADD',
        payload: todo,
      })
    }
    setTodo('')
  }

  console.log('state', state)

  return (
    <div className='App'>
      <span className='heading'>taskify</span>
      <InputField
        todo={todo}
        setTodo={setTodo}
        todos={state}
        handleSubmit={handleSubmit}
      />
      <TodoList todos={state} editTodos={dispatch} />
    </div>
  )
}

export default App
