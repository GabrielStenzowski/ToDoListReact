import React from 'react'

interface SearchItemProps {
  search: string
  setSearch: (value: string) => void
}

export default function SearchItem({ search, setSearch }: SearchItemProps) {
  return (
    <>
      <div className="search p-4 bg-gray-100 rounded-lg shadow-md">
        <h2 className="text-lg font-semibold mb-4">Pesquisar:</h2>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Digite para pesquisar..."
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
    </>
  )
}
