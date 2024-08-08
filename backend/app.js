const express = require('express')
const cors = require('cors')

//Import router
const serviceRouter = require('./routes/serviceRoutes')

//App setup
const app = express()
const port = 3000

app.use(cors())

app.use('', serviceRouter)

//Port listen
app.listen(port, () => {
  console.log(`Server running on port ${port}`);

})