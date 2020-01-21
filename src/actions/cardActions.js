import { TYPES } from './types';

export const addCard = (listId, text) => {
  return {
    type: TYPES.ADD_CARD,
    payload: { text, listId }
  };
};

// react-beautiful-dnd congifs
export const sort = (
  droppableIdStart,
  droppableIdEnd,
  droppabeIndexStart,
  droppabeIndexEnd,
  droppableId
) => {
  return {
    type: TYPES.DRAG_HAPPENED,
    payload: {
      droppableIdStart,
      droppableIdEnd,
      droppabeIndexStart,
      droppabeIndexEnd,
      droppableId
    }
  };
};
