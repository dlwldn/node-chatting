// const person = {
//     name: "jiwoo",
//     age: 300
// }

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greeting() {
        console.log(`my name is ${this.name} my age is ${this.age}`);
    }

    goodBye() {
        console.log(`잘가세요 ${this.name}님`);
    }
}


module.exports = Person;