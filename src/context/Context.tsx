import React, { createContext, useContext, useReducer } from 'react'

import { Todo } from '../model'
import { todosReducer } from '../reducers/Reducers'

const Todos = createContext<{
  state: Todo[]
  dispatch: React.Dispatch<any>
}>({
  state: [],
  dispatch: () => null,
})

interface Props {
  children: React.ReactNode
}

export const Context: React.FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(todosReducer, [])

  return <Todos.Provider value={{ state, dispatch }}>{children}</Todos.Provider>
}

export const TodosState = () => {
  return useContext(Todos)
}
