import express from 'express'
import 'dotenv/config'
import cors from 'cors'
import products from './src/routes/products.route.js'
const app = express()
const port = process.env.PORT

app.use(cors())
app.use(express.json())
app.use('/api/v1/products', products)

app.get('/', (req, res) => {
  res.json({'message': 'welcome to products api!'})
})

app.get('*', (req,res) => {
  res.json({'message': 'resource not found'})
})

app.listen(port, () => {
  console.log(`Products server listening at http://localhost:${port}`)
});