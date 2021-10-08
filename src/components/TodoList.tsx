import React from "react";
import { Todo } from "../model";
import SingleTodo from "../components/Todo";

interface Props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList: React.FC<Props> = ({ todos, setTodos }: Props) => {
  return (
    <div>
      {todos.map((item) => (
        <SingleTodo
          todo={item}
          key={item.id}
          todos={todos}
          setTodos={setTodos}
        />
      ))}
    </div>
  );
};

export default TodoList;
