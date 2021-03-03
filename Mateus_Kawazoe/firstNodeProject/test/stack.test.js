const Stack = require('../lib/stack')

describe('Stack', () => {
    const stack = new Stack()
    const array = []

    test('Empty stack', () => {
        expect(() => {
            stack.remove(array, 5, 'Loucura')
        }).toThrow('Empty stack')
    })

    test('Insert data', () => {
        stack.insert(array, 5, 'Loucura')
        expect(stack.stacksize).toBe(array.length)
        expect(array[0]).toBe('Loucura')
    })

    test('Full stack', () => {
        expect(() => {
            stack.insert(array, 1, 'Loucura')
        }).toThrow('Full stack')
    })

    test('Remove data', () => {
        stack.remove(array, 5)
        expect(stack.stacksize).toBe(array.length)
        expect(array).toStrictEqual([])
    })
})