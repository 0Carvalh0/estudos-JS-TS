interface IPerson {
    Id: number;
    sayMyName(): string;
}

class Person implements IPerson {
    Id: number;
    protected name: string;
    private age: number;

    constructor(Id: number, name: string, age: number) {
        this.Id = Id;
        this.name = name;
        this.age = age;
    }

    sayMyName(): string {
        return `Olá ${this.name}`;
    }
}

class Employee extends Person {
    constructor(Id: number, name: string, age: number) {
        super(Id, name, age);
    }

    WhoAmI() {
        return this.name
    }
}

const p1 = new Person(1, "Joao", 21);
const p2 = new Person(2, "Lucas", 22);

p1.name;
console.log(p1.sayMyName);

