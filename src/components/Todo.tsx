import React from 'react'

interface TodoProps {
  todo: {
    id: number
    text: string
    category: string
    isCompleted: boolean
  }
  removeTodo: (id: number) => void
  completeTodo: (id: number) => void
}

export default function Todo({ todo, removeTodo, completeTodo }: TodoProps) {
  return (
    <>
      <div
        className={`todo flex justify-between items-center p-4 border rounded-md ${
          todo.isCompleted ? 'bg-green-100 line-through' : 'bg-white'
        }`}
      >
        <div className="content">
          <p className="text-lg font-medium">{todo.text}</p>
          <p className="category text-sm text-gray-500">({todo.category})</p>
        </div>
        <div className="flex space-x-2">
          <button
            className="complete px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            onClick={() => completeTodo(todo.id)}
          >
            Completar
          </button>
          <button
            className="remove px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
            onClick={() => removeTodo(todo.id)}
          >
            X
          </button>
        </div>
      </div>
    </>
  )
}
