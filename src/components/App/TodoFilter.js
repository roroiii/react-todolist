import React from "react";
import PropTypes from "prop-types";

import styled from "styled-components";
import { Button } from "@material-ui/core";
import {
  AiFillCheckCircle,
  AiOutlineDownCircle,
  AiTwotoneHome,
} from "react-icons/ai";
import { MEDIA_QUERY_S } from "../../constants/breakpoint";

const FilterBox = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  left: -137px;
  top: 0;

  ${MEDIA_QUERY_S} {
    position: relative;
    left: 0;
    width: 100%;
    height: auto;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
  }
`;

const AllButton = styled(Button)`
  height: 48px;
  text-align: left;
  & + & {
    margin-top: 16px;
  }
  span {
    justify-content: start;
  }

  ${MEDIA_QUERY_S} {
    text-align: center;
    height: 60px;
    width: 100px;
    margin-top: 16px;
    span {
      justify-content: center;
      flex-direction: column;
    }
  }
`;

const DoneButton = styled(AllButton)``;

const UnDoneButton = styled(AllButton)``;

const ClearTodo = styled(AllButton)``;

export default function TodoFilter({
  handleTodoFilter,
  todoDone,
  handleClearClick,
  handleClearClickAll,
}) {
  return (
    <FilterBox>
      <AllButton
        variant="contained"
        onClick={() => {
          handleTodoFilter(null);
        }}
      >
        <AiTwotoneHome />
        ALL ({todoDone(null)})
      </AllButton>
      <DoneButton
        variant="contained"
        onClick={() => {
          handleTodoFilter(false);
        }}
      >
        <AiFillCheckCircle /> DONE ({todoDone(true)})
      </DoneButton>
      <UnDoneButton
        variant="contained"
        onClick={() => {
          handleTodoFilter(true);
        }}
      >
        <AiOutlineDownCircle />
        UNDONE ({todoDone(false)})
      </UnDoneButton>
      <ClearTodo variant="contained" onClick={() => handleClearClick(false)}>
        CLEAR DONE
      </ClearTodo>
      <ClearTodo variant="contained" onClick={() => handleClearClickAll()}>
        CLEAR ALL
      </ClearTodo>
    </FilterBox>
  );
}

TodoFilter.propTypes = {
  handleTodoFilter: PropTypes.func,
  todoDone: PropTypes.func,
  handleClearClick: PropTypes.func,
  handleClearClickAll: PropTypes.func,
};
