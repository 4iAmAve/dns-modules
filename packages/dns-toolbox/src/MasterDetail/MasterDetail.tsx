import * as React from 'react';

import './MasterDetail.css';

export interface MasterDetailProps {
  master: any;
  detail: any;
  detailOpen: boolean;
  offsetTop?: number;
  offsetWidth?: number;
  masterMaxHeight?: number;
  detailMaxHeight?: number;
  masterMaxWidth?: number;
  detailMaxWidth?: number;
  orientation?: 'vertical' | 'horizontal';
  className?: any;
}

export class MasterDetail extends React.Component<MasterDetailProps, null> {
  public static defaultProps: Partial<MasterDetailProps> = {
    master: null,
    detail: null,
    detailOpen: false,
    offsetTop: 0,
    offsetWidth: 0,
    orientation: 'horizontal',
  };

  private masterRef: HTMLElement;
  private detailRef: HTMLElement;

  public calculateMasterDetailMaxHeightDimensions = () => {
    if (this.masterRef && this.detailRef) {
      const availableDocHeight = document.body.offsetHeight - (this.props.offsetTop || 0);

      if (this.props.detailOpen) {
        const master = this.masterRef.getBoundingClientRect();

        return {
          master: availableDocHeight / 2,
          detail: availableDocHeight - master.height,
        };
      } else {
        return {
          master: this.props.masterMaxHeight || availableDocHeight,
          detail: 0,
        };
      }
    } else {
      return {
        master: this.props.masterMaxHeight || '100vh',
        detail: 0,
      };
    }
  }

  public calculateMasterDetailMaxWidthDimensions = () => {
    if (this.masterRef && this.detailRef) {
      const availableDocWidth = document.body.offsetWidth - (this.props.offsetWidth || 0);

      if (this.props.detailOpen) {
        const master = this.masterRef.getBoundingClientRect();
        // const detail = this.detailRef.getBoundingClientRect();

        return {
          master: availableDocWidth / 2,
          detail: availableDocWidth - master.width,
        };
      } else {
        return {
          master: this.props.masterMaxWidth || availableDocWidth,
          detail: 0,
        };
      }
    } else {
      return {
        master: this.props.masterMaxWidth || '100vw',
        detail: 0,
      };
    }
  }

  public handleMasterRef = ref => this.masterRef = ref;
  public handleDetailRef = ref => this.detailRef = ref;

  render () {
    const {
      className,
      detail,
      detailOpen,
      master,
      masterMaxHeight,
      masterMaxWidth,
      detailMaxHeight,
      detailMaxWidth,
      orientation
    } = this.props;
    let masterInlineStyle = {};
    let detailInlineStyle = {};

    if (orientation === 'horizontal') {
      const { master: masterMW, detail: detailMW } = this.calculateMasterDetailMaxWidthDimensions();
      masterInlineStyle = {
        maxWidth: masterMaxWidth ? masterMaxWidth : (masterMW || 0)
      };
      detailInlineStyle = {
        maxWidth: detailMaxWidth ? detailMaxWidth : (detailMW || 0)
      };
    } else if (orientation === 'vertical') {
      const { master: masterMH, detail: detailMH } = this.calculateMasterDetailMaxHeightDimensions();
      masterInlineStyle = {
        maxHeight: masterMaxHeight ? masterMaxHeight : (masterMH || 0)
      };
      detailInlineStyle = {
        maxHeight: detailMaxHeight ? detailMaxHeight : (detailMH || 0)
      };
    }

    return (
      <div
        className={`
          master-detail
          master-detail--${orientation}
          ${className ? className : ''}
          ${detailOpen ? 'master-detail--open' : ''}
        `}
      >
        <div className={`master`} style={masterInlineStyle} ref={this.handleMasterRef}>
          {master}
        </div>
        <div className={`detail`} style={detailInlineStyle} ref={this.handleDetailRef}>
          {detail}
        </div>
      </div>
    );
  }
}
