import React from "react";
import styled from "styled-components";
import TodoItem from "./TodoItem";
import TodoFilter from "./TodoFilter";
import useTodos from "./useTodos";
import { TextField, Button } from "@material-ui/core";
import { MEDIA_QUERY_S } from "../../constants/breakpoint";

const Wallpaper = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  flex-direction: column;
  background: #f5f5f5;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  padding-top: 64px;
`;

const TodoApp = styled.div`
  position: relative;
  margin-top: 26px;
  width: 425px;
  background: #fff;
  border-radius: 10px;
  padding: 12px 16px;

  ${MEDIA_QUERY_S} {
    width: 100%;
    margin: 26px 28px;
  }
`;

const AddButton = styled(Button)`
  margin-left: 16px;
  ${MEDIA_QUERY_S} {
    width: 100%;
    margin-left: 0;
    margin-top: 16px;
    height: 48px;
  }
`;

const Title = styled.h1`
  font-size: 24px;
  text-align: center;
  margin: 10px 0 16px 0;
`;

const InputContent = styled(TextField)`
  width: 300px;

  ${MEDIA_QUERY_S} {
    width: 100%;
  }
`;

const AddTodoInputBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;

  ${MEDIA_QUERY_S} {
    flex-direction: column;
  }
`;

const NoTodo = styled.div`
  text-align: center;
  padding: 24px 0;
`;

function App() {
  const {
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
  } = useTodos();

  return (
    <Wallpaper>
      <TodoApp>
        <TodoFilter
          handleTodoFilter={handleTodoFilter}
          todoDone={todoDone}
          handleClearClick={handleClearClick}
          handleClearClickAll={handleClearClickAll}
        />
        <Title>TODO LIST</Title>
        <AddTodoInputBox>
          <InputContent
            multiline
            required
            type="text"
            value={value}
            onChange={handleTextChange}
            onKeyDown={handleTextEnter}
            placeholder="add some tasks..."
            color="secondary"
            label="Required"
          />
          <AddButton
            variant="contained"
            color="secondary"
            onClick={handleAddClick}
          >
            Add todo
          </AddButton>
        </AddTodoInputBox>

        {todos &&
          todos
            .filter((todo) => todo.isDone !== todoFilter)
            .map((todo) => (
              <TodoItem
                key={todo.id}
                todo={todo}
                handleDeleteTodo={handleDeleteTodo}
                handleToggleIsDone={handleToggleIsDone}
                todoFilter={todoFilter}
                setTodoFilter={setTodoFilter}
                handleTodoFilter={handleTodoFilter}
                handleTextChange={handleTextChange}
                handleTodoContentUpdate={handleTodoContentUpdate}
              ></TodoItem>
            ))}
        {todos.length === 0 && <NoTodo>ADD SOME TODOS...</NoTodo>}
      </TodoApp>
    </Wallpaper>
  );
}

export default App;
