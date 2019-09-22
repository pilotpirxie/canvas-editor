import actionTypes from "constants/actionTypes";

const initialState = {
  selectedObjectUUID: "",
  selectedObjectType: "",
  left: 0,
  top: 0,
  scaleX: 0,
  scaleY: 0,
  angle: 0,
  opacity: 0,
  fontFamily: "",
  fontSize: 0,
  fill: "",
  text: "",
};

export default function inspector(state = initialState, action) {
  switch (action.type) {
  case actionTypes.SET_INSPECTOR_VALUES:
    return {
      ...state,
      ...action.data,
    };
  default:
    return state;
  }
}