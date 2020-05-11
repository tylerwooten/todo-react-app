import React from 'react';
import './App.css';
import AddTodo from './AddTodo/addTodo';
import TodoList from './TodoList/todoList';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      todos: []
    };
  }

  render() {
    return(
      <div>
        <div className='title'>First React App - Todo Checklist</div>
        <AddTodo addTodoFn={this.addTodo}></AddTodo>
        <TodoList updateTodoFn={this.updateTodo} removeTodoFn={this.removeTodo} todos={this.state.todos}></TodoList>
      </div>
    ) 
  }

  componentDidMount = () => {
    const todos = localStorage.getItem('todos');
    if(todos) {
      const savedTodos = JSON.parse(todos);
      this.setState({ todos: savedTodos })
    } else {
      console.log('no todos');
    }
  }

  addTodo = async (todo) => {
    await this.setState({ todos: [...this.state.todos, {
      text: todo,
      completed: false }] });
    localStorage.setItem('todos', JSON.stringify(this.state.todos));
    console.log(localStorage.getItem('todos'))
  }

  updateTodo = async (todo) => {
    const newTodos = this.state.todos.map(_todo => {
      if (todo === _todo)
        return {
          text: todo.text,
          completed: !todo.completed
        }
      else
        return _todo
    });
    await this.setState({ todos: newTodos });
    localStorage.setItem('todos', JSON.stringify(this.state.todos));
  }

  removeTodo = async (todo) => {
    const newTodos = this.state.todos.map(_todo => {
      if (todo !== _todo)
        return _todo
    }).filter( Boolean );
    await this.setState({todos: newTodos });
    localStorage.setItem('todos', JSON.stringify(this.state.todos));
  }
}

export default App;

