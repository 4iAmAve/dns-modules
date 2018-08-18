import React from "react";

import { storiesOf } from "@storybook/react";
import { text } from "@storybook/addon-knobs/react";
import { Header } from "./Header";
import { wInfo } from "../../utils";

const logo = (<img src={'http://leia4you.com/assets/img/fav/apple-icon-57x57.png'} title="leia4you" alt="leia4you" />);

storiesOf("Header", module).addWithJSX(
  "<Header />",
  wInfo(`

  ### Usage
  ~~~js
    <Header
      label="leia4you"
      logo={${logo}}
    />
  ~~~`)(() => (
    <Header
      label={text('label', 'leia4you')}
      logo={logo}
    />
  ))
);
