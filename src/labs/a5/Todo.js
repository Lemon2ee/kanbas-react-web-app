import {useEffect, useState} from "react";
import axios from "axios";

export default function TodoList() {
    const API = `${process.env.REACT_APP_API_BASE}/a5/todos`;

    const [todo, setTodo] = useState({
        id: 1,
        title: "NodeJS Assignment",
        description: "Create a NodeJS server with ExpressJS",
        due: "2021-09-09",
        completed: false,
    });

    const [todos, setTodos] = useState([]);
    const fetchTodos = async () => {
        const response = await axios.get(API);
        return response.data;
    };

    const deleteTodo = async (todo) => {
        await axios.delete(`${API}/${todo.id}`);
        setTodos(todos.filter((t) => t.id !== todo.id));
    };


    const createTodo = async () => {
        const response = await axios.get(`${API}/create`);
        setTodos(response.data);
    };

    const fetchTodoById = async (id) => {
        const response = await axios.get(`${API}/${id}`);
        setTodo(response.data);
    };

    const updateTitle = async () => {
        const response = await axios.get(
            `${API}/${todo.id}/title/${todo.title}`);
        setTodos(response.data);
    };

    const updateTodo = async () => {
        await axios.put(
            `${API}/${todo.id}`, todo);
        setTodos(todos.map((t) => (
            t.id === todo.id ? todo : t)));
        setTodo({});
    };


    const postTodo = async () => {
        const response = await axios.post(API, todo);
        setTodos([...todos, response.data]);
    };


    useEffect(() => {
        fetchTodos().then((data) => setTodos(data))
        // eslint-disable-next-line
    }, []);

    return (
        <div>
            <button onClick={createTodo}
                    className="btn btn-primary mb-2 w-100">
                Create Todo
            </button>

            <input value={todo.id}
                   className="form-control mb-2"
                   onChange={(e) => setTodo({
                       ...todo, id: Number(e.target.value)
                   })}/>
            <input value={todo.title}
                   className="form-control mb-2"
                   onChange={(e) => setTodo({
                       ...todo, title: e.target.value
                   })}/>
            <button onClick={updateTitle}
                    className="btn btn-success mb-2 w-100">
                Update Title
            </button>

            <textarea
                onChange={(e) => setTodo({
                    ...todo,
                    description: e.target.value
                })}
                value={todo.description} type="text"
            />
            <input
                onChange={(e) => setTodo({
                    ...todo, due: e.target.value
                })}
                value={todo.due} type="date"
            />
            <label>
                <input
                    onChange={(e) => setTodo({
                        ...todo, completed: e.target.checked
                    })}
                    value={todo.completed} type="checkbox"
                />
                Completed
            </label>
            <button onClick={postTodo}>
                Post Todo
            </button>
            <button onClick={updateTodo}>
                Update Todo
            </button>

            <ul className="list-group">
                {todos.map((todo) => (
                    <li key={todo.id}
                        className="list-group-item">
                        <button
                            onClick={() => fetchTodoById(todo.id)}
                            className="btn btn-warning me-2 float-end">
                            Edit
                        </button>
                        <button
                            onClick={() => deleteTodo(todo)}
                            className="btn btn-danger float-end">
                            Remove
                        </button>
                        <input
                            checked={todo.completed}
                            type="checkbox" readOnly
                        />
                        {todo.title}
                        <p>{todo.description}</p>
                        <p>{todo.due}</p>
                    </li>
                ))}
            </ul>

        </div>
    )
}