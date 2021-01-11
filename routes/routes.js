const router = require('express').Router();  
const biscuitService = require('./microservice/biscuits')
  
router.use('/cakes', biscuitService);

module.exports = router;