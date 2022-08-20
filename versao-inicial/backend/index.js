const app = require('express')()
const consign = require('consign')
const db = require('./config/db')

app.db = db
const port = 3000

consign()
  .include('./config/passport.js')
  .then('./config/middlewares.js')
  .then('./api/validation.js')
  .then('./api')
  .then('./config/routes.js')
  .into(app)

app.listen(port, () => {
  const date = new Date()
  console.log(`Backend executando na porta ${port}, atualizado as ${date.toString() }`)
})