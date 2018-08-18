import React from "react";

import { storiesOf } from "@storybook/react";
import { NativeSelect } from "./NativeSelect";
import { wInfo } from "../../utils";

const selection = ['selection 1', 'selection 2'];

storiesOf("NativeSelect", module).addWithJSX(
  "<NativeSelect />",
  wInfo(`
  ### Note
  
  Native select element in @dns design
  
  ### Usage
  ~~~js
  <NativeSelect
    selection={${JSON.stringify(selection)}}
    onChange={(e) => {}}
  />
  ~~~`)(() => (
    <NativeSelect
      selection={selection}
      onChange={(e) => {}}
    />
  ))
);
