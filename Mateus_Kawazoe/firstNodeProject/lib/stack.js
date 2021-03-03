module.exports = class Stack {

    emptyStack(stack) {
        if(!stack[0])
            throw 'Empty stack'
    }

    fullStack(stack, size) {
        if(size === stack.length)
            throw 'Full stack'
    }

    insert(stack, size, data) {
        this.fullStack(stack, size)
        stack.unshift(data)
        this.stacksize = stack.length
        return stack
    }

    remove(stack, size, data) {
        this.emptyStack(stack)
        stack.shift()
        this.stacksize = stack.length
        return stack
    }
}