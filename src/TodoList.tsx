import TodoItem from "./TodoItem";

interface TodoList {
    tasks: string[];
  }
const TodoList:React.FC<TodoList> = ({tasks}) => {


    return(
        <>{tasks.map(task=>(
            <TodoItem task={task}/>
        ))}</>
    )
}
export default TodoList;