//supertest file
import request from "supertest";
import { server } from "../../server.js";
jest.mock("../../db/database-helper.js");
const dbHelper = require("../../db/database-helper.js");

describe("integration test for server end points.", () => {
  afterAll(() => {
    server.close();
  });
  describe("GET collection", () => {
    it("should return a list of documents for the collection provided.", async () => {
      //mock the dbhelper getCollection function.
      const collectionName = "londonBoroughsList";
      const returnValue = [
        {
          boroughName: "Barnet",
          area: "North London",
          neighbourhoods: [
            "Arkley",
            "Barnet Gate",
            "Brent Cross",
            "Brunswick Park",
            "Burnt Oak",
            "Childs Hill",
            "Church End",
            "Cockfosters",
            "Colindale",
            "Colney Hatch",
            "Cricklewood",
            "East Barnet",
            "East Finchley",
            "Edgware",
            "Finchley Central",
            "Friern Barnet",
            "Golders Green",
            "Grahame Park",
            "The Hale",
            "Hampstead Garden Suburb",
            "Hendon",
            "High Barnet",
            "The Hyde",
            "Mill Hill",
            "Monken Hadley",
            "Muswell Hill",
            "New Barnet",
            "New Southgate",
            "North Finchley",
            "Oakleigh Park",
            "Osidge",
            "Southgate",
            "Temple Fortune",
            "Totteridge",
            "West Hendon",
            "Whetstone",
            "Woodside Park",
          ],
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
