const express = require('express');
const app = express()

app.use(express.static('E\Project\rayan_docs\swagger-ui-dist'))

app.listen(3000)