//@desc  Get all transactions
//@route GET /api/v1/transactions
//@access Public
exports.getTransactions = (req,res,next) => {
    res.send('get transactions')
}

//@desc  Add transaction
//@route POST /api/v1/transactions
//@access Public
exports.addTransactions = (req,res,next) => {
    res.send('add transactions')
}

//@desc  Delete transaction
//@route GET /api/v1/transactions/:id
//@access Public
exports.deleteTransactions = (req,res,next) => {
    res.send('delete transactions')
}