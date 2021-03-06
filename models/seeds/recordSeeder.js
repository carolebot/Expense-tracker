// require db config setting
const db = require('../../config/mongoose')
const Expense = require('../expense')
const expenseList = require('../../expense.json')
console.log(expenseList.results)

db.once('open', () => {
  expenseList.results.forEach(data => {
    Expense.create({
      id: data.id,
      name: data.name,
      date: data.date,
      amount: data.amount,
      category: data.category
    })
      .catch(error => console.log(error))
  })
})
