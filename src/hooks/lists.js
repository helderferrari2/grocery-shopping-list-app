import React, {createContext, useState, useCallback, useContext} from 'react'
import http from '../utils/http'

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

export default function useList() {
  return useContext(ListContext)
}
