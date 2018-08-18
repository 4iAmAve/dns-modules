## @dns/service-worker

Library for default redux store configuration

### Relevance

In production, we register a service worker to serve assets from local cache.

This lets the app load faster on subsequent visits in production, and gives
it offline capabilities. However, it also means that developers (and users)
will only see deployed updates on the 'N+1' visit to a page, since previously
cached resources are updated in the background.

To learn more about the benefits of this model, read https://goo.gl/KwvDNy.
This link also includes instructions on opting out of this behavior.

### Usage

```javascript
import registerServiceWorker from '@dns/service-worker';

...

ReactDOM.render(
  <App />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
```

### Setup

```shell
yarn
```

### Build

```shell
yarn build
```

### License

@dns/service-worker is [MIT licensed](./LICENSE).
