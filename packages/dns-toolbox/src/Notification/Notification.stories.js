import React from "react";

import { storiesOf } from "@storybook/react";
import { boolean, text } from "@storybook/addon-knobs/react";
import { Notification } from "./Notification";
import { wInfo } from "../../utils";

const item = {
  id: 1,
  message: 'Hi',
  type: 'error',
  timestamp: new Date().getTime(),
};

storiesOf("Notification", module).addWithJSX(
  "<Notification />",
  wInfo(`
  ### Usage
  ~~~js
  <Notification
    item={${JSON.stringify(item)}}
    onCloseNotification={() => {}}
    stacked={false}
  />
  ~~~`)(() => (
    <Notification
      item={item}
      onCloseNotification={() => {}}
      stacked={boolean('stacked', false)}
    />
  ))
);
