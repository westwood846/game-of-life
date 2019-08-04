import { TOGGLE_PAUSED, SET_TICK_DURATION, TICK, RANDOMIZE, CLEAR, TOGGLE_CELL } from './action-types';

export const togglePaused    = ()               => ({type: TOGGLE_PAUSED});
export const setTickDuration = tickDuration     => ({type: SET_TICK_DURATION, payload: tickDuration});
export const tick            = (manual = false) => ({type: TICK, payload: {manual}});
export const randomize       = ()               => ({type: RANDOMIZE});
export const clear           = ()               => ({type: CLEAR});
export const toggleCell      = (row, col)       => ({type: TOGGLE_CELL, payload: {row, col}});