import { START, STOP, RESET } from './actionsTypes'

export const onStart = () => ({ type: START })
export const onStop = () => ({ type: STOP })
export const onReset = () => ({ type: RESET })