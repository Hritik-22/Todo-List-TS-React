import { useSearchParams } from "react-router-dom";
import { Todo, useTodos } from "./Store/TodosData"


const TodoList = () => {
    const { todos, handleChecked, handleDelete } = useTodos();
    const [searchParams] = useSearchParams();

    const paramsData = searchParams.get("todo");
    let filterData = todos;
    if (paramsData === "active") {
        filterData = filterData.filter((task) => !task.status);
    }
    if (paramsData === "completed") {
        filterData = filterData.filter((task) => task.status);
    }


    return (
        <ul>
            {
                filterData.map((todo: Todo) => {
                    return <><li key={todo.id}>
                        <input type="checkbox" id={`todo-${todo.id}`} checked={todo.status} onChange={() => { handleChecked(todo.id) }} />
                        <label htmlFor={`todo-${todo.id}`}>{todo.task}</label>
                        {
                            todo.status && (
                                <button type="button" onClick={() => { handleDelete(todo.id) }}>Delete</button>
                            )
                        }
                    </li>
                    </>
                })

            }

        </ul>
    )
}

export default TodoList
