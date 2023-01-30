import express from 'express'
import cors from 'cors'
import { getCollection } from './db/database-helper.js'
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

// Activate!
export const server = app.listen(port, () => {
    console.log(`App running on port ${port} as process ${process.title}`)
})
