import actionTypes from "constants/actionTypes";

const initialState = {
  audioSrc: "",
  audioId: null
};

export default function audio(state = initialState, action) {
  switch (action.type) {
  case actionTypes.SET_AUDIO:
    return {
      ...state,
      audioId: action.id,
      audioSrc: action.src,
    };
  default:
    return state;
  }
}