import React from "react";

import { storiesOf } from "@storybook/react";
import {text, boolean, select} from "@storybook/addon-knobs/react";
import { Button } from "./Button";
import { wInfo } from "../../utils";

import 'material-design-icons/iconfont/material-icons.css';

const selectColorLabel = 'Color';
const selectColorOptions = {
  dafault: '',
  success: 'success',
  warning: 'warning',
  danger: 'danger',
  primary: 'primary',
  accent: 'accent',
};
const selectColorDefaultValue = 'default';
const selectColorGroupId = 'color-01';

storiesOf("Button", module).addWithJSX(
  "<Button />",
  wInfo(`
  ### Usage
  ~~~js
  <Button
    label={'Enroll'}
    disabled={false}
    onClick={() => alert('hello there')}
  />
  ~~~`)(() => (
    <Button
      label={text("label", "Label")}
      color={select(selectColorLabel, selectColorOptions, selectColorDefaultValue, selectColorGroupId)}
      raised={boolean("raised", false)}
      filled={boolean("filled", false)}
      rounded={boolean("rounded", false)}
      disabled={boolean("disabled", false)}
      onClick={() => alert("hello there")}
    />
  ))
);
