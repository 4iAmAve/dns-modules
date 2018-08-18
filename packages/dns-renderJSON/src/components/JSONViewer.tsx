import * as React from 'react';
import { ArrayType } from './Array';
import { Boolean } from './Boolean';
import { DateType } from './Date';
import { Number } from './Number';
import { ObjectType } from './Object';
import { String } from './String';

export interface JSONViewerProps {
  data: any;
  curDepth: number;
  collapsed?: boolean;
  collapseStringsAfterLength?: number;
  shouldCollapse?: boolean;
  indentWidth?: number;
}

export interface JSONViewerState {
}

export class JSONViewer extends React.Component<JSONViewerProps, JSONViewerState> {
  public static defaultProps: Partial<JSONViewerProps> = {
    data: {},
    collapsed: false,
    collapseStringsAfterLength: 0,
    shouldCollapse: false,
    indentWidth: 4,
  };

  public determineTypes = () => {
    const { data } = this.props;
    const nodes = [] as any;

    Object.keys(data).forEach((key: string) => {
      if (typeof data[key] === 'number') {
        nodes.push(<Number name={key} data={data[key]} key={key} />);
      } else if (typeof data[key] === 'string') {
        const date = new Date(data[key]).getTime();
        if (!isNaN(date)) {
          nodes.push(<DateType name={key} data={data[key]} key={key}/>);
        } else {
          nodes.push(
            <String
              name={key}
              key={key}
              data={data[key]}
              cutOff={!!this.props.collapseStringsAfterLength || false}
              cutOffThreshold={this.props.collapseStringsAfterLength || 0}
            />
          );
        }
      } else if (typeof data[key] === 'boolean') {
        nodes.push(<Boolean name={key} data={data[key]} key={key} />);
      } else if (data[key] instanceof Array && data[key] instanceof Object) {
        nodes.push(<ArrayType name={key} data={data[key]} key={key} collapsed={true} />);
      } else if (!(data[key] instanceof Array) && data[key] instanceof Object) {
        nodes.push(<ObjectType name={key} data={data[key]} key={key} collapsed={true} />);
      }
    });

    return nodes;
  }

  public render() {
    return (
      <div className="render-json_viewer">
        {this.determineTypes()}
      </div>
    );
  }
}
