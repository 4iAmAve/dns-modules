// humps.camelizeKeys considers `_id` and `id` as equal.
// see https://github.com/domchristie/humps/issues/22
// therefor this little wrapper

import {
  camelizeKeys as humpsCamelizeKeys,
  camelize as humpsCamelize,
} from 'humps';

const PROTECTED_KEY = /^[A-Z,0-9_]/;

const customCamelizeKeys = (key: any, convert: any) => {
  return (PROTECTED_KEY.test(key) ? key : convert(key));
};

const camelizeKeys = (json: any) => humpsCamelizeKeys(json, customCamelizeKeys);
const camelize = (text: string) => (PROTECTED_KEY.test(text) ? text : humpsCamelize(text));

export {
  camelizeKeys,
  camelize,
};
