
import './App.css';
import styled from 'styled-components';
import { ThemeProvider } from 'styled-components';
import {MEDIA_QUERY_M, MEDIA_QUERY_L} from './constants/breakpoint';

const theme = {
  colors: {
    primary_300: '#ff0000',
    primary_600: '#dd0000',
    primary_900: '#yy0000',
  }
}

const Title = styled.h1`
  font-size: 36px;

  ${props => props.size === 'XL' && `
    font-size: 20px;
  `}
`

const TodoContent = styled.div`
  color: ${props => props.theme.colors.primary_600};
  font-size: ${props => props.size === 'XL' ? '40px' : '16px'};

  ${props => props.isDone && `
    text-decoration: line-through;
  `}
`

const BlackTodoItem = styled(TodoItem)`
  background: #000000;
`

const TodoItemWrapper = styled.div`
  padding: 20px;
  border: solid 1px #000000;
  display: flex;
  align-items: center;
  justify-content: space-between;

  ${MEDIA_QUERY_M} {
    border: solid 2px red;
  }
`

const Button = styled.button`
  padding: 4px;
  background-color: blue;
  color: #ffffff;

  ${props => props.isDone && `
    background-color: #00ff00;
  `}
`

const ReButton = styled(Button)`
  background-color: #ff0000;

`

function TodoItem({className, size, todo, title, handleDeleteTodo, handleToggleIsDone }) {
  return (
    <ThemeProvider theme={theme}>
      <Title>{title}</Title>
      <TodoItemWrapper className={className} data-todo-id={todo.id}>
        <TodoContent isDone={todo.isDone} size={size}>{todo.content}</TodoContent>
        <div>
          <Button isDone={todo.isDone} onClick={() => {handleToggleIsDone(todo.id)}}>
            {todo.isDone ? '已完成' : '未完成'}
          </Button>
          <ReButton onClick={() => {handleDeleteTodo(todo.id)}}>刪除</ReButton>        
        </div>
      </TodoItemWrapper>
    </ThemeProvider>
  );
}

export default TodoItem;
