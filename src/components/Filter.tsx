import React from 'react'
import { Dispatch, SetStateAction } from 'react'

export type FilterItemProps = {
  filter: string
  setFilter: Dispatch<SetStateAction<string>>
  setSort: Dispatch<SetStateAction<string>>
}

export default function FilterItem({
  filter,
  setFilter,
  setSort,
}: FilterItemProps) {
  return (
    <>
      <div className="filter p-4 bg-gray-100 rounded-lg shadow-md">
        <h2 className="text-lg font-semibold mb-4">Filtrar:</h2>
        <div className="filter-options space-y-4">
          <div>
            <p className="text-sm font-medium mb-1">Status:</p>
            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="All">Todas</option>
              <option value="Completed">Completas</option>
              <option value="Incomplete">Incompletas</option>
            </select>
          </div>
          <div>
            <p className="text-sm font-medium mb-1">Ordem alfabética:</p>
            <div className="flex space-x-2">
              <button
                onClick={() => setSort('Asc')}
                className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Asc
              </button>
              <button
                onClick={() => setSort('Desc')}
                className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Desc
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
