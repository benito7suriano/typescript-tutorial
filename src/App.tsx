import React, { useState } from 'react'
import './App.css'
import InputField from './components/InputField'
import TodoList from './components/TodoList'
import { Todo } from './model'
import { DragDropContext, DropResult } from 'react-beautiful-dnd'

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

  const onDragEnd = (result: DropResult) => {
    const { source, destination } = result
    if (!destination) {
      return
    } else if (
      source.droppableId === destination?.droppableId &&
      destination.index === source.index
    ) {
      return
    } else {
      let add
      const active = state
      const complete = completedTodos

      if (source.droppableId === 'TodosList') {
        add = active[source.index]
        active.splice(source.index, 1)
      } else {
        add = complete[source.index]
        complete.splice(source.index, 1)
      }

      if (destination.droppableId === 'TodosList') {
        active.splice(destination?.index, 0, add)
      } else {
        complete.splice(destination.index, 0, add)
      }

      setCompletedTodos(complete)
      dispatch({
        type: 'UPDATE',
        payload: active,
      })
    }
  }

  return (
    <DragDropContext onDragEnd={onDragEnd}>
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
