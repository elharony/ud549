class AddressBook {
    constructor() {
        this.contacts = [];
        this.initialComplete = false;
    }
    addContact(contact) {
        this.contacts.push(contact);
    }
    getContact(index) {
        return this.contacts[index];
    }
    deleteContact(index) {
        this.contacts.splice(index, 1);
    }
    getInitialContacts(cb) {
        let self = this;

        setTimeout(function() {
            self.initialComplete = true;
            if (cb) {
                return cb();
            }
        }, 3);
    }
}