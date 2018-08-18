import React from "react";
import { noop } from '@dns/utils';

import { storiesOf } from "@storybook/react";
import { text, boolean } from "@storybook/addon-knobs/react";
import { Checkbox } from "./Checkbox";
import { wInfo } from "../../utils";

import 'material-design-icons/iconfont/material-icons.css';

storiesOf("Checkbox", module).addWithJSX(
  "<Checkbox />",
  wInfo(`
  ### Usage
  ~~~js
  <Checkbox
    id={'checkbox'}
    onChange={(id, checked) => {}}
  />
  ~~~`)(() => (
    <Checkbox
      labelBefore={text('labelBefore', 'test')}
      labelAfter={text('labelAfter', '')}
      checked={boolean("checked", false)}
      id={'checkbox'}
      onChange={(id, checked) => console.log(id, checked)}
    />
  ))
);
