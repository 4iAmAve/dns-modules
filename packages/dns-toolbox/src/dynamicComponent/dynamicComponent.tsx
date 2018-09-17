import * as React from 'react';

// Usage
//  const Sidebar = dynamicComponent(() =>
//    import(/* webpackChunkName: "Sidebar" */ './components/sidebar')
//  );

export interface DynamicComponentProps {}
export interface DynamicComponentState {
  component: any;
}

export function dynamicComponent(importComponent: any) {
  class DynamicComponent extends React.Component<DynamicComponentProps, DynamicComponentState> {
    constructor(props: DynamicComponentProps) {
      super(props);

      this.state = {
        component: null
      };
    }

    async componentDidMount() {
      const { default: component } = await importComponent();

      this.setState({
        component: component
      });
    }

    render() {
      const C = this.state.component;

      return C ? <C {...this.props} /> : null;
    }
  }

  return DynamicComponent as any;
}
