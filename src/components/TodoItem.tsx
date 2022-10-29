import { IntTodo } from "../types/data";

interface IntTodoItem extends IntTodo {
    deleteTodo: (id:number) => void;
  checkTodo: (id:number) => void;
}

const TodoItem: React.FC<IntTodoItem> = ({ id, text, checked, checkTodo, deleteTodo }) => {
  return (
    <li>
      <input type="checkbox" checked={checked} onChange={() => checkTodo(id)}/>
      <p>{text}</p>
      <button onClick={() => deleteTodo(id)}>Delete</button>
    </li>
  );
};
export { TodoItem };
