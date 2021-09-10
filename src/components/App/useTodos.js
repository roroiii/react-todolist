import React, { useState, useEffect, useRef } from "react";

function writeTodosToLocalStorage(todos) {
  window.localStorage.setItem("todoApp", JSON.stringify(todos));
}

export default function useTodos() {
  const [value, setValue] = useState("");
  const id = useRef(1);
  const [todoFilter, setTodoFilter] = useState(null);
  const [todos, setTodos] = useState(() => {
    let todosData = window.localStorage.getItem("todoApp") || "";
    if (todosData) {
      todosData = JSON.parse(todosData);
      id.current = todosData[0].id + 1;
    } else {
      todosData = [];
    }
    return todosData;
  });

  const handleTextChange = (e) => {
    setValue(e.target.value);
  };

  const handleAddClick = () => {
    if (!value || /^\s*$/.test(value)) return;
    setTodos([
      {
        id: id.current,
        content: value,
        isDone: false,
      },
      ...todos,
    ]);
    setValue("");
    id.current++;
  };

  const handleTodoContentUpdate = (id, editedTodoContent) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id !== id) return todo;
        return {
          ...todo,
          content: editedTodoContent,
        };
      })
    );
  };

  const handleToggleIsDone = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id !== id) return todo;
        return {
          ...todo,
          isDone: !todo.isDone,
        };
      })
    );
  };

  const handleDeleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleTodoFilter = (isDone) => {
    setTodoFilter(isDone);
  };

  const handleClearClick = (isDone) => {
    setTodos(todos.filter((todo) => todo.isDone === isDone));
  };

  const handleClearClickAll = () => {
    setTodos(todos.filter((todo) => todo.id === id));
  };

  const todoDone = (isDone) => {
    if (isDone === null) return todos.length;
    return todos.filter((todo) => todo.isDone === isDone).length;
  };

  const handleTextEnter = (e) => {
    if (e.key === "Enter") {
      handleAddClick();
      console.log(value);
    }
  };

  useEffect(() => {
    writeTodosToLocalStorage(todos);
    if (todos.length === 0) {
      window.localStorage.clear();
    }
  }, [todos]);

  return {
    id,
    value,
    setValue,
    todoFilter,
    setTodoFilter,
    todos,
    setTodos,
    handleTextChange,
    handleAddClick,
    handleTodoContentUpdate,
    handleToggleIsDone,
    handleDeleteTodo,
    handleTodoFilter,
    handleClearClick,
    handleClearClickAll,
    todoDone,
    handleTextEnter,
  };
}
