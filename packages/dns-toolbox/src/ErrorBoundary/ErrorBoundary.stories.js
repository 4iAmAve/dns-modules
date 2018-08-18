import React from "react";

import { storiesOf } from "@storybook/react";
import { ErrorBoundary } from "./ErrorBoundary";
import { wInfo } from "../../utils";

storiesOf("ErrorBoundary", module).addWithJSX(
  "<ErrorBoundary />",
  wInfo(`

  ### Notes

  Error boundaries are React components that catch JavaScript errors anywhere in their child component tree,
  log those errors, and display a fallback UI instead of the component tree that crashed.
  Error boundaries catch errors during rendering, in lifecycle methods, and in constructors of the whole tree below them. 

  ### Usage
  ~~~js
    <ErrorBoundary>
      <MyComponent />
    </ErrorBoundary>
  ~~~`)(() => (
    <div />
  ))
);
