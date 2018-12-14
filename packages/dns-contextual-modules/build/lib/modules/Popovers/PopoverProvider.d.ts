import * as React from 'react';
import { PopoverD } from '@dns/toolbox';
export interface PopoverPayload extends PopoverD {
    id: string | number;
    content: any;
    reference?: any;
}
export interface PopoverContextInterface {
    data: PopoverPayload | boolean | null;
    id: string | number;
    initPopover: (id: string | number) => void;
    updatePopover: (dialogue: PopoverPayload) => void;
}
export declare const PopoverContext: React.Context<PopoverContextInterface>;
declare class PopoverProvider extends React.Component {
    state: {
        data: any;
        id: number;
    };
    initPopover: (id: string | number) => void;
    updatePopover: (data: any) => void;
    render(): JSX.Element;
}
export default PopoverProvider;
