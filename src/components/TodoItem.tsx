import { IntTodo } from "../types/data";
import styled from "styled-components";

interface IntTodoItem extends IntTodo {
  deleteTodo: (id: number) => void;
  checkTodo: (id: number) => void;
}

const StyledItem = styled.li`
  width: 80%;
  display: flex;
  margin: auto;
  align-items: center;
  border-bottom: 0.1rem solid black;
  padding-bottom: 0.5rem;
  margin-bottom: 1rem;
  
  p {
    margin-left: 5%;
    font-size: 2rem;
    
    margin-right: auto;
    max-width: 80%;
    word-wrap: break-word;
  }
  input {
    appearance: none;
    -webkit-appearance: none;
    width: 3rem;
    height: 3rem;
    background-color: white;
    border: 0.1rem solid black;
    border-radius: 0.3rem;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2rem;
    transition: 0.3s;
  }

  input:hover::after {
    content: "✓";
    color: #848484;
  }
  input:checked {
    background-color: #16a416;
  }

  input:checked::after {
    content: "✓";
    color: white;
  }

  button {
    width: 3rem;
    height: 3rem;
    background-color: white;
    border-radius: 0.3rem;
    border: 0.1rem solid black;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2rem;
    transition: 0.3s;
  }
  button:hover {
    background-color: #ff000064;
  }

`;
const TodoItem: React.FC<IntTodoItem> = ({
  id,
  text,
  checked,
  checkTodo,
  deleteTodo,
}) => {
  return (
    <StyledItem>
      <input type="checkbox" checked={checked} onChange={() => checkTodo(id)} />
      <p>{text}</p>
      <button onClick={() => deleteTodo(id)}>╳</button>
    </StyledItem>
  );
};
export { TodoItem };
