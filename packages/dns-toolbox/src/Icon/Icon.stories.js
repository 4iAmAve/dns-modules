import React from "react";

import { storiesOf } from "@storybook/react";
import { select, text } from "@storybook/addon-knobs/react";
import { Icon } from "./Icon";
import { wInfo } from "../../utils";

import 'material-design-icons/iconfont/material-icons.css';

const colorLabel = 'Color';
const colorOptions = {
  dafault: '',
  success: 'success',
  warning: 'warning',
  danger: 'danger',
  accent: 'accent',
  primary: 'primary',
};
const colorDefaultValue = 'accent';
const colorGroupId = 'color-01';

storiesOf("Icon", module).addWithJSX(
  "<Icon />",
  wInfo(`
  ### Usage
  ~~~js
  <Icon
    icon={'search'}
    type={'accent'}
  />
  ~~~`)(() => (
    <Icon
      icon={text("icon", "search")}
      type={select(colorLabel, colorOptions, colorDefaultValue, colorGroupId)}
    />
  ))
);
