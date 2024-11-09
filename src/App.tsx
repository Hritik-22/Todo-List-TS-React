import { CiViewList } from "react-icons/ci";
import "./App.css"
import AddTodo from "./Components/AddTodo";
import TodoList from "./Components/TodoList";
import Navbar from "./Components/Navbar";



const App = () => {
    return (
        <main>
            <div className="headding-section">
                <h1><span><CiViewList /></span> Todo-List using React-TypeScript <span><CiViewList /></span></h1>
            </div>
            <Navbar />
            <AddTodo />
            <TodoList />
        </main >
    );
}

export default App;
