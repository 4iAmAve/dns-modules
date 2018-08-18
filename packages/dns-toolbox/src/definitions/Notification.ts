export interface Notification {
  id: string | number;
  message: any;
  type: string | number;
  timestamp: number;
  timeout?: number;
}
