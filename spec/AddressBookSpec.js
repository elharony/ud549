// Test Suit
describe('Address Book', function() {

    // Add Contact
    it('Should be able to add a contact', function() {

        // Instantiate our objects
        let addressBook = new AddressBook(),
            thisContact = new Contact();

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

        // Instantiate our objects
        let addressBook = new AddressBook(),
            thisContact = new Contact();
        
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