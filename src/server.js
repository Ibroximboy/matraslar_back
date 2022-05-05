const express = require('express')
const app = express()
const { PORT } = require('./config')
const cors = require('cors')
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser')

app.use(express.json())
app.use(cookieParser())
app.use(bodyParser.json());
app.use(cors())
app.use(require('./modules'))

app.listen(PORT, console.log(`Server running at port ${PORT}`))