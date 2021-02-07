


const initialState = {

  data : [],
  display: false,
  showCreateList: false,
  onList: false,
}

const reducer = (state = initialState, action) =>{

    switch (action.type) {
        case 'SET_DATA':
          return {...state, data : action.data}
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
          // console.log(action.obj)
          return {...state, data: state.data.map(item =>{
            if(item.id === action.id){
              return { ...item, lists : [...item.lists, action.obj] }
            }
            return item;
          })
        }

        case 'DELETE_ITEM_FROM_LIST':
          return {...state, data : state.data.map((item)=>{
                if(item.id === action.idCard){
                  return {...item, lists : item.lists.filter(it => it.id !== action.id)}
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