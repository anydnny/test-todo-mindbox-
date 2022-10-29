import { IntTodo } from "../types/data";
interface IntTodoListProps {
  todos: IntTodo[],
  changeFilter: (filter:string) => void,
  clearCompleted: () => void
}
const Footer: React.FC<IntTodoListProps> = ({todos, changeFilter,clearCompleted}) => {
    const leftCount:string = todos.filter(todo => !todo.checked).length.toString();
    return (
        <footer>
            <span>{leftCount} todos left</span> 
            <ul>
                <li onClick={() => changeFilter("All")}>All</li>
                <li onClick={() => changeFilter("Active")}>Active</li>
                <li onClick={() => changeFilter("Completed")}>Completed</li>
            </ul>
            <button onClick={clearCompleted}>Clear Completed</button>
        </footer>
    )
}
export {Footer}