import React from 'react';
import TodoItem from '../TodoItem/todoItem';
import './style.css';

class TodoList extends React.Component {

  render() {

    const { todos } = this.props;

    return( 
        <div className='todoListContainer'>
            {
                todos.map((_todo, _index) => {
                    return(
                        <TodoItem updateTodoFn={this.updateTodo} removeTodoFn={this.removeTodo} key={_index}todo={_todo}></TodoItem>
                    )
                })
            }
        </div>
    );
  }

  updateTodo = (todo) => {
      this.props.updateTodoFn(todo);
  }

  removeTodo = (todo) => {
      this.props.removeTodoFn(todo);
  }
}

export default TodoList;
