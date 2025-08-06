var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
let x = 10;
x = 5;
console.log(x);
let y = 20;
let nome = "Joao";
let age = 21;
const isAdmin = true;
console.log(typeof nome);
const myNumbers = [1, 2, 3];
console.log(myNumbers);
console.log(myNumbers.length);
myNumbers.push(5);
console.log(myNumbers);
let myTupla;
myTupla = [5, "Joao", ["a", "b", "c"]];
console.log(myTupla);
const user = {
    name: "Joao",
    age: 21,
};
console.log(user);
console.log(user.name);
let a = 0;
a = "Joao";
a = false;
a = [];
let id = "10";
id = 10;
const userId = 10;
const productId = "1010110";
var Size;
(function (Size) {
    Size["P"] = "Pequeno";
    Size["M"] = "Medio";
    Size["G"] = "Grande";
})(Size || (Size = {}));
const camisa = {
    name: "Camisa gola V",
    size: Size.M,
};
console.log(camisa);
let teste;
teste = "autenticado";
teste = null;
function sum(a, b) {
    return a + b;
}
console.log(sum(12, 12));
function sayHelloTo(name) {
    return `Hello, ${name}`;
}
console.log(sayHelloTo("Joao"));
function logger(msg) {
    console.log(msg);
}
logger("Teste!");
function greeting(name, greet) {
    greet ? console.log(`Olá ${greet} ${name}`) : console.log(`Olá ${name}`);
}
greeting("João");
greeting("Carlos", "Sr.");
function sumNumbers(nums) {
    return nums.n1 + nums.n2;
}
console.log(sumNumbers({ n1: 1, n2: 6 }));
function multiplyNumbers(nums) {
    return nums.n1 * nums.n2;
}
let nums = {
    n1: 5,
    n2: 10,
};
console.log(multiplyNumbers(nums));
function doSomething(info) {
    if (typeof info === "number") {
        console.log("O número é: " + info);
        return;
    }
    console.log("Não foi passado um número");
}
doSomething(5);
doSomething(true);
function showArrayItems(arr) {
    arr.map((item) => {
        console.log(`ITEM: ${item}`);
    });
}
showArrayItems([1, 56, 7]);
showArrayItems(["s", "d", "g"]);
class User {
    name;
    role;
    isApproved;
    constructor(name, role, isApproved) {
        this.name = name;
        this.role = role;
        this.isApproved = isApproved;
    }
    showUserName() {
        console.log(`O nome do usuario é: ${this.name}`);
    }
}
const user1 = new User("Joao", "Admin", true);
console.log(user1);
user1.showUserName();
class Car {
    brand;
    wheels;
    constructor(brand, wheels) {
        this.brand = brand;
        this.wheels = wheels;
    }
    showBrand() {
        console.log("A marca do carro é " + this.brand);
    }
}
const c1 = new Car("VW", 4);
c1.showBrand();
class SuperCar extends Car {
    engine;
    constructor(brand, wheels, engine) {
        super(brand, wheels);
        this.engine = engine;
    }
}
const c2 = new SuperCar("AUDI", 4, 2.0);
console.log(c2);
c2.showBrand();
function baseParamters() {
    return function (constructor) {
        return class extends constructor {
            id = Math.random();
            createAt = new Date();
        };
    };
}
let Person = class Person {
    name;
    constructor(name) {
        this.name = name;
    }
};
Person = __decorate([
    baseParamters()
], Person);
const p1 = new Person("Sam");
console.log(p1);
export {};
//# sourceMappingURL=index.js.map