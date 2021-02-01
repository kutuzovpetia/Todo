export const getData = () => ({type: 'DATA'});  
export const setDisplay = () => ({type: 'DISPLAY_SELECTION'});  
export const deleteItem = (itemId) => ({type: 'DELETE_ITEM', id: itemId});
export const sCreateList = () => ({type: 'SHOW_CREATE_LIST'});
export const createList = (newList) => ({type: 'CREATE_LIST', list : newList});
// export const getList = (id) => ({type: 'GET_LIST', id: id});
export const showList = () => ({type: 'ON_LIST'});