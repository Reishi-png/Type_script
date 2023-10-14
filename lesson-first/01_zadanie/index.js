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
var wepon = /** @class */ (function () {
    function wepon(damage, durability, name) {
        this.damage = 1;
        this.durability = 100;
        this.name = 'defaultwepon';
        this.damage = damage;
        this.durability = durability;
        this.name = name;
        console.log('new wepon created');
    }
    wepon.prototype.getDamage = function () {
        return this.damage;
    };
    wepon.prototype.getDurability = function () {
        return this.durability;
    };
    wepon.prototype.getName = function () {
        return this.name;
    };
    wepon.prototype.setDamage = function (value) {
        return this.damage = value;
    };
    wepon.prototype.setDurability = function (value) {
        return this.durability = value;
    };
    wepon.prototype.setName = function (value) {
        return this.name = value;
    };
    return wepon;
}());
var axe = /** @class */ (function (_super) {
    __extends(axe, _super);
    function axe() {
        var _this = _super.call(this, 10, 150, 'boska_siekiera_ostatecznego_rozpierdolu') || this;
        _this.pasive = 'none';
        console.log('axe created');
        return _this;
    }
    axe.prototype.getPasive = function () {
        return this.pasive;
    };
    return axe;
}(wepon));
var axe1 = new axe();
console.log(axe1.getDamage());
