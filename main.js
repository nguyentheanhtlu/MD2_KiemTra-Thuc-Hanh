"use strict";
exports.__esModule = true;
var MagangerProduct_1 = require("./MagangerProduct");
var readlineSync = require("readline-sync");
function menu() {
    console.log('1 : Show List :');
    console.log('2 : searchByName :');
    console.log('3 : Add :');
    console.log('4 : Delete :');
    console.log('5 : Edit :');
    console.log('0 : Exit');
}
function menuEdit() {
    console.log('1 : edit Name ');
    console.log('2 : edit Type ');
    console.log('3 : edit Price ');
    console.log('4 : edit Number ');
    console.log('5 : edit DayAdd ');
    console.log('6 : edit Describe ');
    console.log('0 : exit ');
}
var isExist = true;
while (isExist == true) {
    menu();
    var number = readlineSync.question('select function :  ');
    switch (number) {
        case '1':
            MagangerProduct_1.MagangerProduct.showList();
            break;
        case '2':
            var name_1 = readlineSync.question('Enter the name you want to search :');
            MagangerProduct_1.MagangerProduct.searchByName(name_1);
            break;
        case '3':
            MagangerProduct_1.MagangerProduct.addMoreProducts();
            break;
        case '4':
            var code = +readlineSync.question('enter the person you want to delete :');
            MagangerProduct_1.MagangerProduct["delete"](code);
            break;
        case '5':
            var nice = true;
            while (nice) {
                menuEdit();
                var Edit = readlineSync.question('the content you want to write :');
                switch (Edit) {
                    case '1':
                        var updateCode = +readlineSync.question('Enter the code you want to edit :');
                        var updateName = readlineSync.question('Enter the name new :');
                        MagangerProduct_1.MagangerProduct.editName(updateCode, updateName);
                        break;
                    case '2':
                        var updateCode1 = +readlineSync.question('Enter the code you want to edit :');
                        var updateType = readlineSync.question('Enter the type new :');
                        MagangerProduct_1.MagangerProduct.editType(updateCode1, updateType);
                        break;
                    case '3':
                        var updateCode2 = +readlineSync.question('Enter the code you want to edit :');
                        var updatePrice = +readlineSync.question('Enter the Price new :');
                        MagangerProduct_1.MagangerProduct.editPrice(updateCode2, updatePrice);
                        break;
                    case '4':
                        var updateCode3 = +readlineSync.question('Enter the code you want to edit :');
                        var updateNumber = +readlineSync.question('Enter the Number new :');
                        MagangerProduct_1.MagangerProduct.editNumber(updateCode3, updateNumber);
                        break;
                    case '4':
                        var updateCode4 = +readlineSync.question('Enter the code you want to edit :');
                        var updateDayAdd = readlineSync.question('Enter the dayadd new :');
                        MagangerProduct_1.MagangerProduct.editDayAdd(updateCode4, updateDayAdd);
                        break;
                    case '5':
                        var updateCode5 = +readlineSync.question('Enter the code you want to edit :');
                        var updateDescribe = readlineSync.question('Enter the Describe new :');
                        MagangerProduct_1.MagangerProduct.editDescribe(updateCode5, updateDescribe);
                        break;
                    case '0':
                        nice = false;
                        break;
                }
            }
        case '0':
            isExist = false;
            break;
    }
}
