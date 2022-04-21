import React, { useState } from 'react'
import axios from 'axios';


const AddTodo = ({ todos, setTodos }) => {
    const [addTodo, setAddTodo] = useState({})

    const handleChange = (e) => {
        addTodo.title = e.target.value;
        setAddTodo(addTodo);
    };

    const inputRef = React.useRef();

    const handleSubmit = () => {
        // new add todo values
        addTodo.userId = 11;
        addTodo.completed = false;
        axios.post('https://jsonplaceholder.typicode.com/todos', addTodo)
            .then(res => setTodos([res.data, ...todos]))
            .catch(err => console.log(err))

        inputRef.current.value = "";
    };

    return (
        <div className="input-group w-50 mx-auto">

            <input ref={inputRef} type="text" className="form-control" onChange={handleChange}
                placeholder="" aria-label="" aria-describedby="basic-addon1" />

            <div className="input-group-append">

                <button className="btn btn-success" type="button" onClick={handleSubmit}>
                    Add Todo
                </button>

            </div>
        </div>
    )
}

export default AddTodo
