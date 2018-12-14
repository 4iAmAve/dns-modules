export interface Notification {
  id: string | number;
  message: any;
  timestamp: number;
  timeout?: number;
  type: string | number;
}
