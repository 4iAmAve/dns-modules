import React from "react";

import { storiesOf } from "@storybook/react";
import { boolean, text } from "@storybook/addon-knobs/react";
import { ActivityIndicatorBar } from "./ActivityIndicatorBar";
import { wInfo } from "../../utils";

storiesOf("ActivityIndicatorBar", module).addWithJSX(
  "<ActivityIndicatorBar />",
  wInfo(`
  ### Usage
  ~~~js
  <ActivityIndicatorBar
    loading={false}
  />
  ~~~`)(() => (
    <ActivityIndicatorBar
      loading={boolean('loading', false)}
    />
  ))
);
