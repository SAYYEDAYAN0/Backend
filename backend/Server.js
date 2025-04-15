const express = require('express')
const app = express()
const port = 2025

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.set("view engine", "ejs")

const userModel = require('./models/user')

app.get('/', (req, res) => {
  res.render('index')
})

app.get('/home', (req, res) => {
  res.render('Home')
})

app.post("/create", (req, res) => {

  let {name, email, message} = req.body;  // Destructuring the request body

  const user = userModel.create({
    name,
    email,
    message
  })
  // res.send("User created successfully", user)
  res.redirect("/home")
})




app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
