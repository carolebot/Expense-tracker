const express = require('express')
const router = express.Router()

const home = require('./modules/home')
const expenses = require('./modules/expenses')

router.use('/', home)
router.use('/expenses', expenses) //把路徑的/restaurants放這裡


module.exports = router