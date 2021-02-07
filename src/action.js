export const setData = (Data) => ({type: 'SET_DATA', data: Data});  
export const getData = () => ({type: 'DATA'});  
export const setDisplay = () => ({type: 'DISPLAY_SELECTION'});  
export const deleteItem = (itemId) => ({type: 'DELETE_ITEM', id: itemId});
export const sCreateList = () => ({type: 'SHOW_CREATE_LIST'});
export const createList = (newList) => ({type: 'CREATE_LIST', list : newList});
export const showList = () => ({type: 'ON_LIST'});
export const addItemToList = (id, newObj) => ({type: 'ADD_ITEM_TO_LIST', id: id, obj: newObj});
export const deleteItemFromList = (id, idCard) => ({type: 'DELETE_ITEM_FROM_LIST', id: id, idCard : idCard});
export const addNote = (id, idCard, value) => ({type: 'ADD_NOTE', id: id, idCard : idCard, value: value});
export const addPriority = (id, idCard, value) => ({type: 'ADD_PRIORITY', id: id, idCard : idCard, value: value});
export const addDate = (id, idCard, value) => ({type: 'ADD_DATE', id: id, idCard : idCard, value: value});