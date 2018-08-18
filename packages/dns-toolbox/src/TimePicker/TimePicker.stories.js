import React from "react";

import { storiesOf } from "@storybook/react";
import { boolean, number, text } from "@storybook/addon-knobs/react";
import { TimePicker } from "./TimePicker";
import { wInfo } from "../../utils";

storiesOf("TimePicker", module).addWithJSX(
  "<TimePicker />",
  wInfo(`
  ### Usage
  ~~~js
  <TimePicker
    timeString={'03:00'}
    disabled={false}
    withoutSeconds={false}
    onChange={() => {}}
  />
  ~~~`)(() => (
    <TimePicker
      timeString={text('timeString', '03:00')}
      disabled={boolean('disabled', false)}
      withoutSeconds={boolean('withoutSeconds', false)}
      onChange={() => {}}
    />
  ))
);
