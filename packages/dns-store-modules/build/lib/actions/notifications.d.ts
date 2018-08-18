export declare const notificationActions: any;
export declare const returnOfActions: {}[];
export declare type notificationAction = typeof returnOfActions[number];
export declare function addNotification(message: any, type: string | number, timeout?: number): (dispatch: any, getState: any) => void;
