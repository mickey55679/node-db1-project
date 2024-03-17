const router = require('express').Router()

const md = require('./accounts-middleware');

router.get('/', (req, res, next) => {
  // DO YOUR MAGIC
  try{
  res.json([{}, {}])
  } catch(err){
    next(err)

  }
})

router.get('/:id', md.checkAccountId, (req, res, next) => {
  try {
  } catch (err) {
    next(err);
  }
  // DO YOUR MAGIC
})

router.post('/',
 md.checkAccountPayload, 
 md.checkAccountNameUnique,
  (req, res, next) => {
  try {
  } catch (err) {
    next(err);
  }
  // DO YOUR MAGIC
})

router.put('/:id',
 md.checkAccountId, 
 md.checkAccountPayload, 
 md.checkAccountNameUnique,
  (req, res, next) => {
  
  try {
  } catch (err) {
    next(err);
  }
});

router.delete('/:id', md.checkAccountId, (req, res, next) => {
  // DO YOUR MAGIC
  try {
  } catch (err) {
    next(err);
  }
})

router.use((err, req, res, next) => { // eslint-disable-line
  res.status(err.status || 500).json({
 message: err.message, 
  });
});

module.exports = router;
