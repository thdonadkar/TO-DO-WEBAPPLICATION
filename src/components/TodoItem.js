import React from 'react'
import axios from 'axios';


const TodoItem = (props) => {

    const [todo, setTodo] = React.useState(props.todo);

    const [completed, setCompleted] = React.useState(todo.completed);

    React.useEffect(() => {
        setTodo(props.todo);
        setCompleted(props.todo.completed);
    }, [props.todo]);

    return (
        <li className="list-group-item d-flex w-50 mx-auto justify-content-between">

            <div className="form-check text-left d-flex align-items-center">

                <input className="form-check-input" type="checkbox" id="completed" checked={completed}
                    onChange={() => {
                        setCompleted(!completed);
                        todo.completed = completed;
                        setTodo(todo);
                    }} />

                <label className="form-check-label"
                    style={{ textDecoration: completed ? 'line-through' : 'none' }} htmlFor="completed">
                    {todo.title}
                </label>

            </div>

            <button className="btn btn-danger ml-4" onClick={() => {
                axios.delete('https://jsonplaceholder.typicode.com/todos/' + todo.id)
                    .then(res => {
                        console.log(res);
                        const newTodos = props.todos.filter(t => t.id !== todo.id);
                        props.setTodos(newTodos);
                    })
                    .catch(err => console.log(err))
            }}>Delete</button>
        </li>
    )
}

export default TodoItem
