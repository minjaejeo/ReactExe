import "./App.css";
import { useState, useRef, useCallback } from "react";
import TodoTemplate from "./ex07_toggle/TodoTemplate";
import TodoInsert from "./ex07_toggle/TodoInsert";
import TodoList from "./ex07_toggle/TodoList";


function App() {

  const [todos, setTodos] = useState([
    {
      id: 1,
      text: '리액트의 기초 알아보기',
      checked: true,
    },
    {
      id: 2,
      text: '컴포넌트 스타일링 해보기',
      checked: true,
    },
    {
      id: 3,
      text: '일전 관리 앱 만들어보기',
      checked: false,
    },
  ]);

  const nextId = useRef(4);

  const onInsert = useCallback(
    text => {
      const todo ={
        id: nextId.current,
        text,
        checked: false
      };
      setTodos(todos.concat(todo));
      nextId.current += 1;
    }, [todos]
  );

  const onRemove = useCallback(
    id => {
      // id에 해당하지 않는 항목만, 재저장
      setTodos(todos.filter((todo) => todo.id !== id));
    },
    [todos]
  );

  const onToggle = useCallback(
    id => {
      setTodos(todos.map(todo => 
        todo.id === id ? {...todo, checked : !todo.checked} : todo,
      ));
    },
    [todos]
  );

  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert} />
      <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle}/>
    </TodoTemplate>
  );
}

export default App;
