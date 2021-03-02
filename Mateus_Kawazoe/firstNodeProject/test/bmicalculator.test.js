const BMICalculator = require('../lib/bmicalculator')

describe('BMICalculator', () => {
    const bmiCalculator = new BMICalculator()

    test('test a empty name', () => {
        expect(() => {
            bmiCalculator.calculate('' , 76 , 1.7 )
        }).toThrow('empty value(s)')
    })

    test('test a empty weight', () => {
        expect(() => {
            bmiCalculator.calculate('Lucas' , 0 , 1.7 )
        }).toThrow('empty value(s)')
    })

    test('test a empty height', () => {
        expect(() => {
            bmiCalculator.calculate('Lucas' , 76 , 0 )
        }).toThrow('empty value(s)')
    })

    test('test bmi calculator (underweight)', () => {
        bmiCalculator.calculate('Lucas', 50, 1.7)
        expect(bmiCalculator.bmiStatus.bmi).toBe(parseFloat((50/(Math.pow(1.7,2))).toFixed(2)))
        expect(bmiCalculator.bmiStatus.classification).toBe('Underweight')
    })

    test('test bmi calculator (normal range)', () => {
        bmiCalculator.calculate('Lucas', 55, 1.7)
        expect(bmiCalculator.bmiStatus.bmi).toBe(parseFloat((55/(Math.pow(1.7,2))).toFixed(2)))
        expect(bmiCalculator.bmiStatus.classification).toBe('Normal range')
    })

    test('test bmi calculator (overweight)', () => {
        bmiCalculator.calculate('Lucas', 78, 1.7)
        expect(bmiCalculator.bmiStatus.bmi).toBe(parseFloat((78/(Math.pow(1.7,2))).toFixed(2)))
        expect(bmiCalculator.bmiStatus.classification).toBe('Overweight')
    })

    test('test bmi calculator (underweight)', () => {
        bmiCalculator.calculate('Lucas', 100, 1.7)
        expect(bmiCalculator.bmiStatus.bmi).toBe(parseFloat((100/(Math.pow(1.7,2))).toFixed(2)))
        expect(bmiCalculator.bmiStatus.classification).toBe('Obese')
    })
})