import React, { Component } from "react";
import "../components/TodoEditor.css";


class TodoEditor extends Component {
  state = {
    note: '',
  };
  handlerChange = (event) => {
    this.setState({ note: event.currentTarget.value });
  };
  handlerSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
    this.props.onSubmit(this.state.note);
    this.setState({ note: '' ,});

  };
  render() {
    return (
      <>
        <form className="TodoEditor" onSubmit={this.handlerSubmit}>
          <textarea
            className="TodoEditor__textarea"
            value={this.state.note}
            onChange={this.handlerChange}
          ></textarea>
          <button type="submit" className="TodoEditor__button">
            Додати нотатку
          </button>
        </form>
      </>
    );
  }
}
export default TodoEditor;