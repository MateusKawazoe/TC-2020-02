module.exports = class Edge {

    constructor(min, max, minIndex, maxIndex) {
        var min, max, minIndex, maxIndex

        this.min = min
        this.max = max
        this.minIndex = minIndex
        this.maxIndex = maxIndex
    }

    getMin() {
        return this.min
    }

    getMax() {
        return this.max
    }

    getMinIndex() {
        return this.minIndex
    }

    getMaxIndex() {
        return this.maxIndex
    }
}