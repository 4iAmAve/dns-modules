import React from "react";
import { noop } from '@dns/utils';

import { storiesOf } from "@storybook/react";
import { text, boolean } from "@storybook/addon-knobs/react";
import { Chip } from "./Chip";
import { wInfo } from "../../utils";

import 'material-design-icons/iconfont/material-icons.css';

storiesOf("Chip", module).addWithJSX(
  "<Chip />",
  wInfo(`
  ### Usage
  ~~~js
  <Chip
    title={'leia4you'}
  />
  ~~~`)(() => (
    <Chip
      title={text('title', 'leia4you')}
      image={text('image', 'http://leia4you.com/assets/img/fav/apple-icon-57x57.png')}
      deletable={boolean('deletable', false)}
    />
  ))
);
