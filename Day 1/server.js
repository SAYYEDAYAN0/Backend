const express = require('express')
const app = express()
const port = 3000


// 1. setup view engine
app.set("view engine", "ejs")

const mainRouter = require("./Routes/main_route")
app.use(mainRouter)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})