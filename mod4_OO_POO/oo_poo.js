class Person0 {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
let p1 = new Person0("Joao",20);
let p2 = new Person0("maria",30);
console.log(p1.age);
console.log(p2.name);

class Person1 {
    age = 0;
    constructor(name) {
        this.name = name;
    }
}
let pe1 = new Person1("Joao");
let pe2 = new Person1("maria");
pe1.age = 20
console.log(`${pe1.name} tem ${pe1.age} anos.`);
console.log(`${pe2.name} tem ${pe2.age} anos.`);

class Person2 {
    age = 0;
    steps = 0;
    constructor(name) {
        this.name = name;
    }
    takeAStep() {
        this.steps++;
    }
    setAge(newAge) {
        if(typeof newAge === "number") {
            this.age = newAge;
        } else {
            console.log("idade n aceita (so numero)");
        }
    }
}
let per1 = new Person2("Joao");
let per2 = new Person2("maria");
per1.takeAStep();
per1.takeAStep();
console.log(`passos de ${per1.name}: ${per1.steps}`);
per1.setAge(98);
console.log(`${per1.name} tem ${per1.age} anos.`);

class Person3 {
    _age = 50;
    steps = 0;
        constructor(firstName,lastName) {
            this.firstName = firstName;
            this.lastName = lastName;
        }
    get age() {
        return this._age
    }   
    set age(x) {
        if (typeof x == "number") { 
            this._age = x;
        }
    }
    get fullName () {
        return `${this.firstName} ${this.lastName}`;
        }
    }
let pers1 = new Person3("Joao","silva");
let pers2 = new Person3("maria");
pers1.age = 12;
console.log(`${pers1.fullName} tem ${pers1.age} anos.`);


class Person4 {
    age = 0;
    constructor(name) {
        this.name = name;
    }
    sayHi() {
        console.log(`${this.name} diz OI`)
    }
    sayWC() {
        console.log(`Welcome ${this.name}`);
    }
}
class Student extends Person4 {
    constructor(name,id) { 
        super(name);
        this.id = id;
    }
    sayHi() {
        console.log (`${this.name} e um estudante.`)
    }
    sayWC(){
        super.sayWC();
    }
}
let perso1 = new Student("Gui Porto", 1); 
perso1.age = 25;
perso1.sayHi();
perso1.sayWC();
console.log(`${perso1.name} tem #${perso1.age} anos e matricula ${perso1.id}`);