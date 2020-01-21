import { TYPES } from '../actions/types';

let cardId = 4;

const initialState = [
  // added list and card string interpolation to id's for draggable
  {
    title: 'Backlog',
    id: `list-${0}`,
    cards: [{ id: `card-${0}`, text: 'This task will probably never get done' }]
  },
  {
    title: 'Todo',
    id: `list-${1}`,
    cards: [{ id: `card-${1}`, text: 'This will supposedly be completed next' }]
  },
  {
    title: 'In-Progress',
    id: `list-${2}`,
    cards: [{ id: `card-${2}`, text: 'This is being worked on now... maybe' }]
  },
  {
    title: 'Completed',
    id: `list-${3}`,
    cards: [
      { id: `card-${3}`, text: 'This is completed but probably does not work' }
    ]
  }
];

const listReducer = (state = initialState, action) => {
  switch (action.type) {
    case TYPES.ADD_CARD: {
      const newCard = {
        text: action.payload.text,
        id: `card-${cardId}`
      };
      cardId += 1;

      const newState = state.map(list => {
        if (list.id === action.payload.listId) {
          return {
            ...list,
            cards: [...list.cards, newCard]
          };
        } else {
          return list;
        }
      });
      return newState;
    }
    case TYPES.DRAG_HAPPENED:
      const {
        droppableIdStart,
        droppableIdEnd,
        droppabeIndexStart,
        droppabeIndexEnd
      } = action.payload;

      const newState = [...state];

      if (droppableIdStart === droppableIdEnd) {
        //if drag happens in same list we want to change the index
        const list = state.find(list => droppableIdStart === list.id);
        const card = list.cards.splice(droppabeIndexStart, 1);
        list.cards.splice(droppabeIndexEnd, 0, ...card);
      }

      //if drag happens to a different list

      if (droppableIdStart !== droppableIdEnd) {
        const listStart = state.find(list => droppableIdStart === list.id);

        const card = listStart.cards.splice(droppabeIndexStart, 1);

        const listEnd = state.find(list => droppableIdEnd === list.id);

        listEnd.cards.splice(droppabeIndexEnd, 0, ...card);
      }

      return newState;

    default:
      return state;
  }
};

export default listReducer;
