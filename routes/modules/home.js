const express = require('express')
const router = express.Router()
const Expense = require('../../models/expense')

// browse all restaurants
router.get('/', (req, res) => {
  res.render('index')
})

module.exports = router