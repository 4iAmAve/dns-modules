import React from "react";

import { storiesOf } from "@storybook/react";
import { boolean, number, text } from "@storybook/addon-knobs/react";
import { Textarea } from "./Textarea";
import { wInfo } from "../../utils";

storiesOf("Textarea", module).addWithJSX(
  "<Textarea />",
  wInfo(`
  ### Usage
  ~~~js
  <Textarea
    label={'label / placeholder'}
    type={'text'}
    name={'name'}
    value={'leia4you'}
    required={false}
    disabled={false}
  />
  ~~~`)(() => (
    <Textarea
      label={text('label', 'label / placeholder')}
      error={text('error', null)}
      type={text('type', 'text')}
      name={text('name', 'name')}
      value={text('value', 'leia4you')}
      required={boolean('required', false)}
      autoExpand={boolean('autoExpand', false)}
      maxHeight={number('maxHeight', null)}
      disableResize={boolean('disableResize', false)}
      disabled={boolean('disabled', false)}
    />
  ))
);
