class Person {
    constructor(name = "Anonymous", age) {
        this._name = name;
        this._age = age;
    }
    getGreeting() {
        return "Hi"
    }
    get name() {
        return this._name
    }
    get age(){
        return this._age;
    }
}

class Student extends Person{
    constructor(name, age, major = 'Undecided') {
        super(name, age)
        this._major = major;
    }
    get major(){
        return this._major
    }
}
const me = new Person("Sharan S Menon", 13);
// const other = new Person();
const student = new Student("Stu", 23, "Biology");
// console.log(me.getGreeting())
console.log(student)
console.log(me);
