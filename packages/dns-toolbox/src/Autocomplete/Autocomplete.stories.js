import React from "react";

import { storiesOf } from "@storybook/react";
import { text } from "@storybook/addon-knobs/react";
import { Autocomplete } from "./Autocomplete";
import { wInfo } from "../../utils";

const chips = [
  {
    title: 'lei4you',
    image: 'http://leia4you.com/assets/img/fav/apple-icon-57x57.png'
  }
];

storiesOf("Autocomplete", module).addWithJSX(
  "<Autocomplete />",
  wInfo(`
  ### Usage
  ~~~js
    <Autocomplete
      onSelection={this.handleSelectionChange}
      onDeleteChip={this.handleChipDelete}
      placeholder={'Filter by chips'}
      chips={chips}
    />
  ~~~`)(() => (
    <Autocomplete
      onSelection={() => {}}
      placeholder={text('placeholder', 'click me')}
      chips={chips}
    />
  ))
);
