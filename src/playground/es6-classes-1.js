class Person{

    constructor(name='Ananymous', age=0) {
        this.name=name;
        this.age=age;
    }

    getGreeting(){
        return `Hi. I am ${this.name}!`;
    }

    getDescription(){
        return `${this.name} is ${this.age} year(s) old.`;
    }
}

class Student extends Person{
    constructor(name, age, major){
        super(name, age);
        this.major = major;
    }
    hasMajor(){
        return !!this.major;
    }

}

class Traveller extends Person{
    constructor(name, age, location){
        super(name, age)
        this.location = location
    }
}

const me = new Traveller('Nami', 26, 'Charllote');
console.log(me);

const other = new Traveller();
console.log(other);