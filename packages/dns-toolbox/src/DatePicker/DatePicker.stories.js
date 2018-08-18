import React from "react";
import { noop } from '@dns/utils';

import { storiesOf } from "@storybook/react";
import { text } from "@storybook/addon-knobs/react";
import { DatePicker } from "./DatePicker";
import { wInfo } from "../../utils";

const today = new Date();
const yesterDay = new Date(today - 86400000);
const fromDate = new Date(yesterDay);

storiesOf("DatePicker", module).addWithJSX(
  "<DatePicker />",
  wInfo(`

  ### Notes

  External module [react-calendar](https://github.com/wojtekmaj/react-calendar) is being used

  ### Usage
  ~~~js
    <DatePicker
      onChange={(e) => {}}
      value={toDate}
      label="to"
      maxDate={toDate}
    />
  ~~~`)(() => (
    <DatePicker
      onChange={(e) => {}}
      value={text('value', fromDate)}
      label={text('label', 'to')}
      maxDate={text('value', today)}
    />
  ))
);
