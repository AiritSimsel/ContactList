const express = require('express');
const contactController = require('../controllers/mainController');
const router = express.Router({ mergeParams: true });

router.get('/', contactController.getMainPage);

router.post('/createContact', contactController.postNewContact);

router.post('/delete', contactController.deleteContact);

module.exports = router;

//lisa projektile uus route nimega shoppingList
//lisa projektile ka kontrollerit shoppingList routeri jaoks
//shoppingList leheküljel peab olema kirjutatud Shopping List
