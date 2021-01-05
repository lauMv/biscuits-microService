const router = require('express').Router();  
const biscuitService = require('./microservice/biscuits')
  
router.use('/biscuits', biscuitService);

module.exports = router;