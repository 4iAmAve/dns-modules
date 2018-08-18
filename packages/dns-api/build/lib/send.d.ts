import { Call } from './definitions';
declare const send: (call: Call) => (dispatch: any) => void;
export default send;
