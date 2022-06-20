import React, {createContext, useState, useContext} from 'react'

/**
 * Create Context
 */
const ItemContext = createContext([]);

/**
 * Create provider
 */
export function ItemProvider({ children }) {
  const [items, setItems] = useState([]);

  return <ItemContext.Provider value={{ items, setItems }}>{children}</ItemContext.Provider>;
}

/**
 * Custom hook
 */
export default function useItem() {
  return useContext(ItemContext);
}
