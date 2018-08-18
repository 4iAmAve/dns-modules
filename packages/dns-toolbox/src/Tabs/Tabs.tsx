import * as React from 'react';
import SwipeableViews from 'react-swipeable-views';

import { Tab } from '../definitions';
import { IconButton } from '../IconButton/IconButton';

import './Tabs.css';

export interface TabsProps {
  tabs: Tab[];
  className?: any;
  selectedTab?: number;
  swipeable?: boolean;
  withNavigation?: boolean;
  onChange?: (tabIndex: number) => void;
}

export interface TabsState {
  selectedTab: number;
}

export class Tabs extends React.Component<TabsProps, TabsState> {
  public static defaultProps: Partial<TabsProps> = {
    tabs: [
      {
        title: 'Tab',
        content: 'Content',
        selected: true,
      }
    ],
  };

  private tabNodes: object = {};

  public constructor(props: TabsProps) {
    super(props);
    // this.activePos = $('.tabs-header .active').position();
    this.state = {
      selectedTab: props.selectedTab ? props.selectedTab : 0,
    };
  }

  public componentDidMount() {
    const selectedTab = this.props.selectedTab ? this.props.selectedTab : 0;
    // TODO ugly workaround due to initial drawing time. try to get rid of it
    this.setState({ selectedTab });
  }

  public componentDidUpdate(prevProps: TabsProps) {
    if (this.props.selectedTab !== prevProps.selectedTab) {
      const selectedTab = this.props.selectedTab ? this.props.selectedTab : 0;
      // TODO ugly workaround due to initial drawing time. try to get rid of it
      this.setState({ selectedTab });
    }
  }

  public callChange = (tabIndex: number) => {
    if (this.props.onChange) {
      this.props.onChange(tabIndex);
    }
  }

  public generateBorderStyle = (target: any) => {
    const left = target.offsetLeft;
    const width = target.offsetWidth;
    return {
      width,
      left,
    };
  }

  public onTabClick = (e: any, id: number) => {
    // const { width, left } = e.target.getBoundingClientRect();
    this.setState(
      { selectedTab: id },
      () => this.callChange(id)
    );
  }

  public handleRef = (key: number, tabRef: any) => {
    if (tabRef && !(key in this.tabNodes)) {
      this.tabNodes[key] = tabRef;
    }
  }

  public handleChange = (value: number) => {
    this.setState(
      { selectedTab: value },
      () => this.callChange(value)
      );
  }

  public onNavigationClick = (dir: string) => {
    const { selectedTab } = this.state;
    const { tabs } = this.props;

    let newTabState = selectedTab;
    if (dir === 'prev' && selectedTab > 0) {
      newTabState = selectedTab - 1;
    } else if (dir === 'next' && selectedTab < tabs.length - 1) {
      newTabState = selectedTab + 1;
    }

    this.setState(
      { selectedTab: newTabState},
      () => this.callChange(newTabState)
    );
  }

  public determineBorderPosition = () => {
    const { selectedTab } = this.state;
    let borderStyle = {
      left: 0,
      width: 0,
    };

    const target = this.tabNodes[selectedTab];
    if (target) {
      borderStyle = this.generateBorderStyle(target);
    }

    return borderStyle;
  }

  // @TODO add ripple to lis
  public render() {
    const { className, children, swipeable, tabs, withNavigation } = this.props;
    const { selectedTab } = this.state;

    const borderStyle = this.determineBorderPosition();

    return (
      <div className={`tabs ${className ? className : ''}`}>
        <div className="tabs_header">
          <div className="tabs_border" style={borderStyle} />
          <div
            className={`tabs_list ${withNavigation ? 'tabs--with-navigation' : ''}`}
          >
          {
            tabs.length ? tabs.map((tab: Tab, key: number) => (
              <button
                className={`tabs_tab ${selectedTab === key ? 'tabs_tab--selected' : ''}`}
                key={key}
                onClick={(e: any) => this.onTabClick(e, key)}
                ref={tabRef => this.handleRef(key, tabRef)}
              >
                {tab.title}
              </button>
            )) : null
          }
          </div>
          { withNavigation ?
              <div className="tabs_tab-nav">
                <IconButton
                  icon="keyboard_arrow_left"
                  type="simple"
                  disabled={selectedTab <= 0}
                  onClick={() => this.onNavigationClick('prev')}
                />
                <IconButton
                  icon="keyboard_arrow_right"
                  type="simple"
                  disabled={selectedTab >= tabs.length - 1}
                  onClick={() => this.onNavigationClick('next')}
                />
              </div> : null
          }
        </div>
        <div className="tabs_content">
          {
            swipeable ?
              <SwipeableViews
                index={this.state.selectedTab}
                onChangeIndex={this.handleChange}
                animateHeight={true}
                enableMouseEvents={true}
              >
                {children}
              </SwipeableViews> :
              <div className="tabs_tab-content">
                {
                  tabs.length && selectedTab > -1 ?
                    tabs.filter((tab: Tab, key: number) => key === selectedTab)[0].content : null
                }
              </div>
          }
        </div>
      </div>
    );
  }
}
