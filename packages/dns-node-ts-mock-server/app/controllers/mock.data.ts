import { parseDateHumanReadable } from '@datns/utils';

export interface Auth {
  name: string;
  username: string;
  password: string;
  uuid: number;
  createdAt: number | string;
}

const time = parseDateHumanReadable({ date: new Date().toString(), withoutOffset: true});

export const data = {
  name: 'Awesome McEpic',
  username: '4iamave',
  password: '54D03B8C1BEA08EF8896747EDC304FF22FBE71A9D764EF9A3EE7B1A4EA60A622',
  uuid: 1,
  createdAt: time
} as Auth;
