// Test Suit
describe('Address Book', function() {
    let addressBook, thisContact;

    beforeEach(function() {
        // Instantiate our objects
        addressBook = new AddressBook(),
        thisContact = new Contact();
    });

    // Add Contact
    it('should be able to add a contact', function() {

        // Add new contact
        addressBook.addContact(thisContact);

        /* 
         * Expectations:
         * - Check if the new contact has been added successfully
         */
        expect(addressBook.getContact(0)).toBe(thisContact);

    });


    // Delete Contact
    it('should be able to delete a contact', function() {

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
    let addressBook = new AddressBook();

    // Make sure that we run our Async Method and it is ready now!
    beforeEach(function(done) {
        addressBook.getInitialContacts(function() {
            done();
        });
    });

    // Our Spec relies on `done()`
    it('should grap initial contacts', function(done) {
        expect(addressBook.initialComplete).toBe(true);
        done();
    });
});