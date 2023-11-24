interface TodoItem {
    task: string;
  }
const TodoItem:React.FC<TodoItem> = ({task}) => {
    console.log("list");

    return(
        <><div>{task}</div></>
    )
}
export default TodoItem;