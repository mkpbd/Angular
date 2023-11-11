interface PonyModel {
    name: string;
    color: string;
    speed: number;
}

function getProperty(obj: any, key: string): any {
    return obj[key];
}
const pony: PonyModel = {
    name: 'Rainbow Dash',
    color: 'blue',
    speed: 45
};
const nameValue = getProperty(pony, 'name');


type PonyModelKey = keyof PonyModel;
// this is the same as `'name'|'speed'|'color'`
let property: PonyModelKey = 'name'; // works
property = 'speed'; // works
// key = 'other' would not compile

function getProperty2<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key];
}
const pony2: PonyModel = {
    name: 'Rainbow Dash',
    color: 'blue',
    speed: 45
};
// TypeScript infers that `nameValue` is of type `string`!
const nameValue2 = getProperty(pony, 'name');