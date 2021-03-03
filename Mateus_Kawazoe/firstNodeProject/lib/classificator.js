module.exports = class Classificator {

    validate(person) {
        this.emptyPerson(person)
        this.validAge(person.getAge())
    }

    validAge(age) {
        if (age <= 0 || age >= 110 || typeof age !== 'number')
            throw 'Invalid age'
    }

    emptyPerson(person) {
        if (person === null)
            throw 'Null person'
        if (!person)
            throw 'Empty person'
    }

    ageRange(person) {
        this.validate(person)
        let classification, age = person.getAge()

        switch (true) {
            case age <= 11:
                classification = 'Child'
                break
            case age <= 18:
                classification = 'Teen'
                break
            case age <= 59:
                classification = 'Adult'
                break
            default:
                classification = 'Elderly'
                break
        }

        this.classification = classification
    }
}