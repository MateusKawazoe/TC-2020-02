module.exports = class Person2 {
    constructor(name, age) {
        this.name = name
        this.age = age
    }

    getAge() {
        return this.age
    }

    getName() {
        return this.name
    }
}