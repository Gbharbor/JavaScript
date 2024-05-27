//Defining the Person0 class
class Person0 {
    //Constructor of the class that sets the properties of a person
    constructor(name, age) {
        //Assigns the received name/age to the object
        this.name = name;
        this.age = age;
    }
}
//Creating two persons using Person0 class
let p1 = new Person0("Joao",20);
let p2 = new Person0("Maria",30);
console.log("Age p1: ",p1.age);
console.log("Name p2: ",p2.name);

class Person1 {
    //Initializing the age property with the default value 0
    age = 0;
    constructor(name) {
        this.name = name;
    }
}
let pe1 = new Person1("Ana");
let pe2 = new Person1("Gui");
//Modifying the age of the first person to 20 years.
pe1.age = 20;
console.log(`${pe1.name} is ${pe1.age} years old.`);
console.log(`${pe2.name} is ${pe2.age} years old.`);

class Person2 {
    age = 0;
    steps = 0;
    constructor(name) {
        this.name = name;
    }
    //Method to take a step
    takeAStep() {
        this.steps++; //Increments the person's number of steps by 1
    }
    //Method to set the person's age
    setAge(newAge) {
        //Checks if the new age value is a number
        if(typeof newAge === "number") {
            //sets the person's age to the new value
            this.age = newAge;
        } else {
            console.log("Age must be a number!");
        }
    }
}
let per1 = new Person2("Joao");
let per2 = new Person2("maria");
//Taking steps for the first person, increases the number of steps 
per1.takeAStep();
per1.takeAStep();
per1.takeAStep();
console.log(`${per1.name}'s steps: ${per1.steps}`);
//Setting the age for the first person to 98
per1.setAge(98);
console.log(`${per1.name} is ${per1.age} years old.`);
per2.setAge("hi")
console.log(`${per2.name} is ${per2.age} years old`)

class Person3 {
    _age = 50; //This _ was used to indicate that this property is private, but it does not influence the fact that it is standard!
    constructor(firstName,lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    //Getter method to acess age
    get age() {
        return this._age
    }   
    //Setter method to modify age
    set age(x) { //here i can change the proprierity age
        if (typeof x == "number") { //Checks if the passed value is a number
            this._age = x; //updates the age
        }
    }
    //Getter nethod to return full name
    get fullName () {
        return `${this.firstName} ${this.lastName}`;//Returns fullname
        }
    }
// Creating instances of the Person3
let pers1 = new Person3("Joao","silva");//firstName , lastName
let pers2 = new Person3("maria");//firstName

//Modifying the age of pers1 using the setter method age()
pers1.age = 12;
console.log(`${pers1.fullName} tem ${pers1.age} anos.`);

class Person4 {
    age = 0;
    constructor(name) {
        this.name = name;
    }
    sayHi() {
        console.log(`${this.name} say HI`); //Method that prints a message with the person's name
    }
    sayWC() {
        console.log(`Welcome ${this.name}`);
    }
}
// Defining the Student class that extends Person4
class Student extends Person4 {
    constructor(name,id) { 
        super(name);// Calls the constructor of the parent class (Person4) with the given name
        this.id = id;//Initializes the id property with the value provided when creating a new Student object
    }
    sayHi() {
        console.log (`${this.name} is a student.`)//Replaces the sayHi() method of the parent class, printing a specific message for students
    }
    sayWC(){
        super.sayWC();//Calls the sayWC() with super. method of the parent class (Person4)
        console.log(`Welcome, ${this.name}`); //printing a specific message for students
    }
}
// Creating an instance of the Student class
let perso1 = new Student("Gui Porto", 1);// Create a new object of the Student class with the name "Gui Porto" and id 1
perso1.age = 25; // Changes the age of the student to 25
perso1.sayHi();// prints a specific message for students
perso1.sayWC();// the parent class (Person4)
console.log(`${perso1.name} is #${perso1.age} years old and ID: ${perso1.id}`);

class Person5 {
    static hands = 2;//Setting a static property 'hands' with value 2
    age = 0;
    constructor(name) {
        this.name = name;
    }
    //Instance method
    sayHello() {
        console.log(`${this.name} said Hello and has ${Person5.hands} hands.`);
    }
    static sayHola(name) { 
        console.log(`hola ${name}`);//you can't access instance properties of the class directly using this, because this refers to the class itself, not to a specific instance.
    }
}
Person5.hands = 6;//Modifying the value of the static property "hands" to 4
let pessoa1 = new Person5("Porto");//creating a new instance of the Person5
pessoa1.sayHello();//Calling the sayHello() method of the pessoa1 object,prints a message with the name and the number of hands
console.log(`${pessoa1.name} has ${Person5.hands} little hands`);
Person5.sayHola(pessoa1.name);

class Person6 {
    age =0;
    constructor(name) {
        this.name = name;
    }
}
//Create a person with specific name and age
function createPerson(name, age) {
    //creates  a new instance of the Person6 class with the provided name
    let person = new Person6(name);
    //Sets the age 
    person.age = age;
    //Person complete
    return person;
}
let person = createPerson("Gui",83);
console.log(`${person.name} is ${person.age} years old.`);