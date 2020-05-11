import React from 'react';
import './style.css';
import Icon from '@material-ui/core/Icon';


class AddTodo extends React.Component {

constructor() {
    super();
    this.state = {
        todo: ''
    };
}

  render() {
    return(
        <div className='addTodoContainer'>
            <form onSubmit={(e) => this.submitTodo(e)}>
                <input id='addTodoInput' className='addTodoInput' onChange={(e) => this.updateInput(e)} type='text'></input>
                <button className='submitButton' type='submit'>Add Todo</button>
            </form>
        </div>
    );
  }

  updateInput = (e) => {
      this.setState({todo: e.target.value})
  }
  submitTodo = (e) => {
      e.preventDefault();
      console.log('submit', this.state);
      this.props.addTodoFn(this.state.todo);
      document.getElementById('addTodoInput').value = '';
  }
}


export default AddTodo;
