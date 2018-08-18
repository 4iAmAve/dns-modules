## @dns/renderXML

React component for displaying XML serialized and collapsable as dom element.

### Usage

```javascript
import RenderXML from '@dns/renderXML'
// If you're using Immutable.js: `npm i --save immutable`
import { Map } from 'immutable'

// Inside a React component:
const xmlString = '<References attribue="test"><Node>Foo</Node></References>'

<RenderXML data={xmlString} />
```

### Available Properties

required:

- data: xml string

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

@dns/renderXML is [MIT licensed](./LICENSE).
