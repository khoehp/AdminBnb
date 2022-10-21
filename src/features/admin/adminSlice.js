import produce from "immer";
import { SET_ROOM, SET_USER } from "./action";

const initialState = {
  user: [],
  rooms: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER: {
      const nextState = produce(state, (draft) => {
        draft.user = action.payload;
      });
      return nextState;
    }
    case SET_ROOM: {
      const nextState = produce(state, (draft) => {
        draft.rooms = action.payload;
      });
      return nextState;
    }
    default:
      return state;
  }
};

export default reducer;
