import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

function App() {
  let todos = [
    'Coding',
    'Coding and coding',
    'Coding day and night'
  ];

  return (
    <>
      <TodoInput />
      <TodoList todos={todos}/>
    </>

  )
}

export default App;