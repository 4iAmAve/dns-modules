import React from "react";

import { storiesOf } from "@storybook/react";
import { boolean, text } from "@storybook/addon-knobs/react";
import { ActivityIndicatorSpinner } from "./ActivityIndicatorSpinner";
import { wInfo } from "../../utils";

storiesOf("ActivityIndicatorSpinner", module).addWithJSX(
  "<ActivityIndicatorSpinner />",
  wInfo(`
  ### Usage
  ~~~js
  <ActivityIndicatorSpinner
    loading={false}
  />
  ~~~`)(() => (
    <ActivityIndicatorSpinner
      loading={boolean('loading', false)}
    />
  ))
);
