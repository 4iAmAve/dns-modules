export interface StoreConfig {
    id?: string;
    rootReducer: any;
    whitelist: string[];
    initialState?: any;
}
declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION__: () => undefined;
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: (arg: any) => undefined;
    }
}
export declare const history: any;
export declare const configureStore: any;
