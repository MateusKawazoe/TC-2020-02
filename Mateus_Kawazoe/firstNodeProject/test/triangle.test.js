const Triangle = require('../lib/triangle')

describe('Triangle', () => {
    const triangle = new Triangle()

    test('Check sum sides', () => {
        expect(() => {
            triangle.calculate(5, 5, 10)
        }).toThrow('Invalid triangle')
        expect(() => {
            triangle.calculate(5, 0, 100)
        }).toThrow('Invalid triangle')
        expect(() => {
            triangle.calculate(5, 5, 10)
        }).toThrow('Invalid triangle')
        expect(() => {
            triangle.calculate(5, -5, 10)
        }).toThrow('Invalid triangle')
    })

    test('Check classification (Equilateral)', () => {
        triangle.calculate(5, 5, 5)
        expect(triangle.classification).toBe('Equilateral')
    })

    test('Check classification (Scaleno)', () => {
        triangle.calculate(7, 5, 9)
        expect(triangle.classification).toBe('Scaleno')
    })

    test('Check classification (Isosceles)', () => {
        triangle.calculate(5, 5, 9)
        expect(triangle.classification).toBe('Isosceles')
    })
})