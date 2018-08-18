declare const parseDateHumanReadable: (obj: {
    date: string;
    withTime?: boolean | undefined;
    withoutOffset?: boolean | undefined;
}) => string | false;
export default parseDateHumanReadable;
