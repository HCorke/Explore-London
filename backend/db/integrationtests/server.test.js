//supertest file
import request from "supertest";
import { server } from "../server.js";
jest.mock("../db/database-helper");
const dbHelper = require("../db/database-helper");

describe("integration test for server end points.", () => {
  afterAll(() => {
    server.close();
  });
  describe("GET collection", () => {
    it("should return a list of documents for the collection provided.", async () => {
      //mock the dbhelper getCollection function.
      const collectionName = "londonBoroughs";
      const returnValue = [
        {
          borough: "Barnet",
          area: "North London",
          neighbourhoods: [],
          veganRestaurants: [],
        },
      ];

      dbHelper.getCollection.mockImplementation(() => returnValue);

      const response = await request(server)
        .get(`/api/collection/${collectionName}`)
        .expect(200)
        .expect(returnValue);
    });
  });
});
