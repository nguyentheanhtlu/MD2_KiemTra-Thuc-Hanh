"use strict";
exports.__esModule = true;
exports.MagangerProduct = void 0;
var Product_1 = require("./Product");
var readlineSync = require("readline-sync");
var MagangerProduct = /** @class */ (function () {
    function MagangerProduct() {
    }
    MagangerProduct.showList = function () {
        console.table(this.product);
    };
    MagangerProduct.searchByName = function (name) {
        var result = this.product.filter(function (element) {
            return element.getName() == name;
        });
        console.table(result);
    };
    MagangerProduct.addMoreProducts = function () {
        var idAdd = readlineSync.question('Add id products :');
        while (idAdd == '') {
            idAdd = readlineSync.question('Add id products :');
        }
        var nameAdd = readlineSync.question('Add name products :');
        while (nameAdd == '') {
            nameAdd = readlineSync.question('Add name products :');
        }
        var typeAdd = readlineSync.question('Add type products :');
        while (typeAdd == '') {
            typeAdd = readlineSync.question('Add type products :');
        }
        var priceAdd = readlineSync.question('Add price products :');
        while (priceAdd == '') {
            priceAdd = readlineSync.question('Add price products :');
        }
        var numberAdd = readlineSync.question('Add number products :');
        while (numberAdd == '') {
            numberAdd = readlineSync.question('Add number products :');
        }
        var dayAdd = readlineSync.question('Add day products :');
        while (dayAdd == '') {
            dayAdd = readlineSync.question('Add day products :');
        }
        var describeAdd = readlineSync.question('Add describe products :');
        while (describeAdd == '') {
            describeAdd = readlineSync.question('Add describe products :');
        }
        var add = new Product_1.Product(+idAdd, nameAdd, typeAdd, +priceAdd, +numberAdd, dayAdd, describeAdd);
        this.product.push(add);
    };
    MagangerProduct.find = function (code) {
        var i = -1;
        this.product.forEach(function (item, index) {
            if (item.getId() == code) {
                i = index;
            }
        });
        return i;
    };
    MagangerProduct["delete"] = function (code) {
        if (this.find(code) != -1) {
            this.product.splice(this.find(code), 1);
            return this.showList();
        }
        else {
            console.log('The item to be deleted does not exist');
        }
    };
    MagangerProduct.editName = function (code, name) {
        var editName = this.find(code);
        if (editName != -1) {
            this.product[editName].setName(name);
        }
        else
            throw Error('does not exist');
    };
    MagangerProduct.editType = function (code, type) {
        var editType = this.find(code);
        if (editType != -1) {
            this.product[editType].setType(type);
        }
        else
            throw Error('does not exist');
    };
    MagangerProduct.editPrice = function (code, price) {
        var editPrice = this.find(code);
        if (editPrice != -1) {
            this.product[editPrice].setPrice(price);
        }
        else
            throw Error('does not exist');
    };
    MagangerProduct.editNumber = function (code, number) {
        var editNumber = this.find(code);
        if (editNumber != -1) {
            this.product[editNumber].setNumber(number);
        }
        else
            throw Error('does not exist');
    };
    MagangerProduct.editDayAdd = function (code, dayAdd) {
        var editDayAdd = this.find(code);
        if (editDayAdd != -1) {
            this.product[dayAdd].setDayadd(dayAdd);
        }
        else
            throw Error('does not exist');
    };
    MagangerProduct.editDescribe = function (code, Describe) {
        var editDescribe = this.find(code);
        if (editDescribe != -1) {
            this.product[editDescribe].setDescribe(Describe);
        }
        else
            throw Error('does not exist');
    };
    MagangerProduct.product = [];
    return MagangerProduct;
}());
exports.MagangerProduct = MagangerProduct;
