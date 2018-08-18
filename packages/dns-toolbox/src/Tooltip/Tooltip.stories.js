import React from "react";

import { storiesOf } from "@storybook/react";
import { boolean, number, text } from "@storybook/addon-knobs/react";
import { Tooltip } from "./Tooltip";
import { wInfo } from "../../utils";

storiesOf("Tooltip", module).addWithJSX(
  "<Tooltip />",
  wInfo(`
  ### Usage
  ~~~js
    <Tooltip
      label={'tooltip text'}
    >
      <div>hover me</div>
    </Tooltip>
  ~~~`)(() => (
    <Tooltip
      label={text('label', 'tooltip text')}
    >
      <div>{ text('text', 'hover me') }</div>
    </Tooltip>
  ))
);
