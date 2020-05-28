const request = require("supertest");
const server = require("../../api/server");

describe("Client Routes", () => {
  describe("GET created classes from endpoint", () => {
    it("Should return 400", () => {
      return request(server)
        .get("/api/client/class")
        .then((res) => {
          expect(res.status).toBe(400);
        });
    });
  });

  describe("GET reservations from endpoint", () => {
    it("Should return 400", () => {
      return request(server)
        .get("/api/client/reservations")
        .then((res) => {
          expect(res.status).toBe(400);
        });
    });
  });

  describe("register reservations", () => {
    it("middleware working OK", () => {
      return request(server)
        .post("/api/client/reservations")
        .expect(400)
        .expect({ message: "Please supply token!" });
    });
  });
});
