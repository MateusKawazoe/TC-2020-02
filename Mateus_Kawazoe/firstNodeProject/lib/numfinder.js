class NumFinder {

    constructor() {

    }

    validate(arr) {
        this.checkLen(arr)
        this.checkArrayOfNumbers(arr)
    }

    checkLen(arr) {
        if (arr.length === 0)
            throw 'empty array'
    }

    checkArrayOfNumbers(arr) {
        arr.forEach(element => {
            if (typeof element !== 'number')
                throw 'invalid array'
        })
    }

    find(arr) {
        this.validate(arr)
        this.biggest = arr[0]
        this.smallest = arr[0]

        arr.forEach(element => {
            if (element < this.smallest)
                this.smallest = element
            else if (element > this.biggest)
                this.biggest = element
        })
    }
}

module.exports = NumFinder