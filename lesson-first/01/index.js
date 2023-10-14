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
var Vechicle = /** @class */ (function () {
    function Vechicle(numberOfWheels) {
        this.numberOfWheels = 0;
        this.speed = "50km/h";
        this.numberOfWheels = numberOfWheels;
        console.log("new vehicle created");
    }
    Vechicle.prototype.getSpeed = function () {
        return this.speed;
    };
    Vechicle.prototype.getNumberOfWheels = function () {
        return this.numberOfWheels;
    };
    Vechicle.prototype.setNumberOfWheels = function (value) {
        return this.numberOfWheels = value;
    };
    return Vechicle;
}());
var Car = /** @class */ (function (_super) {
    __extends(Car, _super);
    function Car() {
        var _this = _super.call(this, 4) || this;
        _this.EngineName = '';
        return _this;
    }
    Car.prototype.setEngineName = function (NewEngineName) {
        this.EngineName = NewEngineName;
    };
    return Car;
}(Vechicle));
var vehicleNumber1 = new Vechicle(2);
console.log(vehicleNumber1.getSpeed());
console.log(vehicleNumber1.getNumberOfWheels());
vehicleNumber1.setNumberOfWheels(4);
console.log(vehicleNumber1.getNumberOfWheels());
var newCar = new Car();
console.log(newCar.getNumberOfWheels());
