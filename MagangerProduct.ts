import {Product} from "./Product";
import * as readlineSync from "readline-sync"

export class MagangerProduct {
    static product: Product[] = [];

    constructor() {
    }

    static showList() {
        console.table(this.product);
    }

    static searchByName(name): void {
        let result = this.product.filter(element => {
            return element.getName() == name;
        })
        console.table(result);
    }

    static addMoreProducts() {
        let idAdd = readlineSync.question('Add id products :')
        while (idAdd == '') {
            idAdd = readlineSync.question('Add id products :')
        }
        let nameAdd = readlineSync.question('Add name products :')
        while (nameAdd == '') {
            nameAdd = readlineSync.question('Add name products :')
        }
        let typeAdd = readlineSync.question('Add type products :')
        while (typeAdd == '') {
            typeAdd = readlineSync.question('Add type products :')
        }
        let priceAdd = readlineSync.question('Add price products :')
        while (priceAdd == '') {
            priceAdd = readlineSync.question('Add price products :')
        }
        let numberAdd = readlineSync.question('Add number products :')
        while (numberAdd == '') {
            numberAdd = readlineSync.question('Add number products :')
        }
        let dayAdd = readlineSync.question('Add day products :')
        while (dayAdd == '') {
            dayAdd = readlineSync.question('Add day products :')
        }
        let describeAdd = readlineSync.question('Add describe products :')
        while (describeAdd == '') {
            describeAdd = readlineSync.question('Add describe products :')
        }
        let add = new Product(+idAdd, nameAdd, typeAdd, +priceAdd, +numberAdd, dayAdd, describeAdd);
        this.product.push(add);
    }

    static find(code: number): number {
        let i = -1;
        this.product.forEach((item, index) => {
            if (item.getId() == code) {
                i = index
            }
        })
        return i;
    }

    static delete(code: number) {
        if (this.find(code) != -1) {
            this.product.splice(this.find(code), 1)
            return this.showList();
        } else {
            console.log('The item to be deleted does not exist')
        }
    }

    static editName(code: number, name: string) {
        let editName = this.find(code);
        if (editName != -1) {
            this.product[editName].setName(name);
        } else throw Error('does not exist');
    }

    static editType(code: number, type: string) {
        let editType = this.find(code);
        if (editType != -1) {
            this.product[editType].setType(type);
        } else throw Error('does not exist');
    }

    static editPrice(code: number, price: number) {
        let editPrice = this.find(code);
        if (editPrice != -1) {
            this.product[editPrice].setPrice(price);
        } else throw Error('does not exist');
    }

    static editNumber(code: number, number: number) {
        let editNumber = this.find(code);
        if (editNumber != -1) {
            this.product[editNumber].setNumber(number);
        } else throw Error('does not exist');
    }

    static editDayAdd(code: number, dayAdd: string) {
        let editDayAdd = this.find(code);
        if (editDayAdd != -1) {
            this.product[dayAdd].setDayadd(dayAdd);
        } else throw Error('does not exist');
    }

    static editDescribe(code: number, Describe: string) {
        let editDescribe = this.find(code);
        if (editDescribe != -1) {
            this.product[editDescribe].setDescribe(Describe);
        } else throw Error('does not exist');
    }

}

