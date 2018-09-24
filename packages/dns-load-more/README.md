## @dns/load-more

React component for lazy loading and rendering data on demand.

### Usage

```javascript
import { LoadMore } from '@dns/load-more'

const data = [
  {
    id: 0,
    name: "foo",
  }
];

const endMessage = (
  <div>You've seen it all!</div>
);

const loader = "Load More!";

function rendered() {
  console.log('new data rendered');
}

function fetchNewData(position: number) {
  console.log('fetch new data', position);
}

function renderElement(value: any, key: number) {
  console.log('renderElement', value, key);
}

<LoadMore
  dataLength={data.length}
  data={data}
  limit={100}
  maxHeight={400}
  hasChildren={false}
  endMessage={endMessage}
  loader={loader}
  onLoaded={rendered}
  onFetch={fetchNewData}
  onRenderElement={renderElement}
/>
```

### Setup

```shell
yarn
```

### Build

```shell
yarn
```

### Start Watcher For Local Development

```shell
yarn start-watcher
```

### License

@dns/load-more is [MIT licensed](./LICENSE).
