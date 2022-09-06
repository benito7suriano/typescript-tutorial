import React, { useState } from 'react'
import './App.css'
import InputField from './components/InputField'
import { Todo } from './model'

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>('')
  const [todos, setTodos] = useState<Todo[]>([])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
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
      <ul>
        {todos.map((t: Todo) => (
          <li>{t.todo}</li>
        ))}
      </ul>
    </div>
  )
}

export default App
