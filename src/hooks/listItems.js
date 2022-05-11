import React, {createContext, useState, useContext} from 'react'
import api from '../utils/api.service';

/**
 * Create Context
 */
const ListItemsContext = createContext({});

/**
 * Create provider
 */
export function ListItemsProvider({ children }) {
  const [listItems, setListItems] = useState({});

  const handleNewItem = async (payload) => {
    const response = await api.storeListItem(payload);
    const {data} = response
    const {list_items, ...rest} = listItems
    let items = [...list_items]
    items.unshift(data)
    setListItems({...rest, list_items: items})
  }

  const handleUpdateItem = async (payload) => {
    const response = await api.updateListItem(payload.id, payload)
    const {data} = response
    const {list_items, ...rest} = listItems
    let items = [...list_items]
    const index = items.findIndex(item => item.id === data.id)
    items[index] = data
    setListItems({...rest, list_items: items})
  }

  const handleDeleteItem = async (itemId) => {
    await api.deleteListItem(itemId)
    const {list_items, ...rest} = listItems
    let items = [...list_items]
    const index = items.findIndex(item => item.id === itemId)
    if (index > -1) {
      items.splice(index, 1); // 2nd parameter means remove one item only
      setListItems({...rest, list_items: items})
    }
  }

  return <ListItemsContext.Provider value={{ listItems, setListItems, handleNewItem, handleUpdateItem, handleDeleteItem }}>{children}</ListItemsContext.Provider>;
}

/**
 * Custom hook
 */
export default function useListItems() {
  return useContext(ListItemsContext);
}
