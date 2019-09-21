import actionTypes from 'constants/actionTypes';

const initialState = {
  activeTab: 0,
  selectedObjectUUID: ''
};

export default function config(state = initialState, action) {
  switch (action.type) {
    case actionTypes.SET_SIDEBAR_ACTIVE_TAB:
      return {
        ...state,
        activeTab: action.tabIndex,
        selectedObjectUUID: ''
      };
    default:
      return state;
  }
}