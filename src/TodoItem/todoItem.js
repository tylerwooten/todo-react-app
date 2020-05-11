import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import './style.css';
import { ReactComponent as Exit } from '../Logos/shapes.svg';

class TodoItem extends React.Component {

  render() {
    const { todo } = this.props; 
    return(
      <div>
        <div className={'todoItem' + (todo.completed ? ' completed' : '')}>
          <div className='text' onClick={this.ToggleTodo}>
            {todo.text}
          </div>
          <div  className='exitButton' style={{height:'20px', width: '20px'}} onClick={this.RemoveTodo} >
            <Exit />
          </div>
        </div>
      </div>
    )
  }

  ToggleTodo = () => {
    this.props.updateTodoFn(this.props.todo);
  }

  RemoveTodo = () => {
    this.props.removeTodoFn(this.props.todo);
  }
}

export default TodoItem;
