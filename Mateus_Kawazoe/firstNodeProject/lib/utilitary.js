const Edge = require('../lib/edge')

module.exports = class Utilitary {

    constructor() {

    }

    validate(arr) {
        this.emptyArray(arr)
        this.nullArray(arr)
    }

    emptyArray(arr) {
        if (arr.length == 0)
            throw 'empty array'
    }

    nullArray(arr) {
        if (arr === null)
            throw 'null array'
    }

    findEdges(arr) {
        let min = arr[0], max = arr[0], maxIndex = 0, minIndex = 0

        arr.forEach(element => {
            if (element < min) {
                min = element
                minIndex = arr.indexOf(element)
            }
            if (element > max) {
                max = element
                maxIndex = arr.indexOf(element)
            }
        });

        this.edges = new Edge(min, max, minIndex, maxIndex)
    }

}