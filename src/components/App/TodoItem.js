import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import {
  AiOutlineDelete,
  AiFillCheckCircle,
  AiOutlineDownCircle,
} from "react-icons/ai";
import { TextField, Button } from "@material-ui/core";

const TodoItemWrapper = styled.div`
  padding: 16px 0;
  display: flex;
  align-items: start;
  justify-content: space-between;
`;

const TodoContent = styled(TextField)`
  color: #333;
  padding-left: 16px;
  font-size: 18px;
  word-break: break-all;
  width: 300px;
  & > div > textarea {
    text-align: justify;
    line-height: 1.2;
  }

  & + & {
    margin-top: 8px;
  }
  & > div::before {
    border: 0;
  }
  ${(props) =>
    props.$isDone &&
    `& > div {
      color: #ccc;
    }

    text-decoration: line-through;
    color: #ccc;
  `}
`;

const ToggleButton = styled(Button)`
  padding: 8px 0;
  font-size: 18px;
  color: #fff;
  min-width: 48px;

  ${(props) =>
    props.$isDone &&
    `
    background-color: #b3e5fc;
  `}
`;

const DelButton = styled(Button)`
  padding: 9px 0;
  margin-left: 8px;
  min-width: 48px;
`;

export default function TodoItem({
  todo,
  handleDeleteTodo,
  handleToggleIsDone,
  handleTodoContentUpdate,
}) {
  return (
    <TodoItemWrapper data-id={todo.id}>
      <ToggleButton
        variant="contained"
        color="primary"
        $isDone={todo.isDone}
        onClick={() => {
          handleToggleIsDone(todo.id);
        }}
      >
        {todo.isDone ? <AiOutlineDownCircle /> : <AiFillCheckCircle />}
      </ToggleButton>
      <TodoContent
        multiline
        $isDone={todo.isDone}
        value={todo.content}
        html={todo.content}
        onChange={(e) => handleTodoContentUpdate(todo.id, e.target.value)}
      />
      <div>
        <DelButton
          variant="outlined"
          color="secondary"
          onClick={() => {
            handleDeleteTodo(todo.id);
          }}
        >
          <AiOutlineDelete />
        </DelButton>
      </div>
    </TodoItemWrapper>
  );
}

TodoItem.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.number,
    content: PropTypes.string,
    isDone: PropTypes.bool,
  }),
  handleDeleteTodo: PropTypes.func,
  handleToggleIsDone: PropTypes.func,
  handleTodoFilter: PropTypes.func,
  handleTodoContentUpdate: PropTypes.func,
};
