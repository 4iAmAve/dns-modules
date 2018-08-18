import { Call } from './definitions';
declare const endQueue: () => (dispatch: any) => void;
declare const endCallForId: (id: string | number) => (dispatch: any) => void;
declare const startQueue: () => (dispatch: any) => void;
declare const subscribe: (id: string | number, call: Call, timeout?: number | undefined) => (dispatch: any) => void;
export { subscribe, startQueue, endQueue, endCallForId, };
