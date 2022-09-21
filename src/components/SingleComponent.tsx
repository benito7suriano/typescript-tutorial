import React, { useRef, useState, useEffect } from 'react'
import { AiFillEdit, AiFillDelete } from 'react-icons/ai'
import { MdDone } from 'react-icons/md'

import { Todo } from '../model'

interface Props {
  todo: Todo
  todos: Todo[]
  editTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

const SingleComponent = ({ todo, todos, editTodos }: Props) => {
  const [edit, setEdit] = useState<boolean>(false)
  const [editTodo, setEditTodo] = useState<string>(todo.todo)

  const handleDone = (id: number) => {
    editTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo,
      ),
    )
  }

  const handleDelete = (id: number) => {
    editTodos(todos.filter((todo) => todo.id !== id))
  }

  const handleEdit = (e: React.FormEvent, id: number) => {
    e.preventDefault()

    editTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, todo: editTodo } : todo,
      ),
    )
    setEdit(false)
  }

  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    inputRef.current?.focus()
  }, [edit])

  return (
    <form className='todos__single' onSubmit={(e) => handleEdit(e, todo.id)}>
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
  )
}

export default SingleComponent
