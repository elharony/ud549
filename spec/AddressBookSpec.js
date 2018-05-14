// Test Suit
describe('Address Book', function() {
    let addressBook, thisContact;

    beforeEach(function() {
        // Instantiate our objects
        addressBook = new AddressBook(),
        thisContact = new Contact();
    });

    // Add Contact
    it('Should be able to add a contact', function() {

        // Add new contact
        addressBook.addContact(thisContact);

        /* 
         * Expectations:
         * - Check if the new contact has been added successfully
         */
        expect(addressBook.getContact(0)).toBe(thisContact);

    });


    // Delete Contact
    it('Should be able to delete a contact', function() {

        // Delete contact
        addressBook.addContact(thisContact);
        addressBook.deleteContact(0);

        /* 
         * Expectations:
         * - Check if the Contact has been deleted or not
         */
        expect(addressBook.getContact(0)).not.toBeDefined();

    });

});


// Async
describe('Async Address Book', function () {
    it('should grap initial contacts', function() {
        let addressBook = new AddressBook();
        addressBook.getInitialContacts();
        expect(addressBook.initialComplete).toBe(true);
    });
});