import React from 'react';
import '../components/TodoList.css';

function TodoList({todos, onDeleteTodo}) {
  return (
    <ul className="TodoList">
      {todos.map(({ id, text }) => (
        <li key={id} className="TodoList__item">
          <p>{text}</p>
          <button
            type="button"
            className="TodoList__button"
            onClick={() => onDeleteTodo(id)}
          >
            Вилучити
          </button>
        </li>
      ))}
    </ul>
  );
}
export default TodoList;