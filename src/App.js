import { useState, useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';


function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/todos')
      .then(res => setTodos(res.data))
      .catch(err => console.log(err));
  }, [])

  return (
    <div className="App container">
      <h1>Todo App</h1>
      
      <AddTodo todos={todos} setTodos={setTodos} />

      <Todos todos={todos} />

    </div>
  );
}

export default App;
