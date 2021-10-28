const Person = require('../models/task');

exports.getMainPage = (req, res) => {
   Person.fetchContacts(listOfContacts => {
     console.log(listOfContacts);
     
     res.render('index.ejs', {contacts: listOfContacts});
   });
  
};

exports.postNewContact = (req, res, next) => {
    const newUserContact = {
      name: req.body.newName,
      phone: req.body.newNumber
    };

    let newContact = new Person(newUserContact);
    newContact.savePerson();
    console.log(newContact);

    res.redirect('/');

};

exports.deleteContact =  (req, res) => {
    
    let contactToDelete = {
        name: req.body.button,
        phone: req.body.hiddenbutton
    }
    
    Person.deletePerson(contactToDelete);
    res.redirect('/');

};