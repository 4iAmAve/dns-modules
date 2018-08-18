## @dns/api

TSLint configuration

### Usage
```
import { send, subscribe, endCallForId } from '@dns/api'

const call = {
  url: 'your request url string',
  data?: {},
  params?: { for: GET requests },
  httpMethod?: 'your deisred http method type (default is 'post')',
  headers?: { YOUR_HEADER_NAME: your-header-value },
  successCallback?: Function to return on success,
  errorCallback?: Function to return on error
};

send(call);
subscribe('id for call', call, timeout?);
endCallForId('id for call');
```

### License

@dns/api is [MIT licensed](./LICENSE).
