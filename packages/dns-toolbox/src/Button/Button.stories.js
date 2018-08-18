import React from "react";

import { storiesOf } from "@storybook/react";
import {text, boolean, select} from "@storybook/addon-knobs/react";
import { Button } from "./Button";
import { wInfo } from "../../utils";

import 'material-design-icons/iconfont/material-icons.css';

const selectColorLabel = 'Color';
const selectTypeLabel = 'Type';
const selectColorOptions = {
  dafault: '',
  success: 'success',
  warning: 'warning',
  danger: 'danger',
  primary: 'primary',
  accent: 'accent',
};
const selectTypeOptions = {
  dafault: 'default',
  rounded: 'rounded',
};
const selectColorDefaultValue = 'default';
const selectTypeDefaultValue = 'dafault';
const selectColorGroupId = 'color-01';
const selectTypeGroupId = 'type-01';

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
      label={text("label", "Enroll")}
      color={select(selectColorLabel, selectColorOptions, selectColorDefaultValue, selectColorGroupId)}
      type={select(selectTypeLabel, selectTypeOptions, selectTypeDefaultValue, selectTypeGroupId)}
      raised={boolean("raised", false)}
      disabled={boolean("disabled", false)}
      onClick={() => alert("hello there")}
    />
  ))
);
