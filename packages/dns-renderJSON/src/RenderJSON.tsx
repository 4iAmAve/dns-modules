import * as React from 'react';
import { JSONViewer } from './components';

import './styles/renderJSON.css';

export interface RenderJSONProps {
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

export interface RenderJSONState extends RenderJSONProps {
  validationFailure?: boolean;
}

export class RenderJSON extends React.Component<RenderJSONProps, RenderJSONState> {
  public static defaultProps: Partial<RenderJSONProps> = {
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

  public constructor(props: RenderJSONProps) {
    super(props);
    this.state = {
      ...props,
    };

    this.validateInput();
  }

  // make sure props are passed in as expected
  public validateInput = () => {
    // make sure `src` prop is valid
    if (!(this.state.data instanceof Object) && !(this.state.data instanceof Array)) {
      console.error('@dns/renderJSON error:', 'src property must be a valid json object');
      this.setState({
        name: 'ERROR',
        data: {
          message: 'src property must be a valid json object'
        }
      });
    }
  }

  public render() {
    const { theme } = this.props;
    return (
      <div
        className={`render-json ${theme ? `render-json--${theme}` : ''}`}
      >
        <JSONViewer {...this.props} curDepth={0} />
      </div>
    );
  }
}
