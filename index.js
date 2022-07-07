const { listContacts, getContactById, addContact, removeContact } = require('./contacts');

const argv = require('yargs').argv;

async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case 'list':
          const contacts = await listContacts();
          console.log(contacts);
      break;

    case 'get':
      const contact = await getContactById(id);
      if (!contact) {
        throw new Error(`Contact with id=${id} not found`)
      }
        console.log(contact);
      break;

    case 'add':
          const lastContact = await addContact(name, email, phone);
          console.log(lastContact);
      break;

    case 'remove':
      const deleteContact = await removeContact(id);
      if (!deleteContact) {
        throw new Error(`Contact with id=${id} not found`)
      }
      console.log(deleteContact);
      break;

    default:
      console.warn('\x1B[31m Unknown action type!');
  }
}

invokeAction(argv);