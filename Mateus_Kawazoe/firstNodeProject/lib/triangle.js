module.exports = class Triangle {
    validate(x, y, z) {
        this.sumOfSides(x, y, z)
        this.invalidSide(x, y, z)
    }

    sumOfSides(x, y, z) {
        switch (true) {
            case (x + y) <= z:
                throw 'Invalid triangle'
            case (z + y) <= x:
                throw 'Invalid triangle'
            case (x + z) <= y:
                throw 'Invalid triangle'
        }
    }

    invalidSide(x, y, z) {
        if (x <= 0 || y <= 0 || z <= 0)
            throw 'Invalid side'
    }

    calculate(x, y, z) {
        this.validate(x, y, z)

        switch (true) {
            case (x === y && y === z && z === x):
                this.classification = 'Equilateral'
                break
            case (x !== y && y !== z && z !== x):
                this.classification = 'Scaleno'
                break
            default:
                this.classification = 'Isosceles'
                break
        }
    }
}