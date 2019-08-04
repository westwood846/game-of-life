import { TOGGLE_PAUSED, SET_TICK_DURATION, TICK, RANDOMIZE, CLEAR } from './action-types';

export const togglePaused = () => ({type: TOGGLE_PAUSED});
export const setTickDuration = tickDuration => ({type: SET_TICK_DURATION, payload: tickDuration});
export const tick = () => ({type: TICK});
export const randomize = () => ({type: RANDOMIZE});
export const clear = () => ({type: CLEAR});