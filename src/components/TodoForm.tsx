import React from 'react'
import { useState } from 'react'

interface TodoFormProps {
  addTodo: (value: string, category: string) => void
}

export default function TodoForm({ addTodo }: TodoFormProps) {
  const [value, setValue] = useState('')
  const [category, setCategory] = useState('')

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!value || !category) return
    addTodo(value, category)
    setValue('')
    setCategory('')
  }

  return (
    <>
      <div className="todo-form p-4 bg-gray-100 rounded-lg shadow-md">
        <h2 className="text-lg font-semibold mb-4">Criar Tarefa:</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Digite o título"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Selecione uma categoria</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Pessoal">Pessoal</option>
            <option value="Estudos">Estudos</option>
          </select>
          <button
            type="submit"
            className="w-full px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Criar Tarefa
          </button>
        </form>
      </div>
    </>
  )
}
