import * as React from 'react';

import { JSONViewer } from './JSONViewer';

export interface ArrayProps {
  data: any[];
  name: string;
  collapsed: boolean;
}

export interface ArrayState {
  error: boolean | string;
  collapsed: boolean;
  size: number;
}

export class ArrayType extends React.Component<ArrayProps, ArrayState> {
  public constructor(props: ArrayProps) {
    super(props);
    this.state = {
      error: false,
      collapsed: props.collapsed,
      size: 0,
    };

    this.validateInput();
  }

  public validateInput = () => {
    const { data } = this.props;
    if (!(data as any instanceof Array) && !(data as any instanceof Object)) {
      this.setState({ error: 'ERROR' });
    }
  }

  public generateObject = (data: any) => {
    return (
      <div className="pushed-content object-container">
        <div className="object-content">
          <JSONViewer data={data} curDepth={1} />
        </div>
      </div>
    );
  }

  public toggleCollapsed = () => this.setState({ collapsed: !this.state.collapsed });

  public render() {
    const { name, data } = this.props;
    const { collapsed } = this.state;
    return (
      <div className="render-json--flex render-json_array">
        <div className="render-json_label">{name}: </div>
        <div className="render-json_data">
          {
            collapsed ?
              <div className="clickable" onClick={this.toggleCollapsed}>
                <span>[ ... ]</span>
                <span className="render-json_array_count">{data.length}</span>
                <span className="render-json_array_count">items</span>
              </div> :
              <div className="render-json_array-content">
                <div className="clickable" onClick={this.toggleCollapsed}>
                  <span>[</span>
                  <span className="render-json_array_count">{data.length}</span>
                  <span className="render-json_array_count">items</span>
                </div>
                  {this.generateObject(data)}
                <div>{`]`}</div>
              </div>
          }
        </div>
      </div>
    );
  }
}
