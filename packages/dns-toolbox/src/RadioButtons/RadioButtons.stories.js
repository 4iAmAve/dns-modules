import React from "react";

import { storiesOf } from "@storybook/react";
import { number, text } from "@storybook/addon-knobs/react";
import { RadioButtons } from "./RadioButtons";
import { wInfo } from "../../utils";

const options = [
  {
    label: 'Yes',
  },
  {
    label: 'No',
  },
];

storiesOf("RadioButtons", module).addWithJSX(
  "<RadioButtons />",
  wInfo(`
  ### Usage
  ~~~js
  <RadioButtons
    buttons={${JSON.stringify(options)}}
    onClick={() => {}}
    selected={1}
  />
  ~~~`)(() => (
    <RadioButtons
      buttons={options}
      selected={number('selected', 1)}
      onClick={() => {}}
    />
  ))
);
