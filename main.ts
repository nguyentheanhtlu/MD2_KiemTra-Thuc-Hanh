import {MagangerProduct} from "./MagangerProduct";
import * as readlineSync from "readline-sync"

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
    console.log('0 : exit ')
}

let isExist = true
while (isExist == true) {
    menu();
    let number = readlineSync.question('select function :  ')
    switch (number) {
        case '1' :
            MagangerProduct.showList();
            break;
        case '2' :
            let name = readlineSync.question('Enter the name you want to search :');
            MagangerProduct.searchByName(name);
            break;
        case '3' :
            MagangerProduct.addMoreProducts();
            break;
        case '4' :
            let code = +readlineSync.question('enter the person you want to delete :');
            MagangerProduct.delete(code);
            break;
        case '5' :
            let nice = true;
            while (nice) {
                menuEdit()
                let Edit = readlineSync.question('the content you want to write :')
                switch (Edit) {
                    case '1' :
                        let updateCode = +readlineSync.question('Enter the code you want to edit :');
                        let updateName = readlineSync.question('Enter the name new :');
                        MagangerProduct.editName(updateCode, updateName);
                        break;
                    case '2' :
                        let updateCode1 = +readlineSync.question('Enter the code you want to edit :');
                        let updateType = readlineSync.question('Enter the type new :');
                        MagangerProduct.editType(updateCode1, updateType);
                        break;
                    case '3' :
                        let updateCode2 = +readlineSync.question('Enter the code you want to edit :');
                        let updatePrice = +readlineSync.question('Enter the Price new :');
                        MagangerProduct.editPrice(updateCode2, updatePrice);
                        break;
                    case '4' :
                        let updateCode3 = +readlineSync.question('Enter the code you want to edit :');
                        let updateNumber = +readlineSync.question('Enter the Number new :');
                        MagangerProduct.editNumber(updateCode3, updateNumber);
                        break;
                    case '4' :
                        let updateCode4 = +readlineSync.question('Enter the code you want to edit :');
                        let updateDayAdd = readlineSync.question('Enter the dayadd new :');
                        MagangerProduct.editDayAdd(updateCode4, updateDayAdd);
                        break;
                    case '5' :
                        let updateCode5 = +readlineSync.question('Enter the code you want to edit :');
                        let updateDescribe = readlineSync.question('Enter the Describe new :');
                        MagangerProduct.editDescribe(updateCode5, updateDescribe);
                        break;
                    case '0' :
                        nice = false;
                        break;
                }


            }
        case '0' :
            isExist = false;
            break;
    }
}
