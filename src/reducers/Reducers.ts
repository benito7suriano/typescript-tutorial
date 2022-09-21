import { Todo } from '../model'

type Action =
  | { type: 'ADD'; payload: string }
  | { type: 'REMOVE'; payload: number }
  | { type: 'DONE'; payload: number }

export const todosReducer = (state: Todo[], action: Action) => {
  switch (action.type) {
    case 'ADD':
      return [...state, { id: Date.now(), todo: action.payload, isDone: false }]
    case 'REMOVE':
      return state.filter((todo) => todo.id !== action.payload)
    case 'DONE':
      return state.map((todo) =>
        todo.id === action.payload
          ? { ...todo, isDone: !todo.isDone }
          : { ...todo },
      )
    default:
      return state
  }
}
