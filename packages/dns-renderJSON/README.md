## @dns/renderJSON

React component for displaying javascript arrays and JSON objects.

### Usage

```javascript
import RenderJSON from '@dns/renderJSON'
// If you're using Immutable.js: `npm i --save immutable`
import { Map } from 'immutable'

// Inside a React component:
const json = {
  array: [1, 2, 3],
  bool: true,
  number: 12,
  fnctn: function() {},
  object: {
    foo: 'bar'
  },
  immutable: Map({ key: 'value' })
}

<RenderJSON data={json} />
```

### Available Properties

required:

- data: array or object

optional:

- collapseStringsAfterLength: number after which strings are supposed to be cut off
- theme: 'dark'


### Setup

```shell
yarn
```

### Build

```shell
yarn build
```

### License

@dns/renderJSON is [MIT licensed](./LICENSE).
