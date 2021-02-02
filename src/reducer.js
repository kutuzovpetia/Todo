
const initialState = {

  data : [
    {
        id:1,
        title: 'Задания на сегодня',
        list : [
            {id:1, title: 'Купить хлеба', note: 'Заметка', date: '2021-02-04', priority: 'Высокий'},
            {id:2, title: 'Попить чаю', note: '', date: '', priority: 'Низкий'},
            {id:3, title: 'Сходить в магазин', note: '', date: '', priority: 'Средний'},
            {id:4, title: 'Покушать', note: 'Заметка', date: '2021-02-04', priority: 'Высокий'},
            {id:5, title: 'Не волноватся', note: '', date: '', priority: 'Низкий'},
        ]
    },
    {
        id:2,
        title: 'Просто планы',
        list : [
            {id:1, title: 'Купить хлеба', note: '', date: '', priority: ''},
            {id:2, title: 'Попить чаю', note: '', date: '', priority: ''},
            {id:3, title: 'Сходить в магазин', note: '', date: '', priority: ''},
            {id:4, title: 'Покушать', note: '', date: '', priority: ''},
            {id:5, title: 'lol', note: '', date: '', priority: ''},
            {id:6, title: 'покушать надо опять', note: '', date: '', priority: ''},
        ]
    },
    {
        id:3,
        title: 'Надо сделать',
        list : [
            {id:1, title: 'Купить хлеба', note: '', date: '', priority: ''},
            {id:2, title: 'Попить чаю', note: '', date: '', priority: ''},
            {id:3, title: 'Сходить в магазин', note: '', date: '', priority: ''},
            {id:4, title: 'Покушать', note: '', date: '', priority: ''},
        ]
    },
    {
        id:4,
        title: 'Очень важно',
        list : [
            {id:1, title: 'Купить хлеба', note: '', date: '', priority: ''},
            {id:2, title: 'Попить чаю', note: '', date: '', priority: ''},
            {id:3, title: 'Сходить в магазин', note: '', date: '', priority: ''},
            {id:4, title: 'Покушать', note: '', date: '', priority: ''},
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
        case 'ADD_ITEM_TO_LIST':
          console.log(action.obj)
          return {...state, data: state.data.map(item =>{
            if(item.id === action.id){
              return { ...item, list : [...item.list, action.obj] }
            }
            return item;
          })
        }

        case 'DELETE_ITEM_FROM_LIST':
          return {...state, data : state.data.map((item)=>{
                if(item.id === action.idCard){
                  return {...item, list : item.list.filter(it => it.id !== action.id)}
                }
                return item;
          }) }

        case 'ADD_NOTE':  
          return {...state, data : state.data.map((item)=>{
            if(item.id === action.idCard){
              return {...item, list : item.list.map((it)=>{
                if(it.id === action.id){ return {...it, note: action.value}}
                return it;
              })}
            }
            return item;
          })}

          case 'ADD_PRIORITY': 
          console.log(`${action.id} ${action.idCard} ${action.value}`) 
          return {...state, data : state.data.map((item)=>{
            if(item.id === action.idCard){
              return {...item, list : item.list.map((it)=>{
                if(it.id === action.id){ return {...it, priority: action.value}}
                return it;
              })}
            }
            return item;
          })}

          case 'ADD_DATE': 
          console.log(`${action.id} ${action.idCard} ${action.value}`) 
          return {...state, data : state.data.map((item)=>{
            if(item.id === action.idCard){
              return {...item, list : item.list.map((it)=>{
                if(it.id === action.id){ return {...it, date: action.value}}
                return it;
              })}
            }
            return item;
          })}
        default:
          return state;
    }
}

export default reducer;