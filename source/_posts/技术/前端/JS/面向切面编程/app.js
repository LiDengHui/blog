Function.prototype.before = function (fn) {
    const __self = this;

    return function () {
        fn.apply(this, arguments);
        return __self.apply(this, arguments);
    };
};

Function.prototype.after = function (fn) {
    const __self = this;
    return function () {
        const result = __self.apply(this, arguments);
        fn.apply(this, arguments);
        return result;
    };
};

function test() {
    console.log(2);
    return "test";
}

test.after(() => console.log(3)).before(() => console.log(1))();
