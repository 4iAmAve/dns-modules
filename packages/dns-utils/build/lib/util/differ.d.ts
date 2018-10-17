export interface DifferObj {
    oldObj: any;
    newObj: any;
    excludeUnchanged?: boolean;
    returnEntireObj?: boolean;
    returnDiv?: boolean;
}
export declare function differ(diffObj: DifferObj): any;
