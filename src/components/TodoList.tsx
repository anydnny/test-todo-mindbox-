import { IntTodo } from "../types/data";
import { TodoItem } from "./TodoItem";
interface IntTodoListProps {
  todos: IntTodo[];
  deleteTodo: (id: number) => void;
  checkTodo: (id: number) => void;
}
const TodoList: React.FC<IntTodoListProps> = ({
  todos,
  deleteTodo,
  checkTodo,
}) => {
  return (
    <ul>
      {todos.map((todo) => (
        
        <TodoItem
          key={todo.id}
          {...todo}
          deleteTodo={deleteTodo}
          checkTodo={checkTodo}
        />
      ))}
    </ul>
  );
};
export { TodoList };
