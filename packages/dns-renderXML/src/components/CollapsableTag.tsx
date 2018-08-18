import * as React from 'react';

import NodeElement from './NodeElement';
import generateAttributes from '../utils/generateAttributes';

export interface CollapsableTagProps {
  data: any;
  curDepth: number;
  collapsed?: boolean;
  collapseStringsAfterLength?: number;
  shouldCollapse?: boolean;
  indentWidth?: number;
}

export interface CollapsableTagState {
  collapsed: boolean;
}

export class CollapsableTag extends React.Component<CollapsableTagProps, CollapsableTagState> {
  public static defaultProps: Partial<CollapsableTagProps> = {
    data: {},
    collapsed: true,
    collapseStringsAfterLength: 0,
    shouldCollapse: false,
    indentWidth: 4,
  };

  public constructor(props: CollapsableTagProps) {
    super(props);

    this.state = {
      collapsed: props.collapsed
    };
  }

  public toggleCollapse = () => this.setState({ collapsed: !this.state.collapsed });

  public render() {
    const { curDepth, data } = this.props;
    const { collapsed } = this.state;
    let nodeStringStart = '';
    let nodeStringElem = null as any;

    const inlineStyle = {
      marginLeft: `${curDepth + 1}em`,
    };
    nodeStringStart += `<${data.nodeName}`;

    const attributes = generateAttributes(data);

    if (attributes.length) {
      nodeStringStart += ` ${attributes}`;
    }

    nodeStringStart += `>`;

    if (data.children && data.children.length) {
      let element = [] as any;
      Object.keys(data.children).forEach((el: any, id: any)  =>
        element.push(
          <div key={`elem-${curDepth}-${id}`}>
            <NodeElement data={data.children[el]} curDepth={curDepth + 1} />
          </div>
        )
      );

      nodeStringElem = element;
    }

    return (
      <div style={inlineStyle} key={`rx_elem-${curDepth}`}>
        <span>
          <i
            className={`material-icons rx_elem_toggle ${!collapsed ? 'rx_elem_toggle--open' : ''}`}
            onClick={this.toggleCollapse}
          >
            keyboard_arrow_down
          </i>
        </span>
        {
          collapsed ?
            <div
              className="rx_elem_tag rx_elem_tag--selectable"
              onClick={this.toggleCollapse}
            >
              {`<${data.nodeName} />`}
            </div> :
            <React.Fragment>
              <div
                className="rx_elem_tag rx_elem_tag--selectable"
                onClick={this.toggleCollapse}
              >
                {nodeStringStart}
              </div>
              <div style={inlineStyle}>{nodeStringElem}</div>
              <div style={inlineStyle} className="rx_elem_tag">{`</${data.nodeName}>`}</div>
            </React.Fragment>
        }
      </div>
    );
  }
}

export default CollapsableTag;
