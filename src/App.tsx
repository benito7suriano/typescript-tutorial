import React, { useState } from 'react'
import './App.css'
import InputField from './components/InputField'
import { Todo } from './model'

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>('')
  const [todos, setTodos] = useState<Todo[]>([])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('submitting...')
    if (todo) {
      setTodos([
        ...todos,
        {
          id: Date.now(),
          todo,
          isDone: false,
        },
      ])
    }

    setTodo('')
    console.log(todos)
  }

  return (
    <div className='App'>
      <span className='heading'>taskify</span>
      <InputField todo={todo} setTodo={setTodo} handleSubmit={handleSubmit} />
    </div>
  )
}

export default App
