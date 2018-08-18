import * as React from 'react';
export interface StringTagProps {
    data: any;
    curDepth: number;
    collapsed?: boolean;
    collapseStringsAfterLength?: number;
    shouldCollapse?: boolean;
    indentWidth?: number;
}
declare const StringTag: React.SFC<StringTagProps>;
export default StringTag;
