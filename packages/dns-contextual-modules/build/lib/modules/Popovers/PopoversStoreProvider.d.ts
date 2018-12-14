import * as React from 'react';
import { PopoverD } from '@dns/toolbox';
interface PopoverSubscription {
    id: string | number;
    onUpdate: (data?: any) => void;
}
export interface PopoversStoreContextInterface {
    openPopover: (popover: PopoverD) => void;
    removePopover: (id: string | number) => void;
    subscribePopover: (popover: PopoverSubscription) => void;
}
export declare const PopoversStoreContext: React.Context<PopoversStoreContextInterface>;
declare class PopoversStoreProvider extends React.Component {
    _items: {};
    subscribePopover: (popover: PopoverSubscription) => void;
    openPopover: (popover: PopoverD) => void;
    removePopover: (id: string | number) => void;
    render(): JSX.Element;
}
export default PopoversStoreProvider;
