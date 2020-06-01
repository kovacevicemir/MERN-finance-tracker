const Transaction = require('../../models/Transaction')

//@desc  Get all transactions
//@route GET /api/v1/transactions
//@access Public
exports.getTransactions = async (req,res,next) => {
    try {
        const transactions = await Transaction.find()
        return res.status(200).json({
            succes:true,
            count: transactions.length,
            data: transactions
        })
    } catch (err) {
        return res.send(500).json({
            success:false,
            error: 'server error'
        })
    }
}

//@desc  Add transaction
//@route POST /api/v1/transactions
//@access Public
exports.addTransactions = async (req,res,next) => {
    res.send('add transactions')
}

//@desc  Delete transaction
//@route GET /api/v1/transactions/:id
//@access Public
exports.deleteTransactions = async (req,res,next) => {
    res.send('delete transactions')
}