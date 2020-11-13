function logMethod(
    target: Object,
    propertyName: string,
    propertyDescriptor: PropertyDescriptor
): PropertyDescriptor {
    const method = propertyDescriptor.value;

    propertyDescriptor.value = function (...args: any[]) {
        const params = args.map((a) => JSON.stringify(a)).join();

        const result = method.apply(this, args);

        const r = JSON.stringify(result);

        console.log(`Call: ${propertyName}(${params})=> ${r}`);

        return result;
    };
    return propertyDescriptor;
}

class Employee {
    constructor(private firstName: string, private lastName: string) {}

    @logMethod
    greet(message: string) {
        return `${this.firstName} ${this.lastName} says: ${message}`;
    }
}

const emp = new Employee("MohanRam", "Ratnakumar");
emp.greet("hello");
