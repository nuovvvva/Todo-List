import { useState } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState([]);
  const [todoValue, setTodoValue] = useState('');

  function handleAddTodos(newTodo) {
    const newTodoList = [...todos, newTodo];
    setTodos(newTodoList);
  }

  function handleDeleteTodo(index) {
    const newTodoList = todos.filter((todo, todoIndex) => {
      return todoIndex !== index;
    });
    setTodos(newTodoList);
  }

  function handleEditTodo(index) {
    const valueTodoEdited = todos[index];
    setTodoValue(valueTodoEdited);
    handleDeleteTodo(index);
  }

  return (
    <>
      <TodoInput handleAddTodos={handleAddTodos} todoValue={todoValue} setTodoValue={setTodoValue}/>
      <TodoList handleEditTodo={handleEditTodo} handleDeleteTodo={handleDeleteTodo} todos={todos} />
    </>

  )
}

export default App;