class AddressBook {
    constructor() {
        this.contacts = [];
    }
    addContact(newContact) {
        this.contacts.push(newContact);
    }
    getContact(index) {
        return this.contacts[index];
    }
}