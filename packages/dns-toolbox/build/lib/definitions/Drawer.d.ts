export interface Drawer {
    className?: any;
    content: any;
    disableCloseOnOutsideClick?: boolean;
    fullWidth?: boolean;
    id: string | number;
    onClose?: (id: string | number) => void;
    position?: 'top' | 'right' | 'bottom' | 'left';
    title?: any;
    triggerClose?: boolean;
    width?: string;
    withoutCloseButton?: boolean;
}
