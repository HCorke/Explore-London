import { MongoClient } from 'mongodb'

const URL = process.env.MONGO_URL
const DATABASE_NAME = "explore-london"

const clientOptions = process.env.LOCAL_MODE === "true" ? undefined : {
    authSource: "$external",
    authMechanism: "MONGODB-AWS",
}

export const getCollection = async (collectionName) => {
    const client = await MongoClient
        .connect(URL, clientOptions)
        .catch(
            error => {
                console.log(error)
            })
    const db = client.db(DATABASE_NAME)
    const documents = await db.collection(collectionName).find().toArray()
    return documents
}

export const insertDocument = async (body, collection) => {
    const client = await MongoClient
        .connect(URL, clientOptions)
        .catch(
            error => {
                console.log(error)
            })
    const db = client.db(DATABASE_NAME)

    db.collection(collection).insertOne(body, (error, response) => {
        if (error) {
            return error
        }
        client.close()
        return
    })
}
