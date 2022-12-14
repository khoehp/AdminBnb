import produce from "immer";
import { SET_ROOM, SET_ROOMINFO, SET_USER, SET_USERINFO } from "./action";

const initialState = {
  user: [],
  rooms: [],
  userInfo: null,
  roomInfo: null,
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
    case SET_ROOMINFO: {
      const nextState = produce(state, (draft) => {
        draft.roomInfo = action.payload;
      });
      return nextState;
    }
    case SET_USERINFO: {
      const nextState = produce(state, (draft) => {
        draft.userInfo = action.payload;
      });
      return nextState;
    }
    default:
      return state;
  }
};

export default reducer;
