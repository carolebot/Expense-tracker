// set express & tools
const express = require('express')
const app = express()
const port = 3000
const exphbs = require('express-handlebars')
const methodOverride = require('method-override')

// set hbs 預設佈局main
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')


// setting static files
app.use(express.static('public'))


// body-parser
app.use(express.urlencoded({ extended: true }))


// methodOverride
app.use(methodOverride('_method'))


app.get('/', (req, res) => {
  res.render('index')
})

app.listen(port, () => {
  console.log(`running on http://localhost:${port}`)
})