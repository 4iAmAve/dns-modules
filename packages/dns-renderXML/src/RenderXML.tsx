import * as React from 'react';
import { XMLViewer } from './components';

import './styles/renderXML.css';

export interface RenderXMLProps {
  data: any;
  name?: string;
  theme?: 'default' | 'dark';
  collapsed?: boolean;
  collapseStringsAfterLength?: number;
  shouldCollapse?: boolean;
  sortKeys?: boolean;
  groupArraysAfterLength?: number;
  indentWidth?: 4;
  enableClipboard?: boolean;
  displayObjectSize?: boolean;
  displayDataTypes?: boolean;
  onEdit?: boolean;
  onDelete?: boolean;
  onAdd?: boolean;
  onSelect?: boolean;
  iconStyle?: string;
  style?: any;
  validationMessage?: string;
}

export interface RenderXMLState extends RenderXMLProps {
  validationFailure?: boolean;
}

export class RenderXML extends React.Component<RenderXMLProps, RenderXMLState> {
  public static defaultProps: Partial<RenderXMLProps> = {
    data: {},
    name: 'root',
    theme: 'default',
    collapsed: false,
    collapseStringsAfterLength: 0,
    shouldCollapse: false,
    sortKeys: false,
    groupArraysAfterLength: 100,
    indentWidth: 4,
    enableClipboard: true,
    displayObjectSize: true,
    displayDataTypes: true,
    onEdit: false,
    onDelete: false,
    onAdd: false,
    onSelect: false,
    iconStyle: 'triangle',
    style: {},
    validationMessage: 'Validation Error'
  };

  public constructor(props: RenderXMLProps) {
    super(props);
    this.state = {
      ...props,
    };

    this.validateInput();
  }

  // make sure props are passed in as expected
  public validateInput = () => {
    // make sure `src` prop is valid
    if (typeof this.props.data !== 'string') {
      console.error('@dns/renderXML error:', 'src property must be a valid string');
      this.setState({
        name: 'ERROR',
        data: {
          message: 'src property must be a valid string'
        }
      });
    }
  }

  public render() {
    const { theme } = this.props;
    return (
      <div
        className={`render-xml ${theme ? `render-xml--${theme}` : ''}`}
      >
        <XMLViewer {...this.props} curDepth={0} />
      </div>
    );
  }
}
