import React from 'react';
import "../components/FilterTodo.css";


const FilterTodo = ({filter,onChange}) => {
  return (
    <div className="FilterTodo">
      <label htmlFor="filtertext" className="FilterTodo__label">
        Фільтр по тексту
        <input
          type="text"
          name="filtertext"
          value={filter}
          onChange={onChange}
          className="FilterTodo__input"
        />
      </label>
    </div>
  );
}
export default FilterTodo;