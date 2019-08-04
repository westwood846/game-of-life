import { TOGGLE_PAUSED, SET_TICK_DURATION } from "../actions/action-types";

const initialState = {
  paused: false,
  tickDuration: 100
};
function rootReducer(state = initialState, action) {
  console.dir(action);
  if (action.type === TOGGLE_PAUSED) return { ...state, paused: !state.paused };
  if (action.type === SET_TICK_DURATION) return { ...state, tickDuration: action.payload };
  return state;
};
export default rootReducer;