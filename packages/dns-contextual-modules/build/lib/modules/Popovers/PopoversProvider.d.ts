import * as React from 'react';
import { PopoverD } from '@dns/toolbox';
export interface PopoverPayload extends PopoverD {
    id: string | number;
    content: any;
    reference?: any;
}
export interface PopoversContextInterface {
    items: object;
    openPopover: (dialogue: PopoverPayload) => void;
    removePopover: (id: string | number) => void;
}
export declare const PopoversContext: React.Context<PopoversContextInterface>;
declare class PopoversProvider extends React.Component {
    state: {
        items: {};
    };
    openPopover: (popover: PopoverPayload) => void;
    removePopover: (id: string | number) => void;
    render(): JSX.Element;
}
export default PopoversProvider;
