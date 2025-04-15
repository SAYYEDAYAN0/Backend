const express = require('express')
const cors = require('cors')
const app = express()
const port = 3000


app.use(cors())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get("/data", (req, res) => {
  const data = [
    {
      id: 1,
      name: "item1",
      description: "this is item 1"
    },
    {
      id: 2,
      name: "item2",
      description: "this is item 2"
    },
    {
      id: 3,
      name: "item3",
      description: "this is item 3"
    },
    {
      id: 4,
      name: "item4",
      description: "this is item 4"
    },
    {
      id: 5,
      name: "item5",
      description: "this is item 5"
    }
  ]
  res.send(data)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})