import AddTodo from './AddTodo';
import TodoList from './TodoList';
import './App.css';
import { useState } from 'react';

function App() {
  const [tasks, setTasks] = useState<string[]>([]);

  const addTask = (task: string) => {
    setTasks([...tasks, task]);
  }

  return (
    <div className="App">
      <header className="App-header">
        <AddTodo add={addTask} />
        <TodoList tasks={tasks} />
      </header>
    </div>
  );
}

export default App;
