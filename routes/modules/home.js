const express = require('express')
const router = express.Router()
const Expense = require('../../models/expense')
const moment = require('moment')

// browse all restaurants
router.get('/', (req, res) => {
  let totalAmount = 0
  const sort = req.query.sort || ''
  const sortRegExp = new RegExp(sort, "i");
  console.log(sort)
  Expense.find({
    category: {
      $regex: sortRegExp
    }
  })
    .lean()
    .then(expenses => {
      expenses.forEach(expense => {
        expense.date = moment(expense.date).format('YYYY/MM/DD')
        totalAmount += expense.amount
      })
      res.render('index', { expenses, totalAmount, sort })
    })
    .catch(err => console.error(err))
})

module.exports = router
