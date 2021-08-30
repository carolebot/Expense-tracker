const express = require('express')
const router = express.Router()
const Expense = require('../../models/expense')
const moment = require('moment')

// browse all restaurants
router.get('/', (req, res) => {
  let totalAmount = 0

  Expense.find()
    .lean()
    .then(expenses => {
      expenses.forEach(expense => {
        expense.date = moment(expense.date).format('YYYY/MM/DD')
        totalAmount += expense.amount
      })
      res.render('index', { expenses, totalAmount })
    })
    .catch(err => console.error(err))
})

module.exports = router
