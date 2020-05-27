const request = require("supertest");
const server = require("../../api/server");

describe("Instructor Routes", () => {
  describe("Cant get classes without token", () => {
    it("Should return 400", () => {
      return request(server)
        .get("/api/instructor/class")
        .then((res) => {
          expect(res.status).toBe(400);
        });
    });
  });

  describe("Register instructors", () => {
    it("Middleware is working OK", () => {
      return request(server)
        .post("/api/instructor/class")
        .expect(400)
        .expect({ message: "Please supply token!" });
    });
  });
});
