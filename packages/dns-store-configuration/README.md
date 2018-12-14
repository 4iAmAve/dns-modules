## @dns/store-configuration

Library for default redux store configuration

### Setup

```shell
yarn
```

### Build

```shell
yarn build
```

### ENV

To enable redux extension ```NODE_ENV='development'```

To change the basepath / basename of your application ```BASENAME='/whatever```

### Usage

**Step 1**

In your reducers.ts

```javascript
import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'

export default (history) => combineReducers({
  router: connectRouter(history),
  ... // rest of your reducers
})
```

**Step 2**

In your index.ts

```javascript
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import { configureStore } from '@dns/store-configuration';

import { rootReducer } from './reducers';

const storeConfig = {
  id: 'app-id',
  rootReducer: rootReducer,
  whitelist: ['version'],
};

const { store } = configureStore(storeConfig);

...
ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}> { /* place ConnectedRouter under Provider */ }
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('react-root')
)

```

### Libs used in configuration

[history](https://github.com/ReactTraining/history) (Manage session history with JavaScript)

[redux-persist](https://github.com/rt2zz/redux-persist) (persist and rehydrate a redux store)

[connected-react-router](https://github.com/supasate/connected-react-router) (A Redux binding for React Router v4)

[redux-thunk](https://github.com/reduxjs/redux-thunk) (Thunk middleware for Redux)

### License

@dns/store-configuration is [MIT licensed](./LICENSE).
