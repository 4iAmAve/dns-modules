export interface Operation {
    icon: string;
    type: string;
    action?: (data?: any) => void;
}
