const Utilitary = require('../lib/utilitary')

describe('Utilitary', () => {
    const utilitary = new Utilitary()

    test('Empty array', () => {
        expect(() => {
            utilitary.emptyArray([])
        }).toThrow('empty array')
    })

    test('Null array', () => {
        expect(() => {
            utilitary.nullArray(null)
        }).toThrow('null array')
    })

    test('Edges numbers of an array', () => {
        utilitary.findEdges([1, 2, 3, 4, 5, 6])
        expect(utilitary.edges.getMin()).toBe(1)
        expect(utilitary.edges.getMax()).toBe(6)
        expect(utilitary.edges.getMinIndex()).toBe(0)
        expect(utilitary.edges.getMaxIndex()).toBe(5)
    })

    test('Edges numbers of an array', () => {
        utilitary.findEdges([1, 99, 3, -5, 8])
        expect(utilitary.edges.getMin()).toBe(-5)
        expect(utilitary.edges.getMax()).toBe(99)
        expect(utilitary.edges.getMinIndex()).toBe(3)
        expect(utilitary.edges.getMaxIndex()).toBe(1)
    })
})