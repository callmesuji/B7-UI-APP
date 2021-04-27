console.log("welcome to typescript");
let username = "sujith";
let age: number = 22;
let nationality: string = "INDIAN";
let email: string[] = ['sujithchowdary1223@gmail.com', 'pathipatisujithkumar@gmail.com'];
let address: {} = {
    "city": "anantapur",
    "mandal": "yellanur",
    "state": "AndhraPradesh",
    "pincode": 515001
};
let u_status: any;
u_status = false;
u_status = "married"
console.log(username, age, nationality, email, address);

// function factorial(num) {
// let res = 1;
// for (let i = 2; i <= num; i++) {
//     res *= i;
//     }
//     console.log(res);

// }
const factorial = (num : number) : number => {
    let res = 1;
    for (let i = 2; i <= num; i++) {
        res *= i;
    }
    return res;

};
console.log(factorial(5));
const perform = (a : number, b : number, ope : string = "add") => {
    let res: number = 1;
    if (ope === "add") {
        res = a + b;
    } else if (ope === "mul") {
        res = a * b;
    }
    return res;
}
console.log(perform(5, 5, "mul"));

enum ItemType {
    BOOK,
    CD
}
interface bookinterface {
    showBooks(): void;
}
interface category{
    name: string;
    description : string;
    show():void;
}
let cat : category ;
cat = {"name":"sujith","description":"staff users",show(){console.log("this is show method");
}};

class bookDetails implements bookinterface {
    constructor(private _isbn : string, private _bookName : string, private type : ItemType, private _author : string, private _price : number) {}
    showBooks() { 
        console.log(`BOOK DETAILS : isbn - ${this._isbn} bookname - ${this._bookName} author - ${this._author} price - ${this._price} `);
    }
    get isbn() {
        return this._isbn;
    }
    get bookname() {
        return this._bookName;
    }
    get author() {
        return this._isbn;
    }
    get price() {
        return this._price;
    }
}

let obj1 = new bookDetails("INDJAVA5475", "let us JAVA", ItemType.BOOK, "JAMES GOSLING", 550);
let obj2 = new bookDetails("INDIAC45475", "let us C", ItemType.CD, "Dennis Ritchie", 550);
let obj3 = new bookDetails("INDPYTHON75", "let us PYTHON", ItemType.BOOK, "GUIDO VAN RUSSOM", 550);
let obj4 = new bookDetails("INDPHP45475", "let us PHP", ItemType.CD, "RASMUS Lerdorf", 550);
let arr: bookDetails[] = [obj1, obj2, obj3, obj4];
arr.push(new bookDetails("INDGOLANG75", "let us GO LANG", ItemType.BOOK, "ROB PIKE", 550))
arr.forEach(obj => {
    console.log(obj);
});
console.log(`-------------------------------------------------`);
console.log(`AUTHOR : ${
    obj1.author
} PRICE : ${
    obj1.price
} `);
