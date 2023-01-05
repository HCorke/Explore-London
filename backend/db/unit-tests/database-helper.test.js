const dbHelper = require('../database-helper')
jest.mock('../database-helper')

describe('when invoking the getCollection function', () => {
    describe('#getCollection', () => {
        it('should call getCollection with the collectionName', async () => {
            const collectionName = "explore-london"
            const connectSpy = jest.spyOn(dbHelper, 'getCollection')
            await dbHelper.getCollection(collectionName)
            expect(connectSpy).toBeCalledWith(collectionName)
        })

        it('should return an array', async () => {
            const connectSpy = jest.spyOn(dbHelper, 'getCollection').mockReturnValue([])
            await dbHelper.getCollection()
            expect(connectSpy).toReturnWith([])
        })
    })
})

// describe('when invoking the insertDocument function', () => {
//     describe('#insertDocument', () => {
//         it('should call insertDocument with the createdSamosa', async () => {
//             const createdSamosa = {
//                 "samosaId": "000",
//                 "samosaName": "some name",
//                 "price": 55,
//                 "spiceLevel": 2,
//                 "ingredients": ["some ingredients"],
//                 "stockLevel": 100,
//                 "packSize": 75,
//                 "description": "This is a samosa credted by one of our wonderful customers!",
//                 "allergens": ["Please refer to ingredients"]
//             }
//             const connectSpy = jest.spyOn(dbHelper, 'insertDocument')
//             await dbHelper.insertDocument(createdSamosa)
//             expect(connectSpy).toBeCalledWith(createdSamosa)
//         })
//     })
// })

// describe('when invoking the updateSamosaStockLevel function', () => {
//     describe('#updateSamosaStockLevel', () => {
//         it('should call updateSamosaStockLevel with the customers order', async () => {
//             const order = {
//                 "customerDetails": {
//                     "delivery": "secondclass"
//                 },
//                 "orderDetails": [
//                     {
//                         "_id": "62eae12a1e300522433aa5e1",
//                         "samosaId": "004",
//                         "samosaName": "Mookyway",
//                         "spiceLevel": "0",
//                         "price": 33,
//                         "stockLevel": "100",
//                         "packsize": 150,
//                         "allergens": [
//                             "wheat",
//                             "dairy"
//                         ],
//                         "ingredients": [
//                             "milk"
//                         ],
//                         "description": "...",
//                         "quantity": 4
//                     }
//                 ]
//             }
//             const connectSpy = jest.spyOn(dbHelper, 'updateSamosaStockLevel')
//             await dbHelper.updateSamosaStockLevel(order)
//             expect(connectSpy).toBeCalledWith(order)
//         })
//     })
// })
