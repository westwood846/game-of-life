import { TOGGLE_PAUSED, SET_TICK_DURATION, TICK, RANDOMIZE, CLEAR, TOGGLE_CELL } from "../actions/action-types";
import Game from "../gameOfLife";
import store from '../store/index';
import { tick } from '../actions/index';

const WORLD_WIDTH = 32;
const WORLD_HEIGHT = 48;

const initialState = {
  paused: false,
  tickDuration: 500,
  world: Game.newRandomWorld(WORLD_WIDTH, WORLD_HEIGHT),
  generation: 0
};
initialState.tickInterval = setInterval(() => store.dispatch(tick()), initialState.tickDuration);

function rootReducer(state = initialState, action) {
  if (action.type === TOGGLE_PAUSED)     return { ...state, paused: !state.paused };

  if (action.type === SET_TICK_DURATION) {
    clearInterval(state.tickInterval);
    return { 
      ...state,
      tickDuration: action.payload,
      tickInterval: setInterval(() => store.dispatch(tick()), action.payload)
    };
  }

  if (action.type === TICK) {
    if (!state.paused || action.payload.manual) {
      return {
        ...state,
        world: Game.tick(state.world),
        generation: state.generation + 1
      }
    } else {
      return state;
    }
  };

  if (action.type === RANDOMIZE)         return { ...state, world: Game.newRandomWorld(WORLD_WIDTH, WORLD_HEIGHT), generation: 0 };
  if (action.type === CLEAR)             return { ...state, world: Game.newEmptyWorld(WORLD_WIDTH, WORLD_HEIGHT), generation: 0 };
  if (action.type === TOGGLE_CELL)       return { ...state, world: Game.toggleCell(state.world, action.payload.row, action.payload.col) };
  return state;
};
export default rootReducer;