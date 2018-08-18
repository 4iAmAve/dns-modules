import * as React from 'react';

import './Page.css';

export interface PageProps {
  title?: string;
  withoutOffset?: boolean;
  classNames?: any;
}

export interface PageState {
}

export class Page extends React.Component<PageProps, PageState> {
  public render() {
    const { children, classNames, title, withoutOffset } = this.props;
    return (
      <div className={`page ${classNames ? classNames : ''}`}>
        {title ?
          <div className="page_header">
              <h1 className="page_title">{title}</h1>
          </div> : null
        }
        <div
          className={`
            page_content
            ${!title ? 'page_content--full-height' : ''}
            ${withoutOffset ? 'page_content--without-offset' : ''}
          `}
        >
          {children}
        </div>
      </div>
    );
  }
}
