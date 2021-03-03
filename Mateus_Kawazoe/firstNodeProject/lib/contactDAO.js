const Contact = require('./contact')

module.exports = class ContactDAO {
    validate(contact) {
        this.requiredFields(contact)
        this.validAge(contact.age)
        this.validWeight(contact.weight)
    }

    requiredFields(contact) {
        if(!contact.name || !contact.password || !contact.email)
            throw 'Required fields'
    }

    validAge(age) {
        const regex = /^0*(?:[1-9][0-9]?|99)$/

        if(!regex.test(age))
            throw 'Invalid age'
    }

    validWeight(weight) {
        const regex = /^0*(?:[1-9][0-9]?|199)$/

        if(!regex.test(weight))
            throw 'Invalid weight'
    }

    save(contact) {
        this.validate(contact)
        this.contact = new Contact(contact.name, contact.password, contact.email, contact.phone, contact.age, contact.weight)
    }
}