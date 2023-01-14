import React from "react";
import '../components/CalculateTodos.css';
const CalculateTodos = ({calculate,total}) => {
  return (
    <div className="TodoStatistic">
      <h2>Статистика</h2>
      <p>Всього нотаток: {total}</p>
      <p>Кількість виконаних: {calculate}</p>
    </div>
  );
};
export default CalculateTodos;