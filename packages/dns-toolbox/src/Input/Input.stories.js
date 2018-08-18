import React from "react";

import { storiesOf } from "@storybook/react";
import { boolean, text } from "@storybook/addon-knobs/react";
import { Input } from "./Input";
import { wInfo } from "../../utils";

storiesOf("Input", module).addWithJSX(
  "<Input />",
  wInfo(`
  ### Usage
  ~~~js
  <Input
    label={'label / placeholder'}
    type={'text'}
    name={'name'}
    value={'leia4you'}
    required={false}
    disabled={false}
  />
  ~~~`)(() => (
    <Input
      label={text('label', 'label / placeholder')}
      error={text('error', null)}
      type={text('type', 'text')}
      name={text('name', 'name')}
      value={text('value', 'leia4you')}
      required={boolean('required', false)}
      disabled={boolean('disabled', false)}
    />
  ))
);
