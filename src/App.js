import { Component } from 'react';
import shortid from 'shortid';
import TodoList from './components/TodoList';
import TodoEditor from './components/TodoEditor';
import FilterTodo from './components/FilterTodo';
import './App.css';
import initialTodos from "./components/todos.json";
import CalculateTodos from './components/CalculateTodos';


class App extends Component{

  state = {
    todos: initialTodos,
    filter:'',
       
  };

  addTodo = (text) => {
    console.log(text);
    const todo = {
      id: shortid.generate(),
      text: text,
      completed: false,
    };
    this.setState(prevState => ({
      todos: [todo, ...prevState.todos],
    }));
  };

  deleteTodo = (todoId) => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.id !== todoId),
    }))
  };

  getFilterTodos = () => {
    const normalizedFilter = this.state.filter.toLowerCase();
    return this.state.todos.filter(item =>
      item.text.toLowerCase().includes(normalizedFilter)
    );
  }


  changeFilter = (event) => {
    this.setState({ filter: event.currentTarget.value });
  };

  calculateCompletedTodos = () => {
    const { todos } = this.state;
    return todos.reduce(
      (total, todo) => (todo.completed ? total + 1 : total),
      0
    );
  }

  render() {
    const { todos, filter } = this.state;
    const filterTodos = this.getFilterTodos();
    const completedTodoCount = this.calculateCompletedTodos();
    console.log(completedTodoCount);
    const totalTodoCount = todos.length;
    return (
      <>
        <CalculateTodos calculate={completedTodoCount} total={totalTodoCount} />
        <TodoEditor onSubmit={this.addTodo} />
        <FilterTodo value={filter} onChange={this.changeFilter} />
        <TodoList todos={filterTodos} onDeleteTodo={this.deleteTodo} />
      </>
    );
  };
}
 
export default App;
