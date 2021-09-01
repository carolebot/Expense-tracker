const express = require('express')
const router = express.Router()
const Expense = require('../../models/expense')
const moment = require('moment')

const CategoryIcon = {
  Home: 'fas fa-house-user',
  Traffic: 'fas fa-shuttle-van',
  Entertainment: 'fas fa-grin-beam',
  Food: 'fas fa-utensils',
  Other: 'fas fa-pen',
}


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
        expense.category = CategoryIcon[expense.category] || "fas fa-pen"
      })
      res.render('index', { expenses, totalAmount, sort })
    })
    .catch(err => console.error(err))
})

module.exports = router
