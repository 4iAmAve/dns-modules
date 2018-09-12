interface SerializeOptions {
    space?: number;
    isJSON?: boolean;
    unsafe?: boolean;
}
declare const serialize: (obj: any, options: SerializeOptions) => any;
export default serialize;
