let x: number = 10;

x = 5;

console.log(x);

// inferencia x annotation
let y = 20;

// Tipos primitivos
let nome: string = "Joao";
let age: number = 21;
const isAdmin: boolean = true;

console.log(typeof nome);

// object | array

const myNumbers: number[] = [1, 2, 3];

console.log(myNumbers);
console.log(myNumbers.length);
myNumbers.push(5);

console.log(myNumbers);

// tuplas -> tuple | dita como sera o array
let myTupla: [number, string, string[]];

myTupla = [5, "Joao", ["a", "b", "c"]];

console.log(myTupla);

// object literals -> {props: value}

const user: { name: string; age: number } = {
    name: "Joao",
    age: 21,
};

console.log(user);
console.log(user.name);

// any
let a: any = 0;

a = "Joao";
a = false;
a = [];

// union type
let id: string | number = "10";

id = 10;

// id = true;
// id = [];

// type alias

type myIdType = number | string;
const userId: myIdType = 10;
const productId: myIdType = "1010110";

// enum
enum Size {
    P = "Pequeno",
    M = "Medio",
    G = "Grande",
}

const camisa = {
    name: "Camisa gola V",
    size: Size.M,
};

console.log(camisa);

// literal types
let teste: "autenticado" | null;

teste = "autenticado";
teste = null;

// funções

function sum(a: number, b: number) {
    return a + b;
}

console.log(sum(12, 12));

function sayHelloTo(name: string): string {
    return `Hello, ${name}`;
}

console.log(sayHelloTo("Joao"));

function logger(msg: string): void {
    console.log(msg);
}

logger("Teste!");

function greeting(name: string, greet?: string): void {
    greet ? console.log(`Olá ${greet} ${name}`) : console.log(`Olá ${name}`);
}

greeting("João");

greeting("Carlos", "Sr.");

// interface

interface MathFunctionParams {
    n1: number;
    n2: number;
}

function sumNumbers(nums: MathFunctionParams) {
    return nums.n1 + nums.n2;
}

console.log(sumNumbers({ n1: 1, n2: 6 }));

function multiplyNumbers(nums: MathFunctionParams) {
    return nums.n1 * nums.n2;
}

let nums: MathFunctionParams = {
    n1: 5,
    n2: 10,
};

console.log(multiplyNumbers(nums));

// narrowing | checagem de tipos
// function greeting(name: string, greet?: string): void {
//     greet ? console.log(`Olá ${greet} ${name}`) : console.log(`Olá ${name}`);
// }

function doSomething(info: number | boolean) {
    if (typeof info === "number") {
        console.log("O número é: " + info);
        return;
    }
    console.log("Não foi passado um número");
}

doSomething(5);
doSomething(true);

// generics

function showArrayItems<T>(arr: T[]) {
    arr.map((item) => {
        console.log(`ITEM: ${item}`);
    });
}

showArrayItems([1, 56, 7]);
showArrayItems(["s", "d", "g"]);

// classes

class User {
    name;
    role;
    isApproved;

    constructor(name: string, role: string, isApproved: boolean) {
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

// interfaces em classes
interface IVehicle {
    brand: string;
    showBrand(): void;
}

class Car implements IVehicle {
    brand;
    wheels;

    constructor(brand: string, wheels: number) {
        this.brand = brand;
        this.wheels = wheels;
    }

    showBrand(): void {
        console.log("A marca do carro é " + this.brand);
    }
}

const c1 = new Car("VW", 4);

c1.showBrand();

// herança

class SuperCar extends Car {
    engine: number;

    constructor(brand: string, wheels: number, engine: number) {
        super(brand, wheels);
        this.engine = engine;
    }
}

const c2 = new SuperCar("AUDI", 4, 2.0);

console.log(c2);

c2.showBrand();

// decorators
// constructor decorator
function baseParamters() {
    return function <T extends { new (...args: any[]): {} }>(constructor: T) {
        return class extends constructor {
            id = Math.random();
            createAt = new Date();
        };
    };
}

@baseParamters()
class Person {
    name;

    constructor(name: string) {
        this.name = name;
    }
}

const p1 = new Person("Sam");

console.log(p1);
