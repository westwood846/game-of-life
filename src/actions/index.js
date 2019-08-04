import { TOGGLE_PAUSED, SET_TICK_DURATION } from './action-types';

export const pause = () => ({action: TOGGLE_PAUSED});
export const setTickDuration = tickDuration => ({action: SET_TICK_DURATION, payload: tickDuration});