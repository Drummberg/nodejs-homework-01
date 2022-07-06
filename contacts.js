const fs = require("fs/promises");
const path = require("path");
const { v4 } = require("uuid");

const contactsPath = path.join(__dirname, "/db/contacts.json");

async function listContacts() {
    const data = await fs.readFile(contactsPath);
    const contacts = JSON.parse(data);
    return contacts;
}

async function getContactById(ContactId) {
    const data = await fs.readFile(contactsPath);
    const contacts = JSON.parse(data);
    const result = contacts.find(item => item.id === ContactId);
    return result;
}

async function removeContact(contactId) {
  
}

async function addContact(data) {
    const contactsAll = await fs.readFile(contactsPath);
    const contacts = JSON.parse(contactsAll);
    const newContact = { id: v4(), ...data };
    contacts.push(newContact);
    await fs.writeFile(contactsPath, JSON.stringify(contacts));
    return newContact;
}

module.exports = { listContacts, getContactById, removeContact, addContact };