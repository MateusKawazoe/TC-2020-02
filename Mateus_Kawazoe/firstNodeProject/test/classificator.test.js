const Person = require('../lib/person2')
const Classificator = require('../lib/classificator')

describe('Classificator', () => {
    const classificator = new Classificator()

    test('Empty or null person', () => {
        expect(() => {
            classificator.ageRange()
        }).toThrow('Empty person')
        expect(() => {
            classificator.ageRange(null)
        }).toThrow('Null person')
        expect(() => {
            classificator.ageRange(new Person('Lucas', 0))
        }).toThrow('Invalid age')
    })

    test('Age range (Child)', () => {
        classificator.ageRange(new Person('Lucas', 5))
        expect(classificator.classification).toBe('Child')
    })

    test('Age range (Teen)', () => {
        classificator.ageRange(new Person('Lucas', 15))
        expect(classificator.classification).toBe('Teen')
    })

    test('Age range (Adult)', () => {
        classificator.ageRange(new Person('Lucas', 25))
        expect(classificator.classification).toBe('Adult')
    })

    test('Age range (Elderly)', () => {
        classificator.ageRange(new Person('Lucas', 60))
        expect(classificator.classification).toBe('Elderly')
    })
})