import './app.css';
import Task from "./components/task/Task";
import Form from "./components/form/Form";
import {useSelector} from "react-redux";

function App() {
    const todos = useSelector(state => state.todos.todos);

    return (
        <div className="App">
            <Form/>
            {todos.map(todo => {
                return (
                    <Task
                        key={todo.id}
                        id={todo.id}
                        description={todo.description}
                        title={todo.title}
                        priority={todo.priority}
                    />
                )
            })}
        </div>
    );
}

export default App;
