import React from "react";

import { storiesOf } from "@storybook/react";
import { number, text } from "@storybook/addon-knobs/react";
import { Slider } from "./Slider";
import { wInfo } from "../../utils";

storiesOf("Slider", module).addWithJSX(
  "<Slider />",
  wInfo(`
  ### Usage
  ~~~js
  <Slider
    value={10}
  />
  ~~~`)(() => (
    <Slider
      value={number("value", 10)}
      min={number("min", 1)}
      max={number("max", 24)}
      step={number("step", 2)}
      labelBefore={text("labelBefore", '')}
    />
  ))
);
