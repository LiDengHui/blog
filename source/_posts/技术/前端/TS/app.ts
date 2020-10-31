interface Person {
    name: string;
    age: number;
}

function test<T, U extends keyof T>(person: T, key: U) {
    return person[key];
}

test({ name: "John", age: 12 }, "age");
