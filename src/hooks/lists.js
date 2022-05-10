import React, {createContext, useState, useContext} from 'react'

/**
 * Create context
 */
const ListContext = createContext([]);

/**
 * Create provider
 */
export function ListProvider({children}) {

  const [lists, setLists] = useState([])

  return (
    <ListContext.Provider value={{lists, setLists}}>{children}</ListContext.Provider>
  )
}

/**
 * Custom Hook
 */
export default function useList() {
  return useContext(ListContext)
}
