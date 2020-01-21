import React from 'react';
import TodoCard from './todoCard';
import TodoButton from './todoButton';
import { Droppable } from 'react-beautiful-dnd';

const TodoList = ({ title, cards, listId }) => {
  return (
    <Droppable droppableId={String(listId)}>
      {provided => (
        <div
          {...provided.droppableProps}
          ref={provided.innerRef}
          style={styles.container}
        >
          <h2 style={{ color: 'lightGrey' }}>{title}</h2>
          <TodoButton listId={listId} />
          {cards.map((card, index) => (
            <TodoCard
              key={card.id}
              index={index}
              text={card.text}
              id={card.id}
            />
          ))}

          {provided.placeholder}
        </div>
      )}
    </Droppable>
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
