import * as React from 'react';
import { connect } from 'react-redux';

import { FilterState } from '../../reducers';
import { filterActions } from '../../actions';

export interface FilterModuleProps {
  id: string;
  filter: FilterState;
  onSubscribeToFilterStore: (id: string | number, settings: any) => void;
  defaultSettings?: any;
  className?: any;
}

export interface FilterModuleState {
}

class FilterModule extends React.Component<FilterModuleProps, FilterModuleState> {
  public constructor(props: FilterModuleProps) {
    super(props);

    if (!(props.id in props.filter)) {
      if (props.id && props.id.length) {
        props.onSubscribeToFilterStore(props.id, props.defaultSettings);
      }
    }
  }

  public componentDidUpdate(prevProps: FilterModuleProps) {
    if (!(this.props.id in this.props.filter)) {
      if (this.props.id.length) {
        this.props.onSubscribeToFilterStore(this.props.id, this.props.defaultSettings);
      }
    }
  }

  render() {
    const { className, children } = this.props;

    return (
      <div className={`filter ${className ? className : ''}`}>
        {children ? children : null}
      </div>
    );
  }
}

const mapStateToProps = (state: any) => ({
  filter: state.filter,
});

const mapDispatchToProps = dispatch => ({
  onSubscribeToFilterStore: (id: string | number, settings: any) =>
    dispatch(filterActions.subscribeToFilterStore(id, settings)),
});

export const connectedFilter = connect(mapStateToProps, mapDispatchToProps)(FilterModule);
