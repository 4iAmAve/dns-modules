export interface MasterDetail {
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
