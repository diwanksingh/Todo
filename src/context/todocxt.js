import { createContext, useContext } from "react";

export const Todocxt = createContext({
    Todos: [
        {id:1,
            todo:"todo first",
            completed:false,
        }

    ],
    addTodo: (todo) => {},
    updatedTodo: (id,todo)=>{},
    deleteTodo: (id)=>{},
    toggleComplete: (id)=> {}

} )

export const useTodo = () => {
    return useContext(Todocxt)
}

export const TodoProvider = Todocxt.Provider;

