import React from "react";

import { storiesOf } from "@storybook/react";
import { boolean, number, text } from "@storybook/addon-knobs/react";
import { Tabs } from "./Tabs";
import { wInfo } from "../../utils";

const tabs = [
  {
    title: 'Tab 1',
    content: 'Tab 1 Content',
    selected: false,
  },
  {
    title: 'Tab 2',
    content: 'Tab 2 Content',
    selected: true,
  },
  {
    title: 'Tab 3',
    content: 'Tab 3 Content',
    selected: false,
  },
];

storiesOf("Tabs", module).addWithJSX(
  "<Tabs />",
  wInfo(`
  ### Usage
  ~~~js
  <Tabs
    tabs={${JSON.stringify(tabs)}}
    withNavigation={false}
  />
  ~~~`)(() => (
    <Tabs
      tabs={tabs}
      withNavigation={boolean('withNavigation', false)}
    />
  ))
);
