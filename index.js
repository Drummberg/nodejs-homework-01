const { listContacts, getContactById, addContact } = require('./contacts');

const argv = require('yargs').argv;

async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case 'list':
          const contacts = await listContacts();
          console.log(contacts);
      break;

    case 'get':
          const contact = await getContactById(id);
          console.log(contact);
      break;

    case 'add':
          const lastContact = await addContact(newContact);
          console.log(lastContact);
      break;

    case 'remove':
      
      break;

    default:
      console.warn('\x1B[31m Unknown action type!');
  }
}

const newContact = {
    name: "Yuriy Drummberg",
    email: "drummberg@gmail.com",
    phone: "(097) 645-9239"
}

invokeAction(({ action: "add", data: newContact }));