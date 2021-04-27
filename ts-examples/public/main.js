"use strict";
console.log("welcome to typescript");
var username = "sujith";
var age = 22;
var nationality = "INDIAN";
var email = ['sujithchowdary1223@gmail.com', 'pathipatisujithkumar@gmail.com'];
var address = {
    "city": "anantapur",
    "mandal": "yellanur",
    "state": "AndhraPradesh",
    "pincode": 515001
};
var u_status;
u_status = false;
u_status = "married";
console.log(username, age, nationality, email, address);
// function factorial(num) {
// let res = 1;
// for (let i = 2; i <= num; i++) {
//     res *= i;
//     }
//     console.log(res);
// }
var factorial = function (num) {
    var res = 1;
    for (var i = 2; i <= num; i++) {
        res *= i;
    }
    return res;
};
console.log(factorial(5));
var perform = function (a, b, ope) {
    if (ope === void 0) { ope = "add"; }
    var res = 1;
    if (ope === "add") {
        res = a + b;
    }
    else if (ope === "mul") {
        res = a * b;
    }
    return res;
};
console.log(perform(5, 5, "mul"));
var ItemType;
(function (ItemType) {
    ItemType[ItemType["BOOK"] = 0] = "BOOK";
    ItemType[ItemType["CD"] = 1] = "CD";
})(ItemType || (ItemType = {}));
var cat;
cat = { "name": "sujith", "description": "staff users", show: function () {
        console.log("this is show method");
    } };
var bookDetails = /** @class */ (function () {
    function bookDetails(_isbn, _bookName, type, _author, _price) {
        this._isbn = _isbn;
        this._bookName = _bookName;
        this.type = type;
        this._author = _author;
        this._price = _price;
    }
    bookDetails.prototype.showBooks = function () {
        console.log("BOOK DETAILS : isbn - " + this._isbn + " bookname - " + this._bookName + " author - " + this._author + " price - " + this._price + " ");
    };
    Object.defineProperty(bookDetails.prototype, "isbn", {
        get: function () {
            return this._isbn;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(bookDetails.prototype, "bookname", {
        get: function () {
            return this._bookName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(bookDetails.prototype, "author", {
        get: function () {
            return this._isbn;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(bookDetails.prototype, "price", {
        get: function () {
            return this._price;
        },
        enumerable: false,
        configurable: true
    });
    return bookDetails;
}());
var obj1 = new bookDetails("INDJAVA5475", "let us JAVA", ItemType.BOOK, "JAMES GOSLING", 550);
var obj2 = new bookDetails("INDIAC45475", "let us C", ItemType.CD, "Dennis Ritchie", 550);
var obj3 = new bookDetails("INDPYTHON75", "let us PYTHON", ItemType.BOOK, "GUIDO VAN RUSSOM", 550);
var obj4 = new bookDetails("INDPHP45475", "let us PHP", ItemType.CD, "RASMUS Lerdorf", 550);
var arr = [obj1, obj2, obj3, obj4];
arr.push(new bookDetails("INDGOLANG75", "let us GO LANG", ItemType.BOOK, "ROB PIKE", 550));
arr.forEach(function (obj) {
    console.log(obj);
});
console.log("-------------------------------------------------");
console.log("AUTHOR : " + obj1.author + " PRICE : " + obj1.price + " ");
