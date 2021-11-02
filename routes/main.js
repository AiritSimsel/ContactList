const express = require('express');
const contactController = require('../controllers/mainController');
const router = express.Router({ mergeParams: true });

router.get('/', contactController.getMainPage);

router.post('/createContact', contactController.postNewContact);

router.post('/delete', contactController.deleteContact);

module.exports = router;
