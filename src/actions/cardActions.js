import { TYPES } from './types';

export const addCard = (listId, text) => {
  return {
    type: TYPES.ADD_CARD,
    payload: { text, listId }
  };
};
