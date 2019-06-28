/**
 * Created by tonte on 1/29/18.
 */

declare interface String {
    trim():string;
    includes(searchCriteria:string): boolean;
    match(...matchCriteria:string[]): boolean
    toCamelCase(): string;
    toNormalCase(): string;
    isAlphabetical(): boolean;
    isAlphanumeric(): boolean;
    format(...arguments): string;
    substringBefore(searchCriteria:string): string;
    substringAfter(searchCriteria:string): string;
}