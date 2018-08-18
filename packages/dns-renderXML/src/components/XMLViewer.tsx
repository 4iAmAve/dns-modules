import * as React from 'react';
import { NodeElement } from './NodeElement';

export interface XMLViewerProps {
  data: any;
  curDepth: number;
  collapsed?: boolean;
  collapseStringsAfterLength?: number;
  shouldCollapse?: boolean;
  indentWidth?: number;
}

export interface XMLViewerState {
  collapsed: boolean;
}

export class XMLViewer extends React.Component<XMLViewerProps, XMLViewerState> {
  public static defaultProps: Partial<XMLViewerProps> = {
    data: {},
    collapsed: true,
    collapseStringsAfterLength: 0,
    shouldCollapse: false,
    indentWidth: 4,
  };

  public constructor(props: XMLViewerProps) {
    super(props);

    this.state = {
      collapsed: props.collapsed
    };
  }

  public generateAttributes = (node: HTMLElement) => {
    const attributes = node.attributes;
    let attributesString = '';

    if (attributes && attributes.length) {
      Object.keys(attributes).forEach((key: any) =>
        attributesString += `${attributes[key].name}="${attributes[key].nodeValue}" `
      );
    }

    return attributesString.trim();
  }

  public generateNode = (node: HTMLElement, key: number) => {
    const { collapsed } = this.state;
    let nodeStringStart = '';
    let nodeStringText = null as any;
    let nodeStringElem = null as any;

    const inlineStyle = {
      marginLeft: `${key}em`,
    };

    nodeStringStart += `<${node.nodeName}`;

    const attributes = this.generateAttributes(node);

    if (attributes.length) {
      nodeStringStart += ` ${attributes}`;
    }

    nodeStringStart += `>`;

    if (node.childNodes && node.childNodes.length) {
      let text = [] as any;
      Object.keys(node.childNodes).forEach((element: any, id: any)  => {
        if (node.childNodes[element].nodeName === '#text') {
          text.push(
            <span
              style={inlineStyle}
              className="rx_elem_text"
              key={`xml-text-${key}-${id}`}
            >
              {`${node.childNodes[element].nodeValue}`.trim()}
            </span>
          );
        }
      });

      nodeStringText = text && text.length ? text : null;
    }

    if (node.children && node.children.length) {
      let element = [] as any;
      Object.keys(node.children).forEach((el: any, id: any)  =>
        element.push(
          <div key={`elem-${key}-${id}`}>
            <NodeElement data={node.children[el]} curDepth={key} />
          </div>
        )
      );

      nodeStringElem = element;
    }

    return (
      <React.Fragment key={`rx_elem-${key}`}>
        {
          collapsed ?
            <div style={inlineStyle} className="rx_elem_tag">{`<${node.nodeName} />`}</div> :
            <React.Fragment>
              <div style={inlineStyle} className="rx_elem_tag">{nodeStringStart}</div>
              {nodeStringText ? <span style={inlineStyle} className="rx_elem_text">{nodeStringText}</span> : null}
              <div style={inlineStyle}>{nodeStringElem}</div>
              <div style={inlineStyle} className="rx_elem_tag">{`</${node.nodeName}>`}</div>
            </React.Fragment>
        }
      </React.Fragment>
    );
  }

  public parseXML = () => {
    const { data } = this.props;
    const parsed = new DOMParser().parseFromString(data, 'application/xml');
    let value = null as any;

    Object.keys(parsed.children).forEach((element: any)  =>
      value = this.generateNode(parsed.children[element] as any, 0)
    );

    return value;
  }

  public render() {
    return (
      <div className="render-xml_viewer">
        {this.parseXML()}
      </div>
    );
  }
}
