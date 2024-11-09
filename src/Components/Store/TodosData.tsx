import { ReactNode, createContext, useContext, useState } from "react";


//  create type for Children - 

export type TodosProviderProps = {
    children: ReactNode
}
//  type and interFace are similar  -
export interface Todo {
    id: string;
    task: string;
    status: boolean;
    createdAt: Date

}
export interface TodosContext {
    todos: Todo[];
    HandleAddTodo: (task: string) => void;
    handleChecked: (id: string) => void;
    handleDelete: (id: string) => void;
    // if define a function with in an object, it is generally known as a method of that object,
}


const TodosContext = createContext<TodosContext | null>(null);  // Create Context - 

export const TodosProvider = ({ children }: TodosProviderProps) => {
    const [todos, setTodos] = useState<Todo[]>(() => {
        try {
            const newTodos = localStorage.getItem("todos") || "[]";
            return JSON.parse(newTodos) as Todo[]

        } catch (error) {
            return [];
        }
    })

    const HandleAddTodo = (task: string) => {
        setTodos((prev) => {
            const newTodos: Todo[] = [{
                id: Math.random().toString(),
                task: task,
                status: false,
                createdAt: new Date()
            }, ...prev];
            localStorage.setItem("todos", JSON.stringify(newTodos));
            return newTodos;

        }
        );
    }

    //  checkbox function -

    const handleChecked = (id: string) => {
        setTodos((prev) => {
            const newTodos = prev.map((todo) => {
                if (todo.id === id) {
                    return { ...todo, status: !todo.status }
                }
                return todo;
            });
            localStorage.setItem("todos", JSON.stringify(newTodos));
            return newTodos;
        })
    }

    // handle Delete function - 
    const handleDelete = (id: string) => {
        setTodos((prev) => {
            const newTodos = prev.filter((todo) => todo.id !== id);
            localStorage.setItem("todos", JSON.stringify(newTodos));
            return newTodos;
        })
    };


    return <TodosContext.Provider value={{ todos, HandleAddTodo, handleChecked, handleDelete }}>
        {children}
    </TodosContext.Provider>
}

// consumer  - check wraped container -

export const useTodos = () => {
    const todosConsumer = useContext(TodosContext)
    if (!todosConsumer) {
        throw new Error("useTodos are used in outside of  Provider");
    }
    return todosConsumer;
}




