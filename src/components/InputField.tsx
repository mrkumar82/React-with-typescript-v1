import React, { useState } from "react";

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FocusEvent) => void;
}

const InputField: React.FC<Props> = ({ todo, setTodo, handleAdd }) => {
  return (
    <div>
      <form onSubmit={(e: React.FormEvent) => handleAdd(e)}>
        <input
          type="text"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          placeholder="Enter a task"
        />
        <button type="submit" className="submit">
          Go
        </button>
      </form>
    </div>
  );
};

export default InputField;
