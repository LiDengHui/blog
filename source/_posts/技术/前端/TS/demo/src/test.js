var __decorate =
    (this && this.__decorate) ||
    function (decorators, target, key, desc) {
        // 函数参数长度
        var c = arguments.length;

        /**
         * 处理结果
         * 如果仅仅传入了装饰器数组和目标，那么应该是个类装饰器。
         * 否则，如果描述符（第 4 个参数）为 null，就根据已知值准备属性描述符，
         * 反之则使用同一描述符。
         */

        var r =
            c < 3
                ? target
                : desc === null
                ? (desc = Object.getOwnPropertyDescriptor(target, key))
                : desc;

        // 声明存储装饰器的变量
        var d;

        // 如果原生反射可用，使用原生反射触发装饰器
        if (
            typeof Reflect === "object" &&
            typeof Reflect.decorate === "function"
        ) {
            r = Reflect.decorate(decorators, target, key, desc);
        } else {
            // 自右向左迭代装饰器
            for (var i = decorators.length - 1; i >= 0; i--) {
                // 如果装饰器合法，将其赋值给 d
                if ((d = decorators[i])) {
                    /**
                     * 如果仅仅传入了装饰器数组和目标，那么应该是类装饰器，
                     * 传入目标调用装饰器。
                     * 否则，如果 4 个参数俱全，那么应该是方法装饰器，
                     * 据此进行调用。
                     * 反之则使用同一描述符。
                     * 如果传入了 3 个参数，那么应该是属性装饰器，可进行相应的调用。
                     * 如果以上条件皆不满足，返回处理的结果。
                     */
                    r =
                        (c < 3
                            ? d(r)
                            : c > 3
                            ? d(target, key, r)
                            : d(target, key)) || r;
                }
            }
        }

        /**
         * 由于只有方法装饰器需要根据应用装饰器的结果修正其属性，
         * 所以最后返回处理好的 r
         */
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

var Employee = /** @class */ (function () {
    function Employee(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    Employee.prototype.greet = function (message) {
        return this.firstName + " " + this.lastName + " says: " + message;
    };

    // typescript 调用 `__decorate` 辅助函数，
    // 以便在对象原型上应用装饰器
    __decorate([logMethod], Employee.prototype, "greet");
    return Employee;
})();
var emp = new Employee("Mohan Ram", "Ratnakumar");
emp.greet("hello");
