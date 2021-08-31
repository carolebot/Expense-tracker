// set express & tools
const express = require('express')
const app = express()
const port = 3000
const exphbs = require('express-handlebars')
const routes = require('./routes')
const methodOverride = require('method-override')
require('./config/mongoose')
const flash = require('connect-flash')

//icon 圖源
const CATEGORY = {
  house: "https://fontawesome.com/icons/home?style=solid",
  traffic: "https://fontawesome.com/icons/shuttle-van?style=solid",
  entertainment: "https://fontawesome.com/icons/grin-beam?style=solid",
  food: "https://fontawesome.com/icons/utensils?style=solid",
  others: "https://fontawesome.com/icons/pen?style=solid"
}

// set hbs static files 預設佈局main
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(flash())

// methodOverride
app.use(methodOverride('_method'))


// routes
app.use(routes)


// server start and listen
app.listen(port, () => {
  console.log(`running on http://localhost:${port}`)
})