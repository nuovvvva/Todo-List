import React from 'react';
import TodoCard from './TodoCard.jsx';

export default function TodoList(props) {
  let {todos} =props
  return (
    <ul className='main'>
      {todos.map((todo, todoIndex) => {
        return(
          <TodoCard key={todoIndex}>
            <p>{todo}</p>
          </TodoCard>
        )
      })}
    </ul>
  );
}
