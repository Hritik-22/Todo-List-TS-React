import { useState } from "react"
import { useTodos } from "./Store/TodosData";

const AddTodo = () => {
    const [todo, setTodo] = useState<string>("");
    const { HandleAddTodo } = useTodos();

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(todo)
        HandleAddTodo(todo);
        setTodo("")
    };



    return (
        <div className="add-task-section">
            <form onSubmit={handleSubmit} id="form">
                <input type="text" value={todo} onChange={(e) => setTodo(e.target.value)} placeholder="click here to add task" />
                <button type="submit">add</button>
            </form>
        </div>
    )
}

export default AddTodo;
