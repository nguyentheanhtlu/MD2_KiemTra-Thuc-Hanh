export  class Product{
    id : number;
    name : string;
    type : string;
    price : number;
    number : number;
    dayAdd : string;
    describe : string;
    constructor(id : number,
                name : string,
                type : string,
                price : number,
                number : number,
                dayAdd : string,
                describe : string) {
        this.id= id;
        this.name= name;
        this.type = type;
        this.price = price;
        this.number = number;
        this.dayAdd = dayAdd;
        this.describe = describe;
    }
getName(){
        return this.name
}
getId(){
        return this.id
}
setName(name){
         this.name = name;
}
setType(type){
        this.type= type;
}
setPrice(price){
        this.price = price;
}
setNumber(number){
        this.number = number;
}
setDayadd(dayAdd){
        this.dayAdd = dayAdd;
}
setDescribe(describe) {
        this.describe = describe;
}

}