const Person = require('./person')
const BMIStatus = require('./bmistatus')

module.exports = class BMICalculator {

    validate(person) {
        this.emptyValues(person)
    }

    emptyValues(person) {
        if(!person.weight || !person.height || !person.name)
            throw 'empty value(s)'
    }

    calculate(name, weight, height) {
        let person = new Person(name, weight, height)

        this.validate(person)

        let bmi = parseFloat((person.weight / (Math.pow(person.height,2))).toFixed(2))
        let classification = ''

        switch(true) {
            case bmi < 18.5:
                classification = 'Underweight'
                break
            case bmi < 25:
                classification = 'Normal range'
                break
            case bmi < 30:
                classification = 'Overweight'
                break
            default:
                classification = 'Obese'
        }

        this.bmiStatus = new BMIStatus(bmi, classification)
    }
}