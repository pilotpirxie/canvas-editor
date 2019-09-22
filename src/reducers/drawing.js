import actionTypes from "constants/actionTypes";

const initialState = {
  width: 1,
  color: "#000000",
};

export default function drawing(state = initialState, action) {
  switch (action.type) {
  case actionTypes.SET_BRUSH_PROPERTIES:
    return {
      ...state,
      ...action.data
    };
  default:
    return state;
  }
}