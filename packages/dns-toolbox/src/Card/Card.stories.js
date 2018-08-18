import React from "react";

import { storiesOf } from "@storybook/react";
import { text, boolean } from "@storybook/addon-knobs/react";
import { Card } from "./Card";
import { wInfo } from "../../utils";

storiesOf("Card", module).addWithJSX(
  "<Card />",
  wInfo(`
  ### Usage
  ~~~js
  <Card>
    Content
  </Card>
  ~~~`)(() => (
    <Card
      withoutOffset={boolean("withoutOffset", false)}
    >
      { text('children', 'Content') }
    </Card>
  ))
);
