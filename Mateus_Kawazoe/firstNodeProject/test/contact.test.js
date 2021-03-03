const Contact = require('../lib/contact')
const ContactDAO = require('../lib/contactDAO')

describe('Contact', () => {
    const contactDAO = new ContactDAO()
    var contact

    test('Empty required fields', () => {
        contact = new Contact('', 'asdasd', 'leãozinho_leão@hotmail.com', '99999', 24, 65)

        expect(() => {
            contactDAO.save(contact)
        }).toThrow('Required fields')
        contact = new Contact('Lucas', '', 'leãozinho_leão@hotmail.com', '99999', 24, 65)

        expect(() => {
            contactDAO.save(contact)
        }).toThrow('Required fields')
        contact = new Contact('Lucas', 'asdasd', '', '99999', 24, 65)

        expect(() => {
            contactDAO.save(contact)
        }).toThrow('Required fields')
    })

    test('Valid age', () => {
        contact = new Contact('Lucas', 'asdasd', 'leãozinho_leão@hotmail.com', '99999', 100, 65)

        expect(() => {
            contactDAO.save(contact)
        }).toThrow('Invalid age')
    })

    test('Valid weight', () => {
        contact = new Contact('Lucas', 'asdasd', 'leãozinho_leão@hotmail.com', '99999', 24, 200)

        expect(() => {
            contactDAO.save(contact)
        }).toThrow('Invalid weight')
    })

    test('Save contact', () => {
        contact = new Contact('Lucas', 'asdasd', 'leãozinho_leão@hotmail.com', '99999', 24, 65)
        contactDAO.save(contact)
        expect(contactDAO.contact.name).toBe('Lucas')
        expect(contactDAO.contact.password).toBe('asdasd')
        expect(contactDAO.contact.email).toBe('leãozinho_leão@hotmail.com')
        expect(contactDAO.contact.phone).toBe('99999')
        expect(contactDAO.contact.age).toBe(24)
        expect(contactDAO.contact.weight).toBe(65)
    })
})