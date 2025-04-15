const express = require('express')
const bcrypt = require('bcrypt');
const app = express()
const port = 3000


app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.set('view engine', 'ejs')

const registrationModel = require('./models/registration')
const loginModel = require('./models/login')


app.get('/', (req, res) => {
  res.render('registration')
})

app.get('/login', (req, res) => {
  res.render('login')
})


app.post('/registration', (req, res) => {
  let { email, password, confirmPassword } = req.body;

  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(password, salt, (err, hash) => {
      

      const registrationData = registrationModel.create({

        email,
        password: hash,
        confirmPassword

      })
    })
  })

  res.redirect('/login')

})


app.post('/login', (req, res) => {
  let { email, password } = req.body;

  const loginData = loginModel.create({
    email,
    password
  })

  res.send('login successful')

})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})