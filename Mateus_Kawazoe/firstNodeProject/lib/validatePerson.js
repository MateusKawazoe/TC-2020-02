const Person = require('./person3')

module.exports = class ValidatePerson {
    validate(person) {
        this.validEmail(person.email)
        this.validName(person.name)
        this.validAge(person.age)
    }

    validEmail(email) {
        const regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i

        if (!regex.test(String(email).toLowerCase()))
            throw 'Invalid e-mail'
    }

    validName(name) {
        const regex = /([a-zA-Z]+\s+[a-zA-Z])[a-zA-Z]+/
        if (!regex.test(name))
            throw 'Invalid name'

        const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']
        for (let i = 0; i < name.length; i++) {
            for (let j = 0; j < 9; j++) {
                if (name.charAt(i) === numbers[j])
                    throw 'Invalid name'
            }
        }
    }

    validAge(age) {
        const regex = /^0*(?:[1-9][0-9]?|199)$/
        if(!regex.test(age))
            throw 'Invalid age'
    }

    save(person) {
        this.validate(person)
        this.person = new Person(person.name, person.age, person.email)
    }
}