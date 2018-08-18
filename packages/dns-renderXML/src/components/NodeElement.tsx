import * as React from 'react';

import StringTag from './StringTag';
import CollapsableTag from './CollapsableTag';

export interface NodeElementProps {
  data: any;
  curDepth: number;
  collapsed?: boolean;
  collapseStringsAfterLength?: number;
  shouldCollapse?: boolean;
  indentWidth?: number;
}

export interface NodeElementState {
}

export class NodeElement extends React.Component<NodeElementProps, NodeElementState> {
  public static defaultProps: Partial<NodeElementProps> = {
    data: '',
    collapsed: true,
    collapseStringsAfterLength: 0,
    shouldCollapse: false,
    indentWidth: 4,
  };

  public parseXML = () => {
    const { curDepth, data } = this.props;
    let value = null as any;

    if (!data.children.length) {
      value = <StringTag data={data} curDepth={curDepth} />;
    } else {
      value = <CollapsableTag data={data} curDepth={curDepth} />;
    }

    return value;
  }

  public render() {
    return (
      <React.Fragment>
        {this.parseXML()}
      </React.Fragment>
    );
  }
}

export default NodeElement;
