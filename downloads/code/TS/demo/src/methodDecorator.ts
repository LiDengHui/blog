
function g(): MethodDecorator {
    console.log("g(): evaluated");
    return function (
        target,
        propertyKey: string,
        descriptor: PropertyDescriptor
    ) {
        const fn = descriptor.value;
        descriptor.value = function () {
            console.log("start");
            const result = fn();
            console.log("end")
            return result+`123`;
        }
        console.log("g(): called");
    };
}

class C {
    @g()
    method() {
        return 123;
    }
}

const c = new C();

console.log(c.method());
