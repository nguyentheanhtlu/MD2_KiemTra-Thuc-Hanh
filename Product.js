"use strict";
exports.__esModule = true;
exports.Product = void 0;
var Product = /** @class */ (function () {
    function Product(id, name, type, price, number, dayAdd, describe) {
        this.id = id;
        this.name = name;
        this.type = type;
        this.price = price;
        this.number = number;
        this.dayAdd = dayAdd;
        this.describe = describe;
    }
    Product.prototype.getName = function () {
        return this.name;
    };
    Product.prototype.getId = function () {
        return this.id;
    };
    Product.prototype.setName = function (name) {
        this.name = name;
    };
    Product.prototype.setType = function (type) {
        this.type = type;
    };
    Product.prototype.setPrice = function (price) {
        this.price = price;
    };
    Product.prototype.setNumber = function (number) {
        this.number = number;
    };
    Product.prototype.setDayadd = function (dayAdd) {
        this.dayAdd = dayAdd;
    };
    Product.prototype.setDescribe = function (describe) {
        this.describe = describe;
    };
    return Product;
}());
exports.Product = Product;
