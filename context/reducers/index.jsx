import ActionType from "../types";

const initialState = {
  chapters: []
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.GET_CHAPTERS:
      return {
        ...state,
        chapters: action.payload
      };
    default:
      return state;
  }
};

export { initialState, rootReducer };
