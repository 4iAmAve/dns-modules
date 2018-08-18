import * as React from 'react';
import { connect } from 'react-redux';
import { Paginator } from '@dns/toolbox';

import { paginatorActions } from '../../actions/paginator';
import { PaginatorState } from '../../reducers';

export interface Option {
  key: string | number;
  label: string;
  selected: boolean;
}

export interface PaginatorModuleProps {
  id: string;
  paginator: Readonly<PaginatorState>;
  defaultValue: number;
  pageSize: number;
  pageSizeOptions: Option[];
  pageIndex: number;
  totalItems: number | null;
  onChange: (e: any) => void;
  onSubscribeToPaginatorStore: (id: string | number, settings: any) => void;
  onUpdatePaginator: (id: string | number, settings: any) => void;
  className?: any;
  label?: string;
}

export interface PaginatorModuleState {
  menuOpen: boolean;
}

class PaginatorModule extends React.Component<PaginatorModuleProps, PaginatorModuleState> {
  private defaultSettings = {
    defaultValue: 0,
    pageIndex: 0,
    pageSize: 0,
    pageSizeOptions: [],
    label: '',
    totalItems: 0,
  };

  public constructor(props: PaginatorModuleProps) {
    super(props);

    if (!(props.id in props.paginator)) {
      const settings = {
        defaultValue: props.defaultValue,
        pageIndex: props.pageIndex,
        pageSize: props.pageSize,
        pageSizeOptions: props.pageSizeOptions,
        label: props.label,
        totalItems: props.totalItems,
      };

      if (props.id && props.id.length) {
        props.onSubscribeToPaginatorStore(props.id, settings);
      }
    }
  }

  public componentDidUpdate(prevProps: PaginatorModuleProps) {
    if (!(this.props.id in this.props.paginator)) {
      if (this.props.id.length) {
        const settings = {
          defaultValue: this.props.defaultValue,
          pageIndex: this.props.pageIndex,
          pageSize: this.props.pageSize,
          pageSizeOptions: this.props.pageSizeOptions,
          label: this.props.label,
          totalItems: this.props.totalItems,
        };

        this.props.onSubscribeToPaginatorStore(this.props.id, settings);
      }
    }
  }

  public onOptionChange = (e: Option) => {
    const { id, pageSizeOptions, paginator, defaultValue } = this.props;
    let newDefaultValue = defaultValue;

    const newPageSizeOptions = pageSizeOptions.map((value: Option, key: number) => {
      if (value.key === e.key) {
        newDefaultValue = key;
      }

      return {
        ...value,
        selected: value.key === e.key
      };
    });

    const settings = {
      ...paginator[id],
      defaultValue: newDefaultValue,
      pageSize: parseInt(e.label, 10),
      pageSizeOptions: newPageSizeOptions,
    };

    this.props.onUpdatePaginator(id, settings);
    this.props.onChange(settings);
  }

  public onPageChange = (e: any) => {
    const { id, paginator } = this.props;

    const settings = {
      ...paginator[id],
      pageIndex: e.pageIndex,
    };

    this.props.onUpdatePaginator(id, settings);
    this.props.onChange(settings);
  }

  render() {
    const { id, className, paginator, totalItems } = this.props;
    const settings = paginator[id] || this.defaultSettings;
    const {
      defaultValue,
      pageIndex,
      pageSize,
      pageSizeOptions,
      label = ''
    } =  settings;
    return (
      <Paginator
        defaultValue={defaultValue}
        pageSize={pageSize}
        pageSizeOptions={pageSizeOptions}
        pageIndex={pageIndex}
        totalItems={totalItems}
        onOptionsChange={this.onOptionChange}
        onPageChange={this.onPageChange}
        label={label}
        className={className}
      />
    );
  }
}

const mapStateToProps = (state: any) => ({
  paginator: state.paginator,
});

const mapDispatchToProps = dispatch => ({
  onUpdatePaginator: (id: string | number, settings: any) =>
    dispatch(paginatorActions.updatePaginator(id, settings)),
  onSubscribeToPaginatorStore: (id: string | number, settings: any) =>
    dispatch(paginatorActions.subscribeToPaginatorStore(id, settings)),
});

export const connectedPaginator = connect(mapStateToProps, mapDispatchToProps)(PaginatorModule);
