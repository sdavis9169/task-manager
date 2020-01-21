import React from 'react';
import TodoList from './components/todoList';
import { connect } from 'react-redux';
import { DragDropContext } from 'react-beautiful-dnd';
import { sort } from './actions/cardActions';

import './App.css';

class App extends React.Component {
  onDragEnd = result => {
    //draggable id is the name of the container
    const { destination, source, draggableId } = result;

    if (!destination) {
      return;
    }

    this.props.dispatch(
      sort(
        source.droppableId,
        destination.droppableId,
        source.index,
        destination.index,
        draggableId
      )
    );
  };

  render() {
    const { lists } = this.props;
    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
        <div className='App'>
          <h2>Task Manager</h2>
          <div style={styles.listContainer}>
            {lists.map(list => (
              <TodoList
                key={list.id}
                listId={list.id}
                title={list.title}
                cards={list.cards}
              />
            ))}
          </div>
        </div>
      </DragDropContext>
    );
  }
}

const styles = {
  listContainer: {
    display: 'flex',
    flexDirection: 'row',
    marginRight: '5px',
    height: '80vh'
  }
};

const mapStateToProps = state => ({
  lists: state.lists
});

export default connect(mapStateToProps)(App);
