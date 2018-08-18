import React from "react";
import { noop } from '@dns/utils';

import { storiesOf } from "@storybook/react";
import { text, boolean } from "@storybook/addon-knobs/react";
import { CollectionLane } from "./CollectionLane";
import { wInfo } from "../../utils";

import 'material-design-icons/iconfont/material-icons.css';

storiesOf("CollectionLane", module).addWithJSX(
  "<CollectionLane />",
  wInfo(`
  ### Usage
  ~~~js
  <CollectionLane
    label={'leia4you'}
  />
  ~~~`)(() => (
    <CollectionLane
      label={text('label', 'leia4you')}
    />
  ))
);
