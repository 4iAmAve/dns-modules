import { AxiosResponse } from 'axios';

export interface Call {
  url: string;
  httpMethod?: string;
  successCallback?: (m: AxiosResponse) => void;
  errorCallback?: (m: null | AxiosResponse) => void;
  headers?: Headers;
  data?: Object;
  params?: Object;
  silent?: boolean;
  lastRun?: number;
  callCount?: number;
}
