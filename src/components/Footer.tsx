import { IntTodo } from "../types/data";
import styled from "styled-components";

interface IntTodoListProps {
  todos: IntTodo[];
  changeFilter: (filter: string) => void;
  clearCompleted: () => void;
}

const StyledFooter = styled.footer`
  display: flex;
  width: 90%;
  justify-content: space-between;
  margin-top: 2rem;
  font-size: 2rem;
  margin-bottom: 2rem;

  button {
    background-color: transparent;
    border: none;
    padding: 0.3rem;
    cursor: pointer;
    transition: 0.3s;
  }
  button:hover {
    border-radius: 0.3rem;
    background-color: #ff000064;
  }
`;
const StyledFilters = styled.ul`
  display: flex;
  justify-content: space-between;
  width: 30%;

  li {
    cursor: pointer;
    padding: .2rem;
  }
  li:hover{
    text-decoration: underline;
  }
  .active:hover{
    text-decoration: none;
  }
  .active {
    border: .1rem solid black;
    border-radius: .5rem;
  }
`;
const Footer: React.FC<IntTodoListProps> = ({
  todos,
  changeFilter,
  clearCompleted,
}) => {
  const leftCount: string = todos
    .filter((todo) => !todo.checked)
    .length.toString();
  return (
    <StyledFooter className="footer">
      <span>{leftCount} todos left</span>
      <StyledFilters>
        <li onClick={() => changeFilter("All")} className="active">
          All
        </li>
        <li onClick={() => changeFilter("Active")}>Active</li>
        <li onClick={() => changeFilter("Completed")}>Completed</li>
      </StyledFilters>
      <button onClick={clearCompleted}>Clear Completed</button>
    </StyledFooter>
  );
};
export { Footer };
