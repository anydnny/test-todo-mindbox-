import { IntTodo } from "../types/data";
import { TodoItem } from "./TodoItem";
import styled from "styled-components";

interface IntTodoListProps {
  todos: IntTodo[];
  deleteTodo: (id: number) => void;
  checkTodo: (id: number) => void;
}

const StyledList = styled.ul`
  min-height: 20rem;
  max-height: 35rem;
  overflow: scroll;
  span {
    font-size: 3rem;
  }
`;
const TodoList: React.FC<IntTodoListProps> = ({
  todos,
  deleteTodo,
  checkTodo,
}) => {
  return (
    <StyledList>
      {todos.length === 0 ? <span>Добавьте первый таск</span> : null}
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          {...todo}
          deleteTodo={deleteTodo}
          checkTodo={checkTodo}
        />
      ))}
    </StyledList>
  );
};
export { TodoList };
