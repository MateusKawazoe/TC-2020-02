const RandomNum = require('../lib/randomnum')

describe('RandomNum', () => {
    const random = new RandomNum()

    test('floor/ceiling bigger than zero', () => {
        expect(() => {
            random.randomNumberGen(1, -2)
        }).toThrow('-1')
    })

    test('floor bigger than ceiling', () => {
        expect(() => {
            random.randomNumberGen(10, 2)
        }).toThrow('-1')
    })

    test('Random number between an interval', () => {
        random.randomNumberGen(200, 3000)
        expect(random.randomNum).toBeWithinRange(200, 3000)
    })

    expect.extend({
        toBeWithinRange(received, floor, ceiling) {
            if(received => floor && received <= ceiling) {
                return {
                    message: () => 
                        `expected ${received} not to be within range ${floor} - ${ceiling}`,
                    pass: true
                }
            } else {
                return {
                    message: () => 
                        `expected ${received} to be within range ${floor} - ${ceiling}`,
                    pass: false
                }
            }
        }
    })
})