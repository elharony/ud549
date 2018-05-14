// Test Suit
describe('Address Book', function() {

    // Add Contact
    it('Should be able to add a contact', function() {

        // Instantiate our objects
        let addressBook = new AddressBook(),
            newContact  = new Contact();

        // Add new contact
        addressBook.addContact(newContact);

        // Check if the new contact has been added successfully
        expect(addressBook.getContact(0)).toBe(newContact);

    });
});