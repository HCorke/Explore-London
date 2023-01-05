import express from 'express'
import cors from 'cors'
import { getCollection, insertDocument, updateSamosaStockLevel } from './db/database-helper.js'
const app = express()
const port = 8080

import process from 'process'
process.title = "MyExpressApp"

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors())

app.get('/api/healthcheck', (request, response) => {
  response.sendStatus(200)
})

app.get('/api/collection/:collectionName', async (request, response) => {
    const documents = await getCollection(request.params.collectionName)
    response.send(documents)
})

app.post('/api/insertDocument/:collectionName', async (request, response) => {
  const body = request.body;
  const collection = request.params.collectionName
  await insertDocument(body, collection)
  response.send(body)
})

// app.post('/api/updateSamosaStockLevel/:collectionName', async (request, response) => {
//   const body = request.body;
//   const collection = request.params.collectionName
//   await updateSamosaStockLevel(body, collection)
//   response.send(body)
// })

// Activate!
export const server = app.listen(port, () => {
    console.log(`App running on port ${port} as process ${process.title}`)
})
