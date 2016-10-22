import { START, STOP, RESET } from './actionsTypes'

export const start = () => ({ type: START })
export const stop = () => ({ type: STOP })
export const reset = () => ({ type: RESET })