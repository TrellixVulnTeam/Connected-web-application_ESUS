const { application } = require('express');
const express = require('express');
const router = express.Router();
const postController = require('../controllers/post_controller');



router.get('/posted',postController.post);
 

module.exports = router;