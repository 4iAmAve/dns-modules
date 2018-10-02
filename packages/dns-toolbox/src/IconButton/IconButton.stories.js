import React from "react";

import { storiesOf } from "@storybook/react";
import { select, text, boolean } from "@storybook/addon-knobs/react";
import { IconButton } from "./IconButton";
import { wInfo } from "../../utils";

import 'material-design-icons/iconfont/material-icons.css';

const selectTypeLabel = 'Type';
const selectTypeOptions = {
  flat: 'flat',
  simple: 'simple',
};
const selectTypeDefaultValue = 'flat';
const selectTypeGroupId = 'selectType-01';
const colorLabel = 'Color';
const colorOptions = {
  dafault: '',
  success: 'success',
  warning: 'warning',
  accent: 'accent',
  danger: 'danger',
};
const colorDefaultValue = 'default';
const colorGroupId = 'color-01';

storiesOf("IconButton", module).addWithJSX(
  "<IconButton />",
  wInfo(`
  ### Usage
  ~~~js
  <IconButton
    icon={'search'}
    type={'flat'}
    disabled={false}
    onClick={() => alert('hello there i am icon')}
  />
  ~~~`)(() => (
    <IconButton
      icon={text("icon", "search")}
      type={select(selectTypeLabel, selectTypeOptions, selectTypeDefaultValue, selectTypeGroupId)}
      color={select(colorLabel, colorOptions, colorDefaultValue, colorGroupId)}
      disabled={boolean("disabled", false)}
      filled={boolean("filled", false)}
      onClick={() => alert("hello there i am icon")}
    />
  ))
);
