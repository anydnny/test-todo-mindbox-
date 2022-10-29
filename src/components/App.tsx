import { useState, useEffect, useRef } from "react";
import { IntTodo } from "../types/data";
import { Footer } from "./Footer";
import { TodoList } from "./TodoList";
import styled from "styled-components";

const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
  max-width: 80rem;
  background-color: #c1d0d54b;
  -webkit-box-shadow: 1px 2px 42px 14px rgba(133, 133, 133, 0.2);
  -moz-box-shadow: 1px 2px 42px 14px rgba(133, 133, 133, 0.2);
  box-shadow: 1px 2px 42px 14px rgba(133, 133, 133, 0.2);
  border-radius: 1rem;
`;
const StyledHeading = styled.h1`
  font-size: 7rem;
  margin-bottom: 3rem;
  margin-top: 2rem;
`;
const StyledMain = styled.main`
  width: 90%;
  display: flex;
  flex-direction: column;
`;
const StyledForm = styled.form`
  width: 100%;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: Arial, Helvetica, sans-serif;
  margin-bottom: 2rem;
  input {
    width: 88%;
    height: 100%;
    border: none;
    font-size: 1.5rem;
    outline: none;

    padding-left: 1rem;
    color: black;
    background-color: transparent;
    border-bottom: 0.1rem solid black;
  }
  button {
    width: 10%;
    height: 100%;
    background-color: transparent;
    border: 0.1rem solid black;
    font-size: 1.5rem;
    cursor: pointer;
    transition: .3s;
    
  }
  button:hover{
    border-radius: .5rem;
    background-color: #e7e7e7;
  }
`;

const App: React.FC = () => {
  const [todos, setTodos] = useState<IntTodo[]>([{id:Date.now(), text: "Съесть яблоко 🍎", checked: false},{id:Date.now() + 1, text: "Отжаться 1000 раз", checked: true}]);
  const [filteredTodos, setFilteredTodos] = useState<IntTodo[]>([]);

  const [inputValue, setInputValue] = useState("");
  const [currentFilter, setCurrentFilter] = useState("Active");

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  useEffect(() => {
    setFilteredTodos(
      todos.filter((todo) => {
        if (currentFilter === "All") return todo;
        if (currentFilter === "Active") return !todo.checked;
        if (currentFilter === "Completed") return todo.checked;
        return null;
      })
    );
  }, [todos, currentFilter]);
  const onInputChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setInputValue(e.target.value);
  };
  const onFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inputValue && inputValue.trim().length) {
      setTodos([
        ...todos,
        {
          id: Date.now(),
          text: inputValue,
          checked: false,
        },
      ]);
    }
    setInputValue("");
  };
  const deleteTodo = (id: number): void => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  const checkTodo = (id: number): void => {
    setTodos(
      todos.map((todo) => {
        if (todo.id !== id) return todo;
        return {
          ...todo,
          checked: !todo.checked,
        };
      })
    );
  };
  const changeFilter = (filter: string) => {
    setCurrentFilter(filter);
  };
  const clearCompleted = (): void => {
    setTodos(
      todos.map((todo) => {
        if (!todo.checked) return todo;
        return { ...todo, checked: false };
      })
    );
  };

  const list = document.querySelectorAll(".footer li");
  list.forEach((item) => {
    item.addEventListener("click", (e) => {
      list.forEach((el) => el.classList.remove("active"));
      item.classList.add("active");
    });
  });

  return (
    <>
      <StyledCard>
        <StyledHeading>Todo</StyledHeading>
        <StyledMain>
          <StyledForm onSubmit={onFormSubmit}>
            <input
              type="text"
              value={inputValue}
              onChange={onInputChange}
              placeholder="Сделать тестовое задание для Mindbox"
              ref={inputRef}
            />
            <button type="submit">+</button>
          </StyledForm>
          <TodoList
            todos={filteredTodos}
            deleteTodo={deleteTodo}
            checkTodo={checkTodo}
          />
        </StyledMain>
        <Footer
          todos={todos}
          changeFilter={changeFilter}
          clearCompleted={clearCompleted}
        />
      </StyledCard>
    </>
  );
};
export { App };
