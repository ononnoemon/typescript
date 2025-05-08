var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
function formatString(input, toUpper) {
    if (toUpper === false) {
        return input.toLowerCase();
    }
    return input.toUpperCase();
}
var books = [
    { title: "Book A", rating: 4.5 },
    { title: "Book B", rating: 3.2 },
    { title: "Book C", rating: 5.0 }
];
function filterByRating(item) {
    var filterdItem = item.filter(function (element) { return element.rating >= 4; });
    return filterdItem;
}
function concatenateArrays() {
    var _a;
    var arrays = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        arrays[_i] = arguments[_i];
    }
    var result = (_a = []).concat.apply(_a, arrays);
    return result;
}
function processValue(value) {
    if (typeof value === 'string') {
        return value.length;
    }
    return value * 2;
}
var products = [{ name: 'pen', price: 5 }, { name: 'notebook', price: 50 }, { name: 'pencil', price: 10 }];
function getMostExpensiveProduct(products) {
    if (products.length === 0) {
        return null;
    }
    var MostExpensiveProduct = products[0];
    for (var i = 1; i < products.length; i++) {
        if (products[i].price > MostExpensiveProduct.price) {
            MostExpensiveProduct = products[i];
        }
    }
    return MostExpensiveProduct;
}
var Vehicle = /** @class */ (function () {
    function Vehicle(make, year) {
        this.make = make,
            this.year = year;
    }
    Vehicle.prototype.getInfo = function () {
        return "Make: ".concat(this.make, " Year: ").concat(this.year);
    };
    return Vehicle;
}());
var Car = /** @class */ (function (_super) {
    __extends(Car, _super);
    function Car(make, year, model) {
        var _this = _super.call(this, make, year) || this;
        _this.model = model;
        return _this;
    }
    Car.prototype.getModel = function () {
        return "Model: ".concat(this.model);
    };
    return Car;
}(Vehicle));
var car01 = new Car('Toyota', 2022, 'Premio');
console.log(car01.getInfo());
car01.getModel();
var Day;
(function (Day) {
    Day[Day["Monday"] = 0] = "Monday";
    Day[Day["Tuesday"] = 1] = "Tuesday";
    Day[Day["Wednesday"] = 2] = "Wednesday";
    Day[Day["Thursday"] = 3] = "Thursday";
    Day[Day["Friday"] = 4] = "Friday";
    Day[Day["Saturday"] = 5] = "Saturday";
    Day[Day["Sunday"] = 6] = "Sunday";
})(Day || (Day = {}));
function getDayType(day) {
    if (day === Day.Sunday) {
        return "Weekend";
    }
    return "Weekday";
}
