import React from "react";

import { storiesOf } from "@storybook/react";
import { boolean, text } from "@storybook/addon-knobs/react";
import { Page } from "./Page";
import { wInfo } from "../../utils";

storiesOf("Page", module).addWithJSX(
  "<Page />",
  wInfo(`
  ### Usage
  ~~~js
  <Page
    title="leia4you"
    withoutOffset={false}
  >
    test
  </Page>
  ~~~`)(() => (
    <Page
      title={text('title', 'leia4you')}
      withoutOffset={boolean('withoutOffset', false)}
    >
      test
    </Page>
  ))
);
