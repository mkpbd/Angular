interface PartialPonyModel {
    name?: string;
    color?: string;
    speed?: number;
}
const ponyManager: PartialPonyModel = {
    name: 'Rainbow Dash'
};



type Partial2<T> = {
    [P in keyof T]?: T[P];
};
const pony3: Partial<PonyModel> = {
    name: 'Rainbow Dash'
};


const pony32: Readonly<PonyModel> = {
    name: 'Rainbow Dash',
    color: 'blue',
    speed: 45
};
// all properties are `readonly




const pony43: Pick<PonyModel, 'name' | 'color'> = {
    name: 'Rainbow Dash',
    color: 'blue'
};
// `pony` can't have a `speed` property


// ===================== Record ===================

interface FormValue {
    value: string;
    valid: boolean;
}
const ponyRecord: Record<keyof PonyModel, FormValue> = {
    name: { value: 'Rainbow Dash', valid: true },
    color: { value: 'blue', valid: true },
    speed: { value: '45', valid: true }
};