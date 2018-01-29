/**
 * Created by tonte on 1/29/18.
 */

declare interface String {
    trim():string;
    includes(searchCriteria:string):boolean;
    toCamelCase():string;
    toNormalCase():string;
    format(...arguments);
    substringBefore(searchCriteria:string):string;
    substringAfter(searchCriteria:string):string;
}