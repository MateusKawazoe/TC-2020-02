const Statistics = require("./statistics")

module.exports = class Analyzer {
    validate(candidateArray) {
        this.emptyOrNullArray(candidateArray)
    }

    emptyOrNullArray(candidateArray) {
        if(candidateArray === null || !candidateArray[0])
            throw 'Empty or null array'
    }

    analyze(candidateArray) {
        this.validate(candidateArray)

        let avarageAge = 0, male = 0, female = 0

        candidateArray.forEach(element => {
            if(element.gender === 'F')
                female++
            else 
                male++

            avarageAge += element.age
        })

        let context = 'Normal'

        if(candidateArray.length === 1) {
            context = 'Without competition'
        } else if(candidateArray.length === 2) {
            context = 'Polarized'
        }

        this.statistics = new Statistics(male, female, (avarageAge/candidateArray.length), context)
    }

}