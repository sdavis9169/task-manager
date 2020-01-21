import React from 'react';
import { Draggable } from 'react-beautiful-dnd';

const TodoCard = ({ text, id, index }) => {
  return (
    <Draggable draggableId={String(id)} index={index}>
      {provided => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <div style={styles.card}>{text}</div>
        </div>
      )}
    </Draggable>
  );
};

const styles = {
  card: {
    backgroundColor: 'lightGrey',
    margin: '5px',
    paddingTop: '18px',
    paddingBottom: '18px',
    opacity: '.7'
  }
};

export default TodoCard;
