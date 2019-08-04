import { TOGGLE_PAUSED, SET_TICK_DURATION, TICK } from "../actions/action-types";
import Game from "../gameOfLife";

const WORLD_WIDTH = 32;
const WORLD_HEIGHT = 48;

const initialState = {
  paused: false,
  tickDuration: 100,
  world: Game.newRandomWorld(WORLD_WIDTH, WORLD_HEIGHT)
};
function rootReducer(state = initialState, action) {
  console.dir(action);
  if (action.type === TOGGLE_PAUSED)     return { ...state, paused: !state.paused };
  if (action.type === SET_TICK_DURATION) return { ...state, tickDuration: action.payload };
  if (action.type === TICK)              return { ...state, world: Game.tick(state.world) };
  return state;
};
export default rootReducer;