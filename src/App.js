import React from 'react';
import { connect } from 'react-redux';
import './App.css';
import TodoList from './components/todoList';

class App extends React.Component {
  render() {
    return (
      <div className='App'>
        <TodoList />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  lists: state.lists
});

export default connect(mapStateToProps)(App);
