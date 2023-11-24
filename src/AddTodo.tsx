import { useState } from "react";

interface AddTodoProps {
    add: (task: string) => void;
  }

const AddTodo:React.FC<AddTodoProps> = ({ add }) => {
  const [todo, addTodo] = useState('');

  const addTask = () => {
    if(todo !=""){
        add(todo);
        addTodo('');
    }

  }

  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      addTask();
    }}>
        <input
          type="text"
          name="todo"
          value={todo}
          onChange={(e) => {
            addTodo(e.target.value);
          }}
        />
        <button type="submit">Add Task</button>
    </form>
  );
};

export default AddTodo;
