import { useState } from 'react'
import './App.css'
import Todo from './components/Todo'
import SearchItem from './components/Search'
import FilterItem from './components/Filter'
import TodoForm from './components/TodoForm'
import React from 'react'

export default function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: 'Criar funcionalidade X no sistema',
      category: 'Trabalho',
      isCompleted: false,
    },
    {
      id: 2,
      text: 'Ir para a academia',
      category: 'Pessoal',
      isCompleted: false,
    },
    {
      id: 3,
      text: 'Estudar React',
      category: 'Estudos',
      isCompleted: false,
    },
  ])

  const [search, setSearch] = useState('')
  const [filter, setFilter] = useState('All')
  const [sort, setSort] = useState('Asc')

  const addTodo = (text, category) => {
    const newTodos = [
      ...todos,
      {
        id: Math.floor(Math.random() * 10000),
        text,
        category,
        isCompleted: false,
      },
    ]

    setTodos(newTodos)
  }

  const removeTodo = (id) => {
    const newTodos = [...todos]
    const filtredTodos = newTodos.filter((todo) =>
      todo.id !== id ? todo : null
    )
    setTodos(filtredTodos)
  }

  const completeTodo = (id) => {
    const newTodos = [...todos]
    newTodos.map((todo) =>
      todo.id === id ? (todo.isCompleted = !todo.isCompleted) : todo
    )
    setTodos(newTodos)
  }

  return (
    <>
      <div className="app bg-gray-100 min-h-screen p-4">
        <h1 className="text-2xl font-bold text-center">Lista de Tarefas</h1>
        <SearchItem search={search} setSearch={setSearch} />
        <FilterItem filter={filter} setFilter={setFilter} setSort={setSort} />
        <div className="todo-list grid gap-4 mt-4">
          {todos
            .filter((todo) =>
              filter === 'All'
                ? true
                : filter === 'Completed'
                ? todo.isCompleted
                : !todo.isCompleted
            )
            .filter((todo) =>
              todo.text.toLowerCase().includes(search.toLowerCase())
            )
            .sort((a, b) =>
              sort === 'Asc'
                ? a.text.localeCompare(b.text)
                : b.text.localeCompare(a.text)
            )
            .map((todo) => (
              <Todo
                key={todo.id}
                todo={todo}
                removeTodo={removeTodo}
                completeTodo={completeTodo}
              />
            ))}
        </div>
        <TodoForm addTodo={addTodo} />
      </div>
    </>
  )
}
