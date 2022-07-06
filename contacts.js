const fs = require("fs/promises");
const path = require("path");
const { v4 } = require("uuid");

const contactsPath = path.join(__dirname, "/db/contacts.json");

async function listContacts() {
    const data = await fs.readFile(contactsPath);
    const contacts = JSON.parse(data);
    return contacts;
}

async function getContactById(contactId) {
    const data = await fs.readFile(contactsPath);
    const contacts = JSON.parse(data);
    const result = contacts.find(item => item.id === contactId);
   
    if (!result) {
        return null;
    }
    return result;
}

async function removeContact(id) {
  const data = await fs.readFile(contactsPath);
    const contacts = JSON.parse(data);
    const result = contacts.findIndex(contact => contact.id === id);
    console.log(result);
    if (result === -1) {
        return null;
    }
    // const [removeContact] = contacts.splice(result, 1);
    // await fs.writeFile(contactsPath, JSON.stringify(contacts));
    // return removeContact;
}

async function addContact(name, email, phone) {
    const contactsAll = await fs.readFile(contactsPath);
    const contacts = JSON.parse(contactsAll);
    const newContact = { id: v4(), name, email, phone};
    contacts.push(newContact);
    await fs.writeFile(contactsPath, JSON.stringify(contacts));
    return newContact;
}

module.exports = { listContacts, getContactById, removeContact, addContact };