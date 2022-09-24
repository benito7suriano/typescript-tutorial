import React, { useState } from 'react'
import './App.css'
import InputField from './components/InputField'
import TodoList from './components/TodoList'
import { Todo } from './model'
import { DragDropContext } from 'react-beautiful-dnd'

import { TodosState } from './context/Context'

const App: React.FC = () => {
  // global state containing Todo[]
  const { state, dispatch } = TodosState()

  // local state for controlled input
  const [todo, setTodo] = useState<string>('')
  const [completedTodos, setCompletedTodos] = useState<Todo[]>([])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (todo) {
      dispatch({
        type: 'ADD',
        payload: todo,
      })
    }
    setTodo('')
  }

  return (
    <DragDropContext onDragEnd={() => ''}>
      <div className='App'>
        <span className='heading'>taskify</span>
        <InputField
          todo={todo}
          setTodo={setTodo}
          todos={state}
          handleSubmit={handleSubmit}
        />
        <TodoList
          todos={state}
          editTodos={dispatch}
          completedTodos={completedTodos}
          setCompletedTodos={setCompletedTodos}
        />
      </div>
    </DragDropContext>
  )
}

export default App
