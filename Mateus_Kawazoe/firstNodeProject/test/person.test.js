const Person = require('../lib/person3')
const ValidatePerson = require('../lib/validatePerson')

describe('Person', () => {
    const valid = new ValidatePerson()
    var person
    
    test('Invalid email', () => {
        person = new Person('Lucas Shizuno', 18, 'leãozinho_leãohotmail.com')
        expect(() => {
            valid.save(person)
        }).toThrow('Invalid e-mail')
    })

    test('Invalid name', () => {
        person = new Person('Lucas Shizuno2', 18, 'leãozinho_leão@hotmail.com')
        expect(() => {
            valid.save(person)
        }).toThrow('Invalid name')
    })

    test('Invalid age', () => {
        person = new Person('Lucas Shizuno', 200, 'leãozinho_leão@hotmail.com')
        expect(() => {
            valid.save(person)
        }).toThrow('Invalid age')
    })

    test('test to create a person', () => {
        person = new Person('Lucas Shizuno', 24, 'leãozinho_leão@hotmail.com')
        valid.save(person)
        expect(person.name).toBe('Lucas Shizuno')
        expect(person.age).toBe(24)
        expect(person.email).toBe('leãozinho_leão@hotmail.com')
    })
})