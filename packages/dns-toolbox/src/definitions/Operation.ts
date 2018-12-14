export interface Operation {
  action?: (data?: any) => void;
  icon: string;
  type: string;
}
