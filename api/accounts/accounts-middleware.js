exports.checkAccountPayload = (req, res, next) => {
  // DO YOUR MAGIC
  // Note: you can either write "manual" validation logic
  // or use the Yup library (not currently installed)
  next() // allow request to proceed
}

exports.checkAccountNameUnique = (req, res, next) => {

 next()
}

exports.checkAccountId = (req, res, next) => {
  // DO YOUR MAGIC
  next()
}
