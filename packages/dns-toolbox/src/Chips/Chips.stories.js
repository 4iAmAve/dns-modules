import React from "react";
import { noop } from '@dns/utils';

import { storiesOf } from "@storybook/react";
import { text, boolean } from "@storybook/addon-knobs/react";
import { Chips } from "./Chips";
import { wInfo } from "../../utils";

const chips = [
  {
    title: 'lei4you',
    image: 'http://leia4you.com/assets/img/fav/apple-icon-57x57.png'
  },
  {
    title: 'lei4devs',
    image: 'http://leia4you.com/assets/img/fav/apple-icon-57x57.png'
  },
  {
    title: 'lei4designer',
    image: 'http://leia4you.com/assets/img/fav/apple-icon-57x57.png'
  }
];
storiesOf("Chips", module).addWithJSX(
  "<Chips />",
  wInfo(`
  ### Usage
  ~~~js
  <Chips
    chips={chips}
    onDeleteChip={(chip, key) => {}}
  />
  ~~~`)(() => (
    <Chips
      chips={chips}
      deletable={boolean('deletable', false)}
    />
  ))
);
