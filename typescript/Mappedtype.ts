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