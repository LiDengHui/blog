import add from "./add";

export function add1(x: number, y: number) {
    return x + y;
}


interface Obj {

    name1: string;
    name2: number;
}

interface ObjString<T, K> {
}
export function getString<T>(obj: T, key: Extract<keyof T, string>): string {
    return String(obj[key]);
}

const obj = {
    name1: "asdas",
    name2: 1
}

console.log(getString(obj, "name1"));


export default {
    add
}