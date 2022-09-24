import React, { useRef, useState, useEffect } from 'react'
import { Draggable } from 'react-beautiful-dnd'
import { AiFillEdit, AiFillDelete } from 'react-icons/ai'
import { MdDone } from 'react-icons/md'

import { Todo } from '../model'

interface Props {
  index: number
  todo: Todo
  todos: Todo[]
  editTodos: React.Dispatch<any>
}

const SingleComponent = ({ index, todo, todos, editTodos }: Props) => {
  const [edit, setEdit] = useState<boolean>(false)
  const [editTodo, setEditTodo] = useState<string>(todo.todo)

  const handleDone = (id: number) => {
    editTodos({
      type: 'DONE',
      payload: id,
    })
  }

  const handleDelete = (id: number) => {
    editTodos({ type: 'REMOVE', payload: id })
  }

  const handleEdit = (e: React.FormEvent, id: number) => {
    e.preventDefault()

    editTodos({ type: 'EDIT', payload: { id, newText: editTodo } })
    setEdit(false)
  }

  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    inputRef.current?.focus()
  }, [edit])

  return (
    <Draggable draggableId={todo.id.toString()} index={index}>
      {(provided) => (
        <form
          className='todos__single'
          onSubmit={(e) => handleEdit(e, todo.id)}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}>
          {edit ? (
            <input
              ref={inputRef}
              value={editTodo}
              className='todos__single--text'
              onChange={(e) => setEditTodo(e.target.value)}
            />
          ) : todo.isDone ? (
            <s className='todos__single--text'>{todo.todo}</s>
          ) : (
            <span className='todos__single--text'>{todo.todo}</span>
          )}

          <div className='todos__single--icons'>
            <div
              className='icon'
              onClick={() => {
                if (!edit && !todo.isDone) {
                  setEdit(!edit)
                }
              }}>
              <AiFillEdit />
            </div>
            <div className='icon' onClick={() => handleDelete(todo.id)}>
              <AiFillDelete />
            </div>
            <div className='icon' onClick={() => handleDone(todo.id)}>
              <MdDone />
            </div>
          </div>
        </form>
      )}
    </Draggable>
  )
}

export default SingleComponent
