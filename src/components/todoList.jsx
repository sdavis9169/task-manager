import React from 'react';
import TodoCard from './todoCard';

const TodoList = ({ title }) => {
  return (
    <div style={styles.container}>
      <h2>{title}</h2>
      <TodoCard />
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: '#2B333D',
    width: '25vw',
    marginRight: '5px'
  }
};

export default TodoList;
