import { applyMiddleware, compose, createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';
import thunk from 'redux-thunk';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web and AsyncStorage for react-native

// import { rootReducer, RootState } from '@App/store/reducers';

export interface StoreConfig {
  id?: string;
  rootReducer: any;
  whitelist: string[];
  initialState?: any;
}

const IS_DEV = process.env.NODE_ENV === 'development';
const BASENAME = process.env.BASENAME || '';
// const IS_TEST = process.env.BABEL_ENV === 'test';
// const REDUX_LOGGER = process.env.REDUX_LOGGER !== 'false';

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION__: () => undefined;
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: (arg: any) => undefined;
  }
}

// tslint:disable-next-line
export const history: any = createBrowserHistory({
  basename: BASENAME
});

const persistConfig = (id: string, whitelist: string[]) => (
  {
    key: 'data',
    keyPrefix: `${id}-`,
    storage,
    whitelist,
  }
);

const middlewares = [
  thunk,
  routerMiddleware(history),
  // IS_DEV && !IS_TEST && REDUX_LOGGER && require('redux-logger').createLogger(),
];

const noop = f => f;
let composeEnhancers = noop;

if (IS_DEV && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) {
  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
} else {
  composeEnhancers = compose;
}

const persistedReducer = (id: string, rootReducer: any, whitelist: string[]) =>
  persistReducer(persistConfig(id, whitelist), rootReducer(history));

export const configureStore: any = (storeConfig: StoreConfig) => {
  const { id = 'store', initialState, rootReducer, whitelist = []} = storeConfig;

  let store = createStore(
    persistedReducer(id, rootReducer, whitelist),
    initialState as any,
    composeEnhancers(
      applyMiddleware(...middlewares)
    )
  );
  let persistor = persistStore(store);
  return { store, persistor };
};
