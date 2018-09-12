## @dns/utils

A component library for useful utility functions 

### Setup

```shell
yarn
```

### Build

```shell
yarn build
```

### Available utils

```javascript
import {
  addToClipboard,
  camelize,
  camelizeKeys,
  capitalize,
  cleanObject,
  convertMillisToTime,
  deepEqual,
  detectIE,
  dnsLogger,
  getContrastYIQ,
  getContrast50,
  generateEmptyArray,
  getSearchParamByName,
  hexToRgb,
  noop,
  omitKeysFromObject,
  onResizeHandler,
  parseDate,
  parseDateAndTime,
  parseDateAndTimeToFixed,
  parseDateHumanReadable,
  serialize,
  standardizeSingleLine,
  stringToColour,
  timeString2ms,
  validateEmail,
  validatePassword,
  validURL,
  xmlToJson,
} from '@dns/utils';
```


### Usage (Excerpt)

```javascript
const text = 'hello world';
const textDoubleSpaces = 'hello  world ';
const json = {
  'foo': 'bar',
  'test': null
};
const unequalJSON = {
  'foo': 'bars',
  'test': null
};
const today = new Date().getTime();
const todayString = new Date();
const hexColor = '#FFF';
const email = 'awesomw@mcepic.com';
const pwd = 'Test123!;,';
const url = 'https://aves.site';
const maliciousObj = {
  num: 0,
  obj: {foo: 'foo'},
  arr: [0, 1, 2],
  bool: true,
  undefined: undefined,
  date: new Date(),
  regexp: /([^\s]+)/g,
  xss: '</script>'
};
const serializeOptions = {
  isJSON: false,
  space: false, // add spaces to JSON output to make it more human readable
  unsafe: false // signal that a straight conversion is desired (w/o xss protection)
};

addToClipboard(text);
camelize(text); // 'Hello World'
customCamelizeKeys(json); // { 'Foo': 'bar', 'Test': null }
capitalize(text); // 'Hello world'
cleanObject(json); // { 'foo': 'bar' }
convertMillisToTime(today); // { hours: ..., minutes: ..., seconds: ...}
deepEqual(json, unequalJSON); // false
detectIE(); // false -> no IE, IE version -> if IE
getContrastYIQ(hexColor); // 'rgba(0, 0, 0, .9)' || 'rgba(255, 255, 255, 0.9)'
getContrast50(hexColor); // 'rgba(0, 0, 0, .9)' || 'rgba(255, 255, 255, 0.9)'
generateEmptyArray(2); // { length: 2 }
getSearchParameterByName('bar'); // url: $host?bar=foo&foo=bar -> foo
hexToRgb(hexColor); // { r: 255, g: 255, b: 255 }
noop(); // () => {}
omitKeysFromObject(json, ['foo']); // { 'test': null }
parseDate(today); // year-month-day
parseDateAndTime(today); // year-month-day hours:minutes:seconds
parseDateAndTimeToFixed(today, true) // second parameter is optional, sets date to start or end of day and returns the same as for parseDateAndTime
parseDateHumanReadable(today); // Thu, 06 Sep 2018 03:30:21
serialize(maliciousObj, serializeOptions); // '{"num":0,"obj":{"foo":"foo"},"arr":[0,1,2],"bool":true,date:new Date(),"regexp":/([^\\s]+)/g,"xss":"\\u003C\\u002Fscript\\u003E"}'
standardizeSingleLine(textDoubleSpaces); // 'hello world'
stringToColour('test'); // rgb(146, 68, 54)
timeString2ms(todayString); // return date in milliseconds
validateEmail(email); // true
validatePassword(pwd); // { strong: true, medium: true, enough: true }
validURL(url); // true
xmlToJson($xmlString); // returns a JSON with NodeName = NodeValue

```
### License

@dns/utils is [MIT licensed](./LICENSE).
