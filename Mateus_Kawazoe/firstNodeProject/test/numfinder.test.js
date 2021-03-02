const NumFinder = require('../lib/numfinder')

describe('NumFinder', () => {
    const numFinder = new NumFinder()

    test('test a small array', () => {
        numFinder.find([1, 10])
        expect(numFinder.biggest).toBe(10)
        expect(numFinder.smallest).toBe(1)
    })

    test('test an unordered array', () => {
        numFinder.find([-99, 5, 1, 10, 300, -790, 6])
        expect(numFinder.biggest).toBe(300)
        expect(numFinder.smallest).toBe(-790)
    })

    test('test a empty array', () => {
        expect(() => {
            numFinder.find([])
        }).toThrow('empty array')
    })

    test('test array with objects and numbers', () => {
        expect(() => {
            numFinder.find([1, 2, 3, { nome: 'joao' }, 5, 6])
        }).toThrow('invalid array')
    })
})