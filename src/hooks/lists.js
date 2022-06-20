import React, {createContext, useState, useContext} from 'react'
import api from '../utils/api.service';

/**
 * Create context
 */
const ListContext = createContext([]);

/**
 * Create provider
 */
export function ListProvider({children}) {

  const [lists, setLists] = useState([])

  const handleDeleteList = async (listId) => {
    await api.deleteUserList(listId)
    let listsClone = [...lists]
    const index = listsClone.findIndex(list => list.id === listId)
    if (index > -1) {
      listsClone.splice(index, 1); // 2nd parameter means remove one item only
      setLists(listsClone)
    }
  }

  return (
    <ListContext.Provider value={{lists, setLists, handleDeleteList}}>{children}</ListContext.Provider>
  )
}

/**
 * Custom Hook
 */
export default function useList() {
  return useContext(ListContext)
}
