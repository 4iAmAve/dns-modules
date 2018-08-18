import React from "react";

import { storiesOf } from "@storybook/react";
import { boolean, number, text } from "@storybook/addon-knobs/react";
import { Expandable } from "./Expandable";
import { wInfo } from "../../utils";

storiesOf("Expandable", module).addWithJSX(
  "<Expandable />",
  wInfo(`

  ### Usage
  ~~~js
    <Expandable
      open={false}
      maxHeight={200}
    >
      text
    </Expandable>
  ~~~`)(() => (
    <Expandable
      open={boolean('open', false)}
      maxHeight={number('maxHeight', 200)}
    >
      { text('content', 'text') }
    </Expandable>
  ))
);
