import React from "react";
import PropTypes from "prop-types";

import styled from "styled-components";
import { TextField, Button } from "@material-ui/core";
import { MEDIA_QUERY_S } from "../../constants/breakpoint";

const AddButton = styled(Button)`
  margin-left: 16px;
  ${MEDIA_QUERY_S} {
    width: 100%;
    margin-left: 0;
    margin-top: 16px;
    height: 48px;
  }
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

export default function TodoInput({
  value,
  handleAddClick,
  handleTextChange,
  handleTextEnter,
}) {
  return (
    <AddTodoInputBox>
      <InputContent
        required
        type="text"
        value={value}
        onChange={handleTextChange}
        onKeyDown={handleTextEnter}
        placeholder="add some tasks..."
        color="secondary"
        label="Required"
      />
      <AddButton variant="contained" color="secondary" onClick={handleAddClick}>
        Add todo
      </AddButton>
    </AddTodoInputBox>
  );
}

TodoInput.propTypes = {
  value: PropTypes.string,
  handleAddClick: PropTypes.func,
  handleTextChange: PropTypes.func,
  handleTextEnter: PropTypes.func,
  // handleTodoFilter: PropTypes.func,
  // todoDone: PropTypes.func,
  // handleClearClick: PropTypes.func,
  // handleClearClickAll: PropTypes.func,
};
