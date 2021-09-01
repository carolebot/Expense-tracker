// require db config setting
const db = require('../../config/mongoose')
const Expense = require('../expense')
const expenseList = require('../../expense.json')
console.log(expenseList.results)

db.once('open', () => {
  expenseList.results.forEach(async data => {
    await Expense.create({
      id: data.id,
      name: data.name,
      date: data.date,
      amount: data.amount,
      category: data.category
    })
      .then(() => {
        process.exit()
      })
      .catch(error => console.log(error))
  })
})
