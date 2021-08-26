// set express & tools
const express = require('express')
const app = express()
const port = 3000
const exphbs = require('express-handlebars')


// set hbs 預設佈局main
app.engine = ('hbs', exphbs({ defaultLayout: 'main' })) 
app.set('view engine', 'hbs')


// setting static files
app.use(express.static('public'))


// body-parser
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.send('This is my first Express web APP with nodemon!')
})

app.listen(port, () => {
  console.log(`running on http://localhost:${port}`)
})