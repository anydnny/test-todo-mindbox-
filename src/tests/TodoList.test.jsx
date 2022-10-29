import { render, screen } from "@testing-library/react";
import { TodoList } from "../components/TodoList";

const data = [
  { id: 1, text: "Hello Mindbox", checked: false },
  { id: 2, text: "Hello Mindbox", checked: false },
  { id: 3, text: "Hello Mindbox", checked: false },
];

describe("Тесты списка задач", () => {
  const Container = () => {
    return <TodoList todos={data} />;
  };

  it("Рендер всего списка", () => {
    render(<Container />);
    expect(screen.getAllByText("Hello Mindbox")).toBeInTheDocument;
  });

  it(`Количество задач: ${data.length}`, () => {
    render(<Container />);

    expect(screen.getAllByText("Hello Mindbox").length === data.length);
  });
});
