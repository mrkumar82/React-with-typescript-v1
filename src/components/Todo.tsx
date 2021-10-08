import React, { useState, useRef, useEffect } from "react";
import Todo from "../model";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { MdDone } from "react-icons/md";

type Props = {
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};

const SingleTodo: React.FC<Props> = ({ todo, todos, setTodos }: Props) => {
  const [edit, setEdit] = useState<boolean>(false);
  const [editTodo, setEditTodo] = useState<string>(todo.todo);

  const handleDone = (id: number) => {
    setTodos(
      todos.map((item) =>
        item.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };

  const handleDelete = (id: number) => {
    setTodos(todos.filter((item) => item.id !== id));
  };

  const handleEdit = () => {
    if (!edit && !todo.isDone) {
      setEdit(!edit);
    }
  };

  const handleSubmit = (e: React.FormEvent, id: number) => {
    e.preventDefault();
    setTodos(
      todos.map((item) =>
        item.id === id ? { ...todos, todo: editTodo } : todo
      )
    );
    setEdit(false);
  };

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, [edit]);

  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e, todo.id)}>
        <div className="items">
          {edit ? (
            <input
              ref={inputRef}
              type="text"
              value={editTodo}
              onChange={(e) => setEditTodo(e.target.value)}
            />
          ) : todo.isDone ? (
            <div className="title strike">{todo.todo}</div>
          ) : (
            <div className="title">{todo.todo}</div>
          )}

          <div className="icons">
            <AiFillEdit className="icon" onClick={handleEdit} />
            <AiFillDelete
              className="icon"
              onClick={() => handleDelete(todo.id)}
            />
            <MdDone className="icon" onClick={() => handleDone(todo.id)} />
          </div>
        </div>
      </form>
    </div>
  );
};

export default SingleTodo;
