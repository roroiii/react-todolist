// import logo from './logo.svg';
import "./App.css";
import TodoItem from "./TodoItem";
import { useState } from "react";




var id = 3; // 因為 function 每次都會重新被呼叫，所以 id 要放在 function 外面
function App() {
  const [todos, setTodos] = useState([
    { id: 1, content: "abc", size: "XL", isDone: true, title: "Todo" },
    { id: 2, content: "abc", isDone: false },
  ]);

  const [value, setValue] = useState("");

  const handleButtonClick = () => {
    setTodos([
      {
        id,
        content: value,
        size: "XL",
      },
      ...todos,
    ]);
    setValue("");
    id++;
  };

  const handleInputClick = (e) => {
    setValue(e.target.value);
  };

  const handleDeleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleToggleIsDone = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id !== id) return todo; // 不等於要修改的 id 直接回傳
        return {
          ...todo,
          isDone: !todo.isDone,
        }; // 是要修改的 id 就把原本的 todo 加上要修改的屬性
      })
    );
  };

  return (
    <div className="App">
      <input type="text" value={value} onChange={handleInputClick} />
      <button onClick={handleButtonClick}>Add todo</button>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          title={todo.title}
          size={todo.size}
          handleDeleteTodo={handleDeleteTodo}
          handleToggleIsDone={handleToggleIsDone}
        />
      ))}
    </div>
  );
}

export default App;
