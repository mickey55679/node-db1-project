exports.checkAccountPayload = (req, res, next) => {

  console.log('checkAccountPayload middleware')
  next() // allow request to proceed
}

exports.checkAccountNameUnique = (req, res, next) => {
console.log("checkAccountNameUnique");
 next()
}

exports.checkAccountId = (req, res, next) => {
  // DO YOUR MAGIC
  console.log("checkAccountId middleware");
  next()
}
