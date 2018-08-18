import React from "react";

import { storiesOf } from "@storybook/react";
import { wInfo } from "../utils";

storiesOf("Welcome", module).addWithJSX(
  "to @dns/toolboxs' storybook🎊",
  wInfo(`
    ### To explore all available components take a peak at the panel to your left
  `)(() => <div />)
);
