import express from 'express'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const app = express()
const router = express.Router()

const directoryFullName = dirname(fileURLToPath(import.meta.url))

app.set('view engine', 'ejs')
app.set('views', join(directoryFullName, 'views'))
app.use(express.static(join(directoryFullName, '..', 'public')))
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.use('/', router)
router.get('/purchase-confirmation', (req, res) => {
  res.render('purchase-confirmation')
})
router.get('/form', (req, res) => {
  res.render('incorrect-form')
})
router.get('/navigate', (req, res) => {
  res.render('navigate')
})
router.get('/profile-edit', (req, res) => {
  res.render('profile-edit')
})
router.get('/colour-contrast', (req, res) => {
  res.render('colour-contrast')
})
router.get('/focus-order', (req, res) => {
  res.render('focus-order')
})
router.get('/content-size', (req, res) => {
  res.render('content-size')
})
router.get('/affordance', (req, res) => {
  res.render('affordance')
})

router.get('/', (req, res) => {
  res.render('start')
})

app.listen('8080', () => {
  console.log("Server running on http://localhost:8080")
})