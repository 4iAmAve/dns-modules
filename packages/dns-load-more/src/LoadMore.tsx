import * as React from 'react';

import './LoadMore.css';

export interface LoadMoreProps {
  dataLength: number;
  data: any[];
  endMessage?: any;
  handleInternally?: boolean; // requires all data to be passed to the module
  hasChildren?: boolean;
  hasMore?: boolean;
  limit?: number;
  loading?: any;
  loader: any;
  maxHeight?: number;
  style?: any;
  onFetch: (position: number) => void;
  onLoaded?: () => void;
  onRenderElement?: (data: any, key: number) => void;
}

export interface LoadMoreState {
  loading: boolean;
}

export class LoadMore extends React.Component<LoadMoreProps, LoadMoreState> {
  public static defaultProps: Partial<LoadMoreProps> = {
    data: [],
    handleInternally: false,
    hasMore: true,
    limit: 200
  };

  public constructor(props: LoadMoreProps) {
    super(props);

    this.state = {
      loading: false
    };
  }

  public componentDidMount() {
    if (this.props.onLoaded) {
      this.props.onLoaded();
    }
  }

  public componentDidUpdate(prevProps: LoadMoreProps) {
    if (prevProps.dataLength !== this.props.dataLength) {
      this.setState({
        loading: false,
      });
    }
  }

  onLoad = () => {
    this.setState(
      { loading: true },
      () => this.props.onFetch(this.props.data.length)
    );
  }

  renderData = () => {
    const data = this.props.data;
    const elems = [];

    if (data && data.length) {
      if (this.props.onRenderElement) {
        data.map((value: any, key: number) => {
          let elem = this.props.onRenderElement(value, key) || null;

          return elems.push((
            <React.Fragment key={`lm_data_${key}`}>
              {elem}
            </React.Fragment>
          ));
        });
      } else {
        throw 'Property "onRenderElement" is missing';
      }
    }

    return elems;
  }

  public render() {
    const data = this.props.hasChildren ? this.props.children : this.renderData();
    const everythingLoaded = this.props.endMessage || `You've reached the end of line!`;
    const loadingText = this.props.loading || 'loading ...';
    let inlineStyle = {};
    console.log(this.props.hasMore);

    if (this.props.style) {
      inlineStyle = {
        ...this.props.style
      };
    }

    if (this.props.maxHeight) {
      inlineStyle = {
        ...inlineStyle,
        maxHeight: this.props.maxHeight
      };
    }

    return (
      <div className="load-more" style={inlineStyle}>
        <div className="lm_wrapper">
          {data}
        </div>
        <div className="lm_loader" onClick={this.onLoad}>
          {
            !this.state.loading && this.props.hasMore ? this.props.loader :
              !this.props.hasMore ? everythingLoaded : loadingText
          }
        </div>
      </div>
    );
  }
}
