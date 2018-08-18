export interface Chip {
    title: string;
    id?: number | string;
    image?: any;
    selectable?: boolean;
    deletable?: boolean;
    fullWidth?: boolean;
    classNames?: any;
    payload?: any;
    onClick?: () => void;
    onDelete?: () => void;
}
