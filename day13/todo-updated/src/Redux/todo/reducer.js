import { DELETE_TODO, GET_TODOS,ADD_TODO, TOGGLE_TODO} from "./actionType"
const iniState = {
    todos:[]
}
export const todosReducer = (state=iniState,{type,payload})=>{
    switch(type){
        case GET_TODOS:{
            return{
                ...state,
                todos: payload
            }
        }
        case DELETE_TODO:{
            return{
                ...state,
                todos: state.todos.filter((item)=>item.id!==payload)
            }
        }
        case ADD_TODO:{
            return{
                ...state,
                todos: [...state.todos,payload]
            }
        }
        case TOGGLE_TODO:{
            state.todos.map((items)=>{
                if(items.id===payload){
                    items.status = !items.status
                }
            })
            return{
                ...state,
                todos: [...state.todos]
            }
        }
        default:{
            return state
        }
    }
    
}