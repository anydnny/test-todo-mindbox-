import { useState, useEffect, useRef } from "react";
import { IntTodo } from "../types/data";
import { Footer } from "./Footer";
import { TodoList } from "./TodoList";

const App: React.FC = () => {
  const [todos, setTodos] = useState<IntTodo[]>([]);
  const [filteredTodos, setFilteredTodos] = useState<IntTodo[]>([]);

  const [inputValue, setInputValue] = useState("");
  const [currentFilter, setCurrentFilter] = useState("All");

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
    if (inputValue) {
      setTodos([
        ...todos,
        {
          id: Date.now(),
          text: inputValue,
          checked: false,
        },
      ]);
      setInputValue("");
    }
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
    console.log(currentFilter);
  };
  const clearCompleted = (): void => {
    setTodos(
      todos.map((todo) => {
        if (!todo.checked) return todo;
        return { ...todo, checked: false };
      })
    );
  };
  return (
    <>
      <div>
        <h1>Todo</h1>
        <main>
          <form onSubmit={onFormSubmit}>
            <input
              type="text"
              value={inputValue}
              onChange={onInputChange}
              ref={inputRef}
            />
            <button type="submit">add</button>
          </form>
          <TodoList
            todos={filteredTodos}
            deleteTodo={deleteTodo}
            checkTodo={checkTodo}
          />
          <Footer
            todos={todos}
            changeFilter={changeFilter}
            clearCompleted={clearCompleted}
          />
        </main>
      </div>
    </>
  );
};
export { App };
