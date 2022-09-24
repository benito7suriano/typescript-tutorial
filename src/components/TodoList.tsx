import React from 'react'
import { Todo } from '../model'
import { Droppable } from 'react-beautiful-dnd'

import SingleComponent from './SingleComponent'

interface Props {
  todos: Todo[]
  editTodos: React.Dispatch<any>
  completedTodos: Todo[]
  setCompletedTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

const TodoList = ({
  todos,
  editTodos,
  completedTodos,
  setCompletedTodos,
}: Props) => {
  return (
    <div className='container'>
      <Droppable droppableId='TodosList'>
        {(provided) => (
          <div
            className='todos'
            ref={provided.innerRef}
            {...provided.droppableProps}>
            <span className='todos__heading'>Active Tasks</span>
            {todos.map((t, i) => (
              <SingleComponent
                index={i}
                key={t.id}
                todo={t}
                todos={todos}
                editTodos={editTodos}
              />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
      <Droppable droppableId='TodosRemove'>
        {(provided) => (
          <div
            className='todos remove'
            ref={provided.innerRef}
            {...provided.droppableProps}>
            <span className='todos__heading'>Completed Tasks</span>
            {completedTodos.map((t, i) => (
              <SingleComponent
                index={i}
                key={t.id}
                todo={t}
                todos={completedTodos}
                editTodos={setCompletedTodos}
              />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  )
}

export default TodoList
