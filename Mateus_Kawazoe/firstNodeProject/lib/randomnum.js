module.exports = class RandomNum {

    constructor() {

    }

    validate(floor, ceiling) {
        this.smallerThanZero(floor, ceiling)
        this.floorBiggerThanCeiling(floor, ceiling)
    }

    floorBiggerThanCeiling(floor, ceiling) {
        if (floor >= ceiling)
            throw '-1'
    }

    smallerThanZero(floor, ceiling) {
        if (floor < 0 || ceiling < 0)
            throw '-1'
    }

    randomNumberGen(floor, ceiling) {
        this.validate(floor, ceiling)
        const diff = ceiling - (floor + 1)

        this.randomNum = Math.floor(Math.random() * diff) + (floor + 1)
    }
}