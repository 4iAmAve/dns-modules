export interface GenericDialogue {
    title: string | any | null;
    content?: any | null;
    buttons?: Array<any>;
    classNames?: any;
    footer?: any;
    height?: string;
    hero?: any;
    minHeight?: string;
    text?: string | null;
    width?: string;
    withoutOffset?: boolean;
    onClose?: () => void;
}
