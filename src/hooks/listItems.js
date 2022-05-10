import React, {createContext, useState, useContext} from 'react'

/**
 * Create Context
 */
const ListItemsContext = createContext({});

/**
 * Create provider
 */
export function ListItemsProvider({ children }) {
  const [listItems, setListItems] = useState({});

  return <ListItemsContext.Provider value={{ listItems, setListItems }}>{children}</ListItemsContext.Provider>;
}

/**
 * Custom hook
 */
export default function useListItems() {
  return useContext(ListItemsContext);
}
