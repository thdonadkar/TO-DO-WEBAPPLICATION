import React from 'react'
import TodoItem from './TodoItem'


const Todos = (props) => {
    const [num, setNum] = React.useState(10);
    const [todos, setTodos] = React.useState(props.todos);

    const sliced = todos.sort((a, b) => b.id - a.id).slice(0, num);

    React.useEffect(() => {
       setTodos(props.todos);
    }, [props.todos])

    return (
        <ul className="list-group my-4">

            {sliced.map((todo, i) =>
                <TodoItem key={i} todo={todo} todos={todos} setTodos={setTodos} />
            )}

            <button className="btn btn-info w-50 mx-auto mt-2" onClick={() => setNum(num + 10)}>Show More</button>
        </ul>
    )
}

export default Todos
