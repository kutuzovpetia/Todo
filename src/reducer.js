
const initialState = {

  data : [
    {
        id:1,
        title: 'Задания на сегодня',
        list : [
            {id:1, title: 'Купить хлеба'},
            {id:2, title: 'Попить чаю'},
            {id:3, title: 'Сходить в магазин'},
            {id:4, title: 'Покушать'},
        ]
    },
    {
        id:2,
        title: 'Просто планы',
        list : [
            {id:1, title: 'Купить хлеба'},
            {id:2, title: 'Попить чаю'},
            {id:3, title: 'Сходить в магазин'},
            {id:4, title: 'Покушать'},
            {id:5, title: 'lol'},
        ]
    },
    {
        id:3,
        title: 'Надо сделать',
        list : [
            {id:1, title: 'Купить хлеба'},
            {id:2, title: 'Попить чаю'},
            {id:3, title: 'Сходить в магазин'},
            {id:4, title: 'Покушать'},
        ]
    },
    {
        id:4,
        title: 'Очень важно',
        list : [
            {id:1, title: 'Купить хлеба'},
            {id:2, title: 'Попить чаю'},
            {id:3, title: 'Сходить в магазин'},
            {id:4, title: 'Покушать'},
        ]
    },
],
  display: false,
  showCreateList: false,
  onList: false,
}

const reducer = (state = initialState, action) =>{

    switch (action.type) {
        case 'DATA':
          return  state.data
        case 'DISPLAY_SELECTION':
          return  {...state, display: !state.display}
        case 'DELETE_ITEM':
          return {...state, data: state.data.filter(item => item.id !== action.id)}
        case 'SHOW_CREATE_LIST':
          return {...state, showCreateList : !state.showCreateList}   
        case 'CREATE_LIST':
          return {...state, data: [action.list, ...state.data]}   
        case 'ON_LIST':
          return {...state, onList: !state.onList}
        default:
          return state;
    }
}

export default reducer;