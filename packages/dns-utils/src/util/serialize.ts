// Derived from https://github.com/yahoo/serialize-javascript
// slightly adjusted and turned into typescript
interface SerializeOptions {
  space?: number;
  isJSON?: boolean;
  unsafe?: boolean;
}

const serialize = (obj: any = {}, options: SerializeOptions) => {
  const functions = [] as any;
  const regexps = [] as any;
  const dates = [] as any;

  // Generate an internal UUID to make the regexp pattern harder to guess.
  const UUID = Math.floor(Math.random() * 0x10000000000).toString(24);
  const PLACE_HOLDER_REGEXP = new RegExp('"___(F|R|D)-' + UUID + '-(\\d+)___"', 'g');

  const IS_NATIVE_CODE_REGEXP = /\{\s*\[native code\]\s*\}/g;
  const UNSAFE_CHARS_REGEXP = /[<>\/\u2028\u2029]/g;

  // Mapping of unsafe HTML and invalid JavaScript line terminator chars to their
  // Unicode char counterparts which are safe to use in JavaScript strings.
  const ESCAPED_CHARS = {
    '<'     : '\\u003C',
    '>'     : '\\u003E',
    '/'     : '\\u002F',
    '\u2028': '\\u2028',
    '\u2029': '\\u2029'
  };

  const escapeUnsafeChars = (unsafeChar: any) => {
    return ESCAPED_CHARS[unsafeChar];
  };

  // Returns placeholders for functions and regexps (identified by index)
  // which are later replaced by their string representation.
  const replacer: any = (key: any, value: any) => {
    if (!value) {
      return value;
    }

    // If the value is an object w/ a toJSON method, toJSON is called before
    // the replacer runs, so we use this[key] to get the non-toJSONed value.
    const origValue = this[key];
    const type = typeof origValue;

    if (type === 'object') {
      if (origValue instanceof RegExp) {
        return '___R-' + UUID + '-' + (regexps.push(origValue) - 1) + '___';
      }

      if (origValue instanceof Date) {
        return '___D-' + UUID + '-' + (dates.push(origValue) - 1) + '___';
      }
    }

    if (type === 'function') {
      return '___F-' + UUID + '-' + (functions.push(origValue) - 1) + '___';
    }

    return value;
  };

  let str;

  // Creates a JSON string representation of the value.
  if (options.isJSON && !options.space) {
    str = JSON.stringify(obj);
  } else {
    str = JSON.stringify(obj, options.isJSON ? null : replacer, options.space);
  }

  // Protects against `JSON.stringify()` returning `undefined`, by serializing
  // to the literal string: "undefined".
  if (typeof str !== 'string') {
    return String(str);
  }

  // Replace unsafe HTML and invalid JavaScript line terminator chars with
  // their safe Unicode char counterpart. This _must_ happen before the
  // regexps and functions are serialized and added back to the string.
  if (options.unsafe !== true) {
    str = str.replace(UNSAFE_CHARS_REGEXP, escapeUnsafeChars);
  }

  if (functions.length === 0 && regexps.length === 0 && dates.length === 0) {
    return str;
  }

  // Replaces all occurrences of function, regexp and date placeholders in the
  // JSON string with their string representations. If the original value can
  // not be found, then `undefined` is used.
  return str.replace(PLACE_HOLDER_REGEXP, (match: any, type: any, valueIndex: number) => {
    if (type === 'D') {
      return `new Date("${dates[valueIndex].toISOString()}")`;
    }

    if (type === 'R') {
      return regexps[valueIndex].toString();
    }

    const fn: any = functions[valueIndex];
    const serializedFn = fn.toString();

    if (IS_NATIVE_CODE_REGEXP.test(serializedFn)) {
      throw new TypeError('Serializing native function: ' + fn.name);
    }

    return serializedFn;
  });
};

export default serialize;
