// set express & tools
const express = require('express')
const app = express()
const port = 3000
const exphbs = require('express-handlebars')
const routes = require('./routes')
const methodOverride = require('method-override')
require('./config/mongoose')

// set hbs static files 預設佈局main
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))


// methodOverride
app.use(methodOverride('_method'))


// routes
app.use(routes)


// server start and listen
app.listen(port, () => {
  console.log(`running on http://localhost:${port}`)
})