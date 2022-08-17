
const initialState = [{
    id: 1,
    todo: 'Recolectar la piedra del Alma',
    done: false,
}];

const todoReducer = ( state = initialState, action = {} ) => {

    if( action.type === '[Todo] add todo'){
        return [ ...state, action.payload ];
    }

    return state;

}

let todos = todoReducer();

const newTodo = 
todos.push({
    id:2,
    todo: 'Recolectar la piedra del alma',
    done: false
});


const addTodoAction = {
    type: '[Todo] add todo',
    payload: newTodo,

}

todos = todoReducer( todos, addTodoAction );

console.log({ state: todos})