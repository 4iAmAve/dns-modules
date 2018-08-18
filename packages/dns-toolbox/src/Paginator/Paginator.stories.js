import React from "react";

import { storiesOf } from "@storybook/react";
import { number, text } from "@storybook/addon-knobs/react";
import { Paginator } from "./Paginator";
import { wInfo } from "../../utils";

const options = [
  {
    key: '0',
    label: '10',
    selected: false,
  },
  {
    key: '1',
    label: '25',
    selected: true,
  },
  {
    key: '2',
    label: '50',
    selected: false,
  },
  {
    key: '3',
    label: '100',
    selected: false,
  },
];

storiesOf("Paginator", module).addWithJSX(
  "<Paginator />",
  wInfo(`
  ### Usage
  ~~~js
  <Paginator
      label="Items per page:"
      pageSize={10}
      pageSizeOptions={${JSON.stringify(options)}}
      totalItems={12}
      pageIndex={1}
      defaultValue={1}
      onPageChange={(e) => {}}
      onOptionsChange={(e) => {}}
  />
  ~~~`)(() => (
    <Paginator
      label={text('label', 'Items per page:')}
      pageSize={number('pageSize', 10)}
      pageSizeOptions={options}
      totalItems={number('totalItems', 12)}
      pageIndex={number('pageIndex', 1)}
      defaultValue={number('defaultValue', 1)}
      onPageChange={(e) => {}}
      onOptionsChange={(e) => {}}
    />
  ))
);
