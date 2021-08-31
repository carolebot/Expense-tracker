const express = require('express')
const router = express.Router()
const Expense = require('../../models/expense')
const moment = require('moment')


router.get('/new', (req, res) => {
  res.render('new')
})

router.post('/', (req, res) => {
  const { name, date , category, amount} = req.body
  const expense = new Expense({
    name, date, category, amount
  })
  const formErrors = []
  if (isNaN(Number(amount))) formErrors.push({ message: '金額欄位僅能輸入數字資料' })
  
  console.log(expense)
  expense.save()
    .then(() => res.redirect('/'))
    .catch(error => console.log(error))


})


module.exports = router