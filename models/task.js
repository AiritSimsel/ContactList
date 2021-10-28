const fs = require('fs');
const path = require('path');

//path to the task.json
const pathToFile = path.join(path.dirname(require.main.filename), 'data', 'contact.json');

module.exports = class Person {
    constructor(person){
        this.contact = person;
        }



    savePerson(){
        fs.readFile(pathToFile, (error, fileContent) =>{
            let contacts = [];

            if(!error){
                contacts = JSON.parse(fileContent);
            } else {
                console.log(error);
            }

            contacts.push(this);

            fs.writeFile(pathToFile, JSON.stringify(contacts), (error) => {
                console.log('Error', error);
            });

        });
    }

    
    static fetchContacts(callBack){
        fs.readFile(pathToFile, (error, fileContent)=> {
            if(error){
                callBack([]);
            };

            callBack(JSON.parse(fileContent));
        });
    }

    
    static deletePerson(person) {
        fs.readFile(pathToFile, (error, fileContent)=> {
            let contacts = [];
            if(!error){
                contacts = JSON.parse(fileContent);
            }
            for(let i = 0; i < contacts.length; i++) {
                if(contacts[i].contact.name === person.name && contacts[i].contact.phone === person.phone) {
                    //delete an element from array
                    contacts.splice(i, 1);
                    break;
                }
            }

            fs.writeFile(pathToFile, JSON.stringify(contacts), (error) => {
                console.log(error);
            });

        });

    }
}

