const express = require('express')
const router = express.Router()
const Expense = require('../../models/expense')


router.get('/new', (req, res) => {
  res.render('new')
})

router.post('/', async (req, res) => {
  try {
    const { name, date, category, amount } = req.body
    const id = await Expense.find().lean().then(records => records.length + 1)
    Expense.create({ id, name, date, category, amount })
    res.redirect('/')
  } catch (err) {
    console.log(err)
  }
})

router.get('/:id/edit', (req, res) => {
  const id = req.params.id
  Expense.findById(id)
    .lean()
    .then((expense) => {
      res.render('edit', { expense })
    })
    .catch(error => console.log(error))
})


router.put('/:id', (req, res) => {
  const id = req.params.id
  const { name, date, category, amount } = req.body
  Expense.findById(id)
    .then(expense => {
      expense.name = name,
        expense.date = date,
        expense.category = category,
        expense.amount = amount,
        expense.save()
    })
    .then(() => res.redirect('/'))    
    .catch(error => console.log(error))
})

router.delete('/:id', (req, res) => {
  const id = req.params.id
  Expense.findById(id) //確保資料存在
    .then(expense => expense.remove())
    .then(() => res.redirect('/'))
    .catch(error => console.log(error))
})
module.exports = router