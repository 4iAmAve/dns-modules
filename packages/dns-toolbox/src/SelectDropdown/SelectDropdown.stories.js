import React from "react";

import { storiesOf } from "@storybook/react";
import { number, text } from "@storybook/addon-knobs/react";
import { SelectDropdown } from "./SelectDropdown";
import { wInfo } from "../../utils";

const options = [
  {
    key: '0',
    label: 'selection 1',
  },
  {
    key: '1',
    label: 'selection 2',
  },
  {
    key: '2',
    label: 'selection 3',
  },
];

storiesOf("SelectDropdown", module).addWithJSX(
  "<SelectDropdown />",
  wInfo(`
  ### Usage
  ~~~js
    <SelectDropdown
      options={${JSON.stringify(options)}}
      label="label"
      defaultValue={1}
      resetLabel={'none'}
      onChange={() => {}}
    />
  ~~~`)(() => (
    <SelectDropdown
      options={options}
      label={text('label', 'label / placeholder')}
      defaultValue={number('defaultValue', 1)}
      resetLabel={text('resetLabel', 'none')}
      onChange={() => {}}
    />
  ))
);
