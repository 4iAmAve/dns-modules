import { Call } from './Call';

export interface Subscription {
  id: number | string;
  call: Call;
  timeout?: number;
}
