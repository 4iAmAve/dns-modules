import * as React from 'react';
export interface ErrorBoundaryProps {
}
export interface ErrorBoundaryState {
    hasError: boolean;
}
export declare class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
    constructor(props: ErrorBoundaryProps, context: object);
    componentDidCatch(error: any, info: any): void;
    render(): {} | null | undefined;
}
