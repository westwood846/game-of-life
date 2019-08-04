import { TOGGLE_PAUSED, SET_TICK_DURATION } from './action-types';

export const togglePaused = () => ({type: TOGGLE_PAUSED});
export const setTickDuration = tickDuration => ({type: SET_TICK_DURATION, payload: tickDuration});